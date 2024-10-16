import { useEffect, useRef, useMemo, useCallback } from 'react';
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

const Animation = () => {
    const ref = useRef<HTMLCanvasElement | null>(null);

    const { scrollYProgress } = useScroll()

    const images = useMemo<HTMLImageElement[]>(() => {
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 1; i <= 32; i++) {
            const img = new Image();
            img.src = `/images/${i}.webp`;
            loadedImages.push(img);
        }

        return loadedImages;
    }, []);

    const render = useCallback(
        (index: number) => {
            const canvas = ref.current;

            if (canvas && images[index - 1] && images[index - 1].complete) {
                const ctx = canvas.getContext("2d");
                const img = images[index - 1];
                if (ctx) {

                    ctx.clearRect(0, 0, canvas.width, canvas.height);
            
                    const canvasWidth = canvas.width;
                    const canvasHeight = canvas.height;
                    const imgAspectRatio = img.width / img.height;
                    const canvasAspectRatio = canvasWidth / canvasHeight;

                    let drawWidth: number, drawHeight: number;
                    if (imgAspectRatio > canvasAspectRatio) {
                        drawWidth = canvasWidth;
                        drawHeight = canvasWidth / imgAspectRatio;
                    } else {
                        drawHeight = canvasHeight;
                        drawWidth = canvasHeight * imgAspectRatio;
                    }

                    ctx.drawImage(
                        img,
                        (canvasWidth - drawWidth) / 2,
                        (canvasHeight - drawHeight) / 2,
                        drawWidth,
                        drawHeight
                    );
                }
            }
        },
        [images]
    );

    const currentIndex = useTransform(scrollYProgress, [0, 0.4], [1, 32]);

    useMotionValueEvent(currentIndex, "change", (latest) => {
        render(Math.floor(latest));
    });

    const resizeCanvas = useCallback(() => {
        const canvas = ref.current;
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            render(Math.floor(currentIndex.get()));
        }
    }, [render, currentIndex]);

    useEffect(() => {
        const handleLoad = () => {
            render(1); 
        };
        images.forEach((img) => {
            if (!img.complete) {
                img.onload = handleLoad;
            }
        });

        window.addEventListener('resize', resizeCanvas);

        resizeCanvas();

        return () => {
           
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [images, render, resizeCanvas]);

    return (
        <div className='animation' style={{position: "relative", height: "100vh", zIndex: "-1"}}>
            <canvas
                ref={ref}
                width={window.innerWidth}
                height={window.innerHeight}
                style={{
                    position: "fixed",
                    top: "10px",
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                }}
            />
        </div>
    );
}

export default Animation;