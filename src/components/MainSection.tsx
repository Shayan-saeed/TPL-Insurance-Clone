import React, { useEffect, useRef, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Footer from "./Footer";
const MainSection = () => {
    const [text] = useTypewriter({
        words: ['MARINE', 'MOBILE', 'AUTO'],
        loop: true,
        typeSpeed: 300,
        deleteSpeed: 120,
        delaySpeed: 90
    })

    // const videoRef = useRef<HTMLVideoElement>(null);
    // const [scrollProgress, setScrollProgress] = useState(0);

    // useEffect(() => {
    //     const handleScroll = () => {
    //       const scrollTop = window.pageYOffset;
    //       const windowHeight = window.innerHeight;
    //       const fullHeight = document.documentElement.scrollHeight;
    //       const scrollPercentage = scrollTop / (fullHeight - windowHeight);
    
    //       setScrollProgress(scrollPercentage);
    //     };
    
    //     window.addEventListener('scroll', handleScroll);
    
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);

    //   useEffect(() => {
    //     const video = videoRef.current;
    //     if (video) {
    //       const videoDuration = video.duration || 2;
    //       const playTime = scrollProgress * videoDuration;
    //       video.currentTime = playTime;
    
    //       if (scrollProgress > 0) {
    //         video.play();
    //       } else {
    //         video.pause();
    //       }
    //     }
    //   }, [scrollProgress]);

    return (
        <div className="container-fluid h-screen herocontainer">
            {/* <video
                ref={videoRef}
                src={`${process.env.PUBLIC_URL}/TPLInsurance-web-banner.mp4`}
                className="video-background"
                loop
                muted
                playsInline
            /> */}
            <div className="h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-12">
                        <h3 className="text-3xl">EVERYTHING COMES WITH A RISK,</h3>
                        <h3 className="text-3xl pt-1 font-semibold">THAT'S WHY WE ARE HERE TO</h3>
                        <h2 className="text-5xl pt-4 herofont">INSURE YOUR <span className="text-[#f57920] heroAnimateText">{text}</span><span><Cursor cursorStyle='|' /></span></h2>
                        <a className="btn btn-primary btn_getinsu" href="#">Get Insured</a>
                    </div>
                </div>
                <div className="containter-fluid w-full h-auto pt-16">
                    <h4 className="text-center text-2xl font-bold text-[#15233C]">Pakistan's Leading Insurtech</h4>
                    <p className="text-center text-lg text-[#696E77] tracking-normal">
                        We protect your assets by capitalizing on cutting-edge technology, backed by
                        24×7 customer services, catering to your needs anytime, anywhere.
                    </p>
                    <div className="container flex flex-col items-center mt-14">
                        <div className="text-lg mb-1 text-[#a5a1a1]">
                            <h3 className="w-1/4">Digital Products</h3>
                            {/* <h3 className="w-1/4"></h3>
                            <h3 className="w-1/4"></h3>
                            <h3 className="w-1/4"></h3> */}
                        </div>
                        <div className="flex justify-start items-center gap-4 mt-1">
                            <div className="pro_IconBox flex flex-col items-center rounded-lg border hover:border hover:shadow-lg">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/01.webp" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Auto</h3>
                            </div>
                            <div className="pro_IconBox flex flex-col items-center text-center bg-white rounded-lg border hover:shadow-lg">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/02.webp" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Travel</h3>
                            </div>
                            <div className="pro_IconBox flex flex-col items-center rounded-lg border hover:shadow-lg">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/03.webp" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Home</h3>
                            </div>
                            <div className="flex flex-col items-center hover:shadow-lg">

                            </div>
                        </div>
                        <div className="text-lg mb-1 text-[#a5a1a1]" style={{ marginTop: "2rem" }}>Other Products</div>
                        <div className="flex justify-start items-center gap-4 mt-1">
                            <div className="pro_IconBox flex flex-col items-center rounded-lg border hover:shadow-lg">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/04.webp" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Health</h3>
                            </div>
                            <div className="pro_IconBox flex flex-col items-center text-center bg-white rounded-lg border hover:shadow-lg">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/05.webp" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Property</h3>
                            </div>
                            <div className="pro_IconBox flex flex-col items-center rounded-lg border hover:shadow-lg">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/Bikeicon.png" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Bike</h3>
                            </div>
                            <div className="pro_IconBox flex flex-col items-center rounded-lg border hover:shadow-lg">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/09.webp" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Mobile</h3>
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-4 mt-1">
                            <div className="pro_IconBox flex flex-col items-center rounded-lg border hover:shadow-lg">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/06.webp" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Marine</h3>
                            </div>
                            <div className="pro_IconBox flex flex-col items-center text-center bg-white rounded-lg border hover:shadow-lg">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/07.webp" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Engineering</h3>
                            </div>
                            <div className="pro_IconBox flex flex-col items-center rounded-lg border hover:shadow-lg">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/08.webp" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Cyber-Risk</h3>
                            </div>
                            <div className="pro_IconBox flex flex-col items-center rounded-lg border hover:shadow-lg">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/Terrorism.png" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Miscellaneous</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-16 pb-16 w-full h-auto bg-[#e9eceb] flex justify-between items-center px-16">
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <h3 className="text-3xl font-semibold text-[#F36D35]">
                            400K+
                        </h3>
                        <p className="text-[#696E77]">Customers Served</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <h3 className="text-3xl font-semibold text-[#F36D35]">
                            AA
                        </h3>
                        <p className="text-[#696E77]">PACRA Rating</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <h3 className="text-3xl font-semibold text-[#F36D35]">
                            300+
                        </h3>
                        <p className="text-[#696E77]">Employees Nationwide</p>
                    </div>
                </div>
                <div className="container-fluid pb-16">
                    <div className="appSec flex justify-between items-center mt-6 ml-4 mr-4">
                        <div className="flex flex-col items-start justify-start w-1/4 pr-4">
                            <h2 className="text-[#F36D35]">
                                Why TPL Insurance Mobile App?
                            </h2>
                            <p>
                                Earn reward points by paying premium timely and redeem them on TPL Insurance Market Place with exciting discounts.
                            </p>
                        </div>
                        <div className="flex w-2/4 px-4">
                            <img className="w-full h-auto" decoding="async" src="https://tplinsurance.com/storage/2023/07/MOBILE-GIF.gif" alt="Auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start w-1/4 pl-4">
                            <h2 className="text-[#F36D35]">
                                Want to Earn?
                            </h2>
                            <p>
                                Invite friends and family through TPL Insurance Mobile App and earn reward point to get amazing discounts on renewals!
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-4 pt-4">
                        <a rel="nofollow noopener" href="https://play.google.com/store/apps/details?id=com.tpl.insuranceapp&hl=en&gl=US" target="_blank">
                            <img className="max-w-[200px]" decoding="async" src="https://tplinsurance.com/storage/2023/07/playstore-updated.webp" alt="auto" />
                        </a>
                        <a rel="nofollow noopener" href="https://apps.apple.com/pk/app/tpl-insurance/id1375881463" target="_blank">
                            <img className="max-w-[200px]" decoding="async" src="https://tplinsurance.com/storage/2023/07/appstore-updated.webp" alt="auto" />
                        </a>
                        <a rel="nofollow noopener" href="https://appgallery.huawei.com/app/C104476707" target="_blank">
                            <img className="max-w-[200px]" decoding="async" src="https://tplinsurance.com/storage/2023/07/appgallery-updated.webp" alt="auto" />
                        </a>
                    </div>
                    <div className="container-fluid pt-16 pb-16 mb-16 postSec w-full h-auto bg-[#e9eceb]">
                        <h2 className="text-center postH2 text-[#15233C] tracking-wide pb-3">Recent News & Update</h2>
                        <div className="flex justify-center">
                            <div className="p-3 bg-white m-2.5 text-left shadow-md rounded min-h-[250px] max-h-[350px] flex flex-col hover:border hover:border-[#f57920]">
                                <h2 className="font-md text-xl pb-2.5">PawSurance: The Ultimate Protection for your Fur Babies</h2>
                                <p>As pet parents, we understand that our fur babies are more than just animals—they are family. We go above and beyond to ensure their happiness and well-being, from feeding them the best food to giving them the love and attention they deserve. But what happens when your beloved pet faces unexpected accidents or illnesses? Veterinary… </p>

                            </div>
                            <div className="p-3 bg-white m-2.5 text-left shadow-md rounded min-h-[250px] max-h-[350px] flex flex-col hover:border hover:border-[#f57920]">
                                <h2 className="font-md text-xl pb-2.5">TPL Insurance Limited and Regal Automobiles Forge Strategic Partnership for Innovative Solutions in Auto Sector</h2>
                                <p>Signatories: Sohail Usman – Chairman, Regal Automobiles and Muhammad Aminuddin – CEO, TPL Insurance signed the agreement. Senior members from respective organizations were also present at the occasion. Standing From left to right: Shahrukh Zaib – Manager Finance, Regal Automobiles, Miftah-Ul-Huda – CFO, Regal Automobiles, Adeel Usman – Managing Director, Regal Automobiles, Talha H. Dawood… </p>

                            </div>
                            <div className="p-3 bg-white m-2.5 text-left shadow-md rounded min-h-[250px] max-h-[350px] flex flex-col hover:border hover:border-[#f57920]">
                                <h2 className="font-md text-xl pb-2.5">The Area Yield Index Insurance (AYII) Payout Ceremony</h2>
                                <p>The Area Yield Index Insurance (AYII) Payout Ceremony, a momentous event celebrating the approval and disbursement of successful crop claims, took center stage in Lahore on 8th December 2023. The event was hosted by TPL Insurance, where crop claim payouts of total PKR 17.5 Mn were made to The Bank of Punjab farmers of Pakpattan… </p>

                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default MainSection;