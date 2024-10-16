import { useTypewriter, Cursor } from "react-simple-typewriter";
import CountUp from 'react-countup';
import Footer from "./Footer";
import Animation from "./Animation";
import { useEffect } from "react";

const MainSection = () => {
    const [text] = useTypewriter({
        words: ['MARINE', 'MOBILE', 'AUTO', 'HOME', 'TRAVEL', 'PROPERTY', 'HEALTH'],
        loop: true,
        typeSpeed: 300,
        deleteSpeed: 120,
        delaySpeed: 90
    })

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="container-fluid h-screen board" style={{ position: "relative" }}>
            <button className="sticky-button">
                <span>
                    <img draggable="false" className="emoji" src="https://s.w.org/images/core/emoji/15.0.3/svg/1f4dd.svg" alt="📝" />
                </span>
                Get a Quote</button>
            <button className="sticky-whatsapp !rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
            </button>

            <div className="h-100" style={{ position: "relative" }}>
                <div className="herocontainer">
                    <Animation />
                    <div className="heroInner">
                        <div>
                            <div className="w-full headerContent text-center">
                                <h3 className="heroHeader">EVERYTHING COMES WITH A RISK,</h3>
                                <h3 className="heroHeader"><strong>THAT'S WHY WE ARE HERE TO</strong></h3>
                                <h2 className="herofont">
                                    INSURE YOUR <span className="block sm:inline text-[#f57920] heroAnimateText">{text}<Cursor cursorStyle='|' /></span>
                                </h2>
                                <a className="btn btn-primary btn_getinsu" href="https://tplinsurance.com/#about">Get Insured</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="containter-fluid secContainer w-full h-auto !pt-28">
                    <h4 className="text-center text-[#15233C] secContainerHeader">Pakistan's Leading Insurtech</h4>
                    <p className="text-center text-lg text-[#28303d] secContainerPara">
                        We protect your assets by capitalizing on cutting-edge technology, backed by
                        24×7 customer services, catering to your needs anytime, anywhere.
                    </p>
                    <div className="container flex flex-col items-center mt-14 secContainerInner">
                        <div className="secContainerBoxes">
                            <div className="text-lg mb-1 text-[#a5a1a1]">
                                <h3 className="">Digital Products</h3>
                            </div>
                            <div className="flex flex-wrap items-center gap-1 md:!gap-6 mt-1 w-full">
                                <div className="pro_IconBox flex flex-col items-center justify-center cursor-pointer rounded-lg border text-[#28303d] hover:border hover:shadow-lg hover:!border-[#ec6d21] hover:!text-[#ec6d21] w-full md:w-[200px]">
                                    <span className="probox-icon">
                                        <img decoding="async" src="https://tplinsurance.com/storage/2023/07/01.webp" alt="icon" width={42} height={42} />
                                    </span>
                                    <h3 className="probox-heading">Auto</h3>
                                </div>
                                <div className="pro_IconBox flex flex-col items-center justify-center cursor-pointer text-center bg-white rounded-lg border text-[#28303d]  hover:shadow-lg hover:!border-[#ec6d21] hover:!text-[#ec6d21] w-full md:w-[200px]">
                                    <span className="probox-icon">
                                        <img decoding="async" src="https://tplinsurance.com/storage/2023/07/02.webp" alt="icon" width={42} height={42} />
                                    </span>
                                    <h3 className="probox-heading">Travel</h3>
                                </div>
                                <div className="pro_IconBox flex flex-col items-center justify-center cursor-pointer rounded-lg border text-[#28303d]  hover:shadow-lg hover:!border-[#ec6d21] hover:!text-[#ec6d21] w-full md:w-[200px]">
                                    <span className="probox-icon">
                                        <img decoding="async" src="https://tplinsurance.com/storage/2023/07/03.webp" alt="icon" width={42} height={42} />
                                    </span>
                                    <h3 className="probox-heading">Home</h3>
                                </div>
                            </div>
                            <div className="text-lg mb-1 text-[#a5a1a1]" style={{ marginTop: "2rem" }}>Other Products</div>
                            <div className="flex flex-wrap justify-start items-center gap-1 md:!gap-6 mt-1">
                                <div className="pro_IconBox flex flex-col items-center justify-center cursor-pointer rounded-lg border text-[#28303d]  hover:shadow-lg hover:!border-[#ec6d21] hover:!text-[#ec6d21] w-full md:w-[200px]">
                                    <span className="probox-icon">
                                        <img decoding="async" src="https://tplinsurance.com/storage/2023/07/04.webp" alt="icon" width={42} height={42} />
                                    </span>
                                    <h3 className="probox-heading">Health</h3>
                                </div>
                                <div className="pro_IconBox flex flex-col items-center justify-center cursor-pointer text-center bg-white rounded-lg border text-[#28303d]  hover:shadow-lg hover:!border-[#ec6d21] hover:!text-[#ec6d21] w-full md:w-[200px]">
                                    <span className="probox-icon">
                                        <img decoding="async" src="https://tplinsurance.com/storage/2023/07/05.webp" alt="icon" width={42} height={42} />
                                    </span>
                                    <h3 className="probox-heading">Property</h3>
                                </div>
                                <div className="pro_IconBox flex flex-col items-center justify-center cursor-pointer rounded-lg border text-[#28303d]  hover:shadow-lg hover:!border-[#ec6d21] hover:!text-[#ec6d21] w-full md:w-[200px]">
                                    <span className="probox-icon">
                                        <img decoding="async" src="https://tplinsurance.com/storage/2023/07/Bikeicon.png" alt="icon" width={42} height={42} />
                                    </span>
                                    <h3 className="probox-heading">Bike</h3>
                                </div>
                                <div className="pro_IconBox flex flex-col items-center justify-center cursor-pointer rounded-lg border text-[#28303d]  hover:shadow-lg hover:!border-[#ec6d21] hover:!text-[#ec6d21] w-full md:w-[200px]">
                                    <span className="probox-icon">
                                        <img decoding="async" src="https://tplinsurance.com/storage/2023/07/09.webp" alt="icon" width={42} height={42} />
                                    </span>
                                    <h3 className="probox-heading">Mobile</h3>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-start items-center gap-1 md:!gap-6 mt-3">
                                <div className="pro_IconBox flex flex-col items-center justify-center cursor-pointer rounded-lg border text-[#28303d]  hover:shadow-lg hover:!border-[#ec6d21] hover:!text-[#ec6d21] w-full md:w-[200px]">
                                    <span className="probox-icon">
                                        <img decoding="async" src="https://tplinsurance.com/storage/2023/07/06.webp" alt="icon" width={42} height={42} />
                                    </span>
                                    <h3 className="probox-heading">Marine</h3>
                                </div>
                                <div className="pro_IconBox flex flex-col items-center justify-center cursor-pointer text-center bg-white rounded-lg border text-[#28303d]  hover:shadow-lg hover:!border-[#ec6d21] hover:!text-[#ec6d21] w-full md:w-[200px]">
                                    <span className="probox-icon">
                                        <img decoding="async" src="https://tplinsurance.com/storage/2023/07/07.webp" alt="icon" width={42} height={42} />
                                    </span>
                                    <h3 className="probox-heading">Engineering</h3>
                                </div>
                                <div className="pro_IconBox flex flex-col items-center justify-center cursor-pointer rounded-lg border text-[#28303d]  hover:shadow-lg hover:!border-[#ec6d21] hover:!text-[#ec6d21] w-full md:w-[200px]">
                                    <span className="probox-icon">
                                        <img decoding="async" src="https://tplinsurance.com/storage/2023/07/08.webp" alt="icon" width={42} height={42} />
                                    </span>
                                    <h3 className="probox-heading">Cyber-Risk</h3>
                                </div>
                                <div className="pro_IconBox flex flex-col items-center justify-center cursor-pointer rounded-lg border text-[#28303d]  hover:shadow-lg hover:!border-[#ec6d21] hover:!text-[#ec6d21] w-full md:w-[200px]">
                                    <span className="probox-icon">
                                        <img decoding="async" src="https://tplinsurance.com/storage/2023/07/Terrorism.png" alt="icon" width={42} height={42} />
                                    </span>
                                    <h3 className="probox-heading">Miscellaneous</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid boxContainer w-full h-auto bg-[#e9eceb] flex flex-col md:flex-row flex-wrap items-center justify-between">
                    <div className="flex-1 flex flex-col items-center  w-full md:w-1/3 thirdContainerBoxes">
                        <h3 className="box-heading text-[#f5791f]">
                            <CountUp start={0} end={400} duration={10} separator="," />K+
                        </h3>
                        <p className="box-para text-[#28303d]">Customers Served</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center w-full md:w-1/3 thirdContainerBoxes">
                        <h3 className="box-heading text-[#f5791f]">
                            AA
                        </h3>
                        <p className="box-para text-[#28303d]">PACRA Rating</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center w-full md:w-1/3 thirdContainerBoxes">
                        <h3 className="box-heading text-[#f5791f]">
                            <CountUp start={0} end={300} duration={10} />+
                        </h3>
                        <p className="box-para text-[#28303d]">Employees Nationwide</p>
                    </div>
                </div>
                <div className="container-fluid appSec">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <div className="flex flex-col items-start justify-start w-full lg:w-1/4 pl-0 md:pl-4 mb-4 lg:mb-0">
                            <h2 className="headingApp text-[#F36D35]">
                                Why TPL Insurance Mobile App?
                            </h2>
                            <p className="small">
                                Earn reward points by paying premium timely and redeem them on TPL Insurance Market Place with exciting discounts.
                            </p>
                        </div>
                        <div className="flex w-full lg:w-2/4 px-4 mb-4 lg:mb-0">
                            <img className="w-full md:h-auto" decoding="async" src="https://tplinsurance.com/storage/2023/07/MOBILE-GIF.gif" alt="Auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start w-full lg:w-1/4 pl-0 md:pl-4 lg:mb-0">
                            <h2 className="headingApp text-[#F36D35]">
                                Want to Earn?
                            </h2>
                            <p className="small">
                                Invite friends and family through TPL Insurance Mobile App and earn reward point to get amazing discounts on renewals!
                            </p>
                        </div>
                    </div>
                    <div className="flex appCTA items-center justify-center">
                        <a className="appbtns" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.tpl.insuranceapp&hl=en&gl=US" target="_blank">
                            <img className="hover:rounded-3xl hover:shadow-2xl" decoding="async" src="https://tplinsurance.com/storage/2023/07/playstore-updated.webp" alt="auto" />
                        </a>
                        <a className="appbtns" rel="noreferrer" href="https://apps.apple.com/pk/app/tpl-insurance/id1375881463" target="_blank">
                            <img className="hover:rounded-3xl hover:shadow-2xl" decoding="async" src="https://tplinsurance.com/storage/2023/07/appstore-updated.webp" alt="auto" />
                        </a>
                        <a className="appbtns" rel="noreferrer" href="https://appgallery.huawei.com/app/C104476707" target="_blank">
                            <img className="hover:rounded-3xl hover:shadow-2xl" decoding="async" src="https://tplinsurance.com/storage/2023/07/appgallery-updated.webp" alt="auto" />
                        </a>
                    </div>
                </div>
                <div className="container-fluid postSec w-full h-auto bg-[#f2f2f2]">
                    <h2 className="text-center postH2 text-[#15233C]">Recent News & Update</h2>
                    <div className="recentPosts flex flex-wrap justify-center">
                        <div className="recentPostInner md:w-full lg:w-[30%] overflow-hidden">
                            <h2 className="pb-3">PawSurance: The Ultimate Protection for your Fur Babies</h2>
                            <p>As pet parents, we understand that our fur babies are more than just animals—they are family. We go above and beyond to ensure their happiness and well-being, from feeding them the best food to giving them the love and attention they deserve. But what happens when your beloved pet faces unexpected accidents or illnesses? Veterinary…
                                <a className="more-link" href="https://tplinsurance.com/pawsurance-the-ultimate-protection-for-your-fur-babies/">Continue reading</a>
                            </p>
                            <a className="read-more" rel="noreferrer" href="https://tplinsurance.com/pawsurance-the-ultimate-protection-for-your-fur-babies/" target="_blank">Read More</a>
                        </div>
                        <div className="recentPostInner w-full lg:w-[30%] overflow-hidden">
                            <h2 className="pb-3">TPL Insurance Limited and Regal Automobiles Forge Strategic Partnership for Innovative Solutions in Auto Sector</h2>
                            <p>Signatories: Sohail Usman – Chairman, Regal Automobiles and Muhammad Aminuddin – CEO, TPL Insurance signed the agreement. Senior members from respective organizations were also present at the occasion. Standing From left to right: Shahrukh Zaib – Manager Finance, Regal Automobiles, Miftah-Ul-Huda – CFO, Regal Automobiles, Adeel Usman – Managing Director, Regal Automobiles, Talha H. Dawood…
                                <a className="more-link" href="https://tplinsurance.com/tpl-insurance-limited-and-regal-automobiles-forge-strategic-partnership-for-innovative-solutions-in-auto-sector/">Continue reading</a>
                            </p>
                            <a className="read-more" rel="noreferrer" href="https://tplinsurance.com/tpl-insurance-limited-and-regal-automobiles-forge-strategic-partnership-for-innovative-solutions-in-auto-sector/" target="_blank">Read More</a>
                        </div>
                        <div className="recentPostInner w-full lg:w-[30%] overflow-hidden">
                            <h2 className="pb-3">The Area Yield Index Insurance (AYII) Payout Ceremony</h2>
                            <p>The Area Yield Index Insurance (AYII) Payout Ceremony, a momentous event celebrating the approval and disbursement of successful crop claims, took center stage in Lahore on 8th December 2023. The event was hosted by TPL Insurance, where crop claim payouts of total PKR 17.5 Mn were made to The Bank of Punjab farmers of Pakpattan…
                                <a className="more-link" href="https://tplinsurance.com/the-area-yield-index-insurance-ayii-payout-ceremony/">Continue reading</a>
                            </p>
                            <a className="read-more" rel="noreferrer" href="https://tplinsurance.com/the-area-yield-index-insurance-ayii-payout-ceremony/" target="_blank">Read More</a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default MainSection;