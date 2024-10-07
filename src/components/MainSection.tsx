import { useTypewriter, Cursor } from "react-simple-typewriter";
import CountUp from 'react-countup';
import Footer from "./Footer";
const MainSection = () => {
    const [text] = useTypewriter({
        words: ['MARINE', 'MOBILE', 'AUTO'],
        loop: true,
        typeSpeed: 300,
        deleteSpeed: 120,
        delaySpeed: 90
    })
    return (
        <div className="container-fluid h-screen herocontainer">
            <button className="sticky-button"><i className="bi bi-pencil-square pr-2"></i>Get a Quote</button>
            <button className="sticky-whatsapp !rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
            </button>
            <div className="h-100">
                <div className="flex flex-col items-center justify-center h-screen text-center p-4">
                    <div className="w-full">
                        <h3 className="text-3xl">EVERYTHING COMES WITH A RISK,</h3>
                        <h3 className="text-3xl pt-1 font-semibold">THAT'S WHY WE ARE HERE TO</h3>
                        <h2 className="text-4xl pt-4 herofont">
                            INSURE YOUR <span className="block sm:inline text-[#f57920] heroAnimateText">{text}<Cursor cursorStyle='|' /></span>
                        </h2>
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
                            <h3 className="">Digital Products</h3>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-4 mt-1 w-full">
                            <div className="pro_IconBox flex flex-col items-center rounded-lg border hover:border hover:shadow-lg w-full sm:w-auto">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/01.webp" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Auto</h3>
                            </div>
                            <div className="pro_IconBox flex flex-col items-center text-center bg-white rounded-lg border hover:shadow-lg w-full sm:w-auto">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/02.webp" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Travel</h3>
                            </div>
                            <div className="pro_IconBox flex flex-col items-center rounded-lg border hover:shadow-lg w-full sm:w-auto">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/03.webp" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Home</h3>
                            </div>
                            {/* <div className="flex flex-col items-center hover:shadow-lg">

                            </div> */}
                        </div>
                        <div className="text-lg mb-1 text-[#a5a1a1]" style={{ marginTop: "2rem" }}>Other Products</div>
                        <div className="flex flex-wrap justify-start items-center gap-4 mt-1">
                            <div className="pro_IconBox flex flex-col items-center rounded-lg border hover:shadow-lg w-full sm:w-auto">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/04.webp" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Health</h3>
                            </div>
                            <div className="pro_IconBox flex flex-col items-center text-center bg-white rounded-lg border hover:shadow-lg w-full sm:w-auto">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/05.webp" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Property</h3>
                            </div>
                            <div className="pro_IconBox flex flex-col items-center rounded-lg border hover:shadow-lg w-full sm:w-auto">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/Bikeicon.png" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Bike</h3>
                            </div>
                            <div className="pro_IconBox flex flex-col items-center rounded-lg border hover:shadow-lg w-full sm:w-auto">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/09.webp" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Mobile</h3>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-start items-center gap-4 mt-1">
                            <div className="pro_IconBox flex flex-col items-center rounded-lg border hover:shadow-lg w-full sm:w-auto">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/06.webp" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Marine</h3>
                            </div>
                            <div className="pro_IconBox flex flex-col items-center text-center bg-white rounded-lg border hover:shadow-lg w-full sm:w-auto">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/07.webp" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Engineering</h3>
                            </div>
                            <div className="pro_IconBox flex flex-col items-center rounded-lg border hover:shadow-lg w-full sm:w-auto">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/08.webp" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Cyber-Risk</h3>
                            </div>
                            <div className="pro_IconBox flex flex-col items-center rounded-lg border hover:shadow-lg w-full sm:w-auto">
                                <span className="probox-icon">
                                    <img decoding="async" src="https://tplinsurance.com/storage/2023/07/Terrorism.png" alt="icon" width={42} height={42} />
                                </span>
                                <h3 className="probox-heading mt-3">Miscellaneous</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-16 pb-16 w-full h-auto bg-[#e9eceb] flex flex-col sm:flex-row flex-wrap justify-between items-center px-16">
                    <div className="flex-1 flex flex-col items-center justify-center w-full sm:w-1/3 mb-4 sm:mb-0">
                        <h3 className="text-3xl font-semibold text-[#F36D35]">
                            <CountUp start={0} end={400} duration={3} separator="," />K
                        </h3>
                        <p className="text-[#696E77]">Customers Served</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center w-full sm:w-1/3 mb-4 sm:mb-0">
                        <h3 className="text-3xl font-semibold text-[#F36D35]">
                            AA
                        </h3>
                        <p className="text-[#696E77]">PACRA Rating</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center w-full sm:w-1/3 mb-4 sm:mb-0">
                        <h3 className="text-3xl font-semibold text-[#F36D35]">
                            <CountUp start={0} end={300} duration={3} />+
                        </h3>
                        <p className="text-[#696E77]">Employees Nationwide</p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="appSec flex flex-col md:flex-row justify-between items-center mt-6">
                        <div className="flex flex-col items-start justify-start w-full md:w-1/4 pl-4 mb-4 md:mb-0">
                            <h2 className="text-[#F36D35]">
                                Why TPL Insurance Mobile App?
                            </h2>
                            <p>
                                Earn reward points by paying premium timely and redeem them on TPL Insurance Market Place with exciting discounts.
                            </p>
                        </div>
                        <div className="flex w-full md:w-2/4 px-4 mb-4 md:mb-0">
                            <img className="w-full h-64 md:h-auto object-cover" decoding="async" src="https://tplinsurance.com/storage/2023/07/MOBILE-GIF.gif" alt="Auto" />
                        </div>
                        <div className="flex flex-col items-start justify-start w-full md:w-1/4 pl-4 mb-4 md:mb-0">
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
                            <img className="w-full max-w-[200px] sm:max-w-[160px] md:max-w-[140px]" decoding="async" src="https://tplinsurance.com/storage/2023/07/playstore-updated.webp" alt="auto" />
                        </a>
                        <a rel="nofollow noopener" href="https://apps.apple.com/pk/app/tpl-insurance/id1375881463" target="_blank">
                            <img className="w-full max-w-[200px] sm:max-w-[160px] md:max-w-[140px]" decoding="async" src="https://tplinsurance.com/storage/2023/07/appstore-updated.webp" alt="auto" />
                        </a>
                        <a rel="nofollow noopener" href="https://appgallery.huawei.com/app/C104476707" target="_blank">
                            <img className="w-full max-w-[200px] sm:max-w-[160px] md:max-w-[140px]" decoding="async" src="https://tplinsurance.com/storage/2023/07/appgallery-updated.webp" alt="auto" />
                        </a>
                    </div>
                    <div className="container-fluid pt-16 pb-16 mb-16 postSec w-full h-auto bg-[#e9eceb]">
                        <h2 className="text-center postH2 text-[#15233C] tracking-wide pb-3">Recent News & Update</h2>
                        <div className="flex flex-wrap justify-center">
                            <div className="p-3 bg-white m-2.5 text-left shadow-md rounded min-h-[250px] max-h-[350px] flex flex-col hover:border hover:border-[#f57920] w-full md:w-1/3 overflow-hidden">
                                <h2 className="font-md text-xl pb-2.5">PawSurance: The Ultimate Protection for your Fur Babies</h2>
                                <p>As pet parents, we understand that our fur babies are more than just animals—they are family. We go above and beyond to ensure their happiness and well-being, from feeding them the best food to giving them the love and attention they deserve. But what happens when your beloved pet faces unexpected accidents or illnesses? Veterinary… </p>

                            </div>
                            <div className="p-3 bg-white m-2.5 text-left shadow-md rounded min-h-[250px] max-h-[350px] flex flex-col hover:border hover:border-[#f57920] w-full md:w-1/3 overflow-hidden">
                                <h2 className="font-md text-xl pb-2.5">TPL Insurance Limited and Regal Automobiles Forge Strategic Partnership for Innovative Solutions in Auto Sector</h2>
                                <p>Signatories: Sohail Usman – Chairman, Regal Automobiles and Muhammad Aminuddin – CEO, TPL Insurance signed the agreement. Senior members from respective organizations were also present at the occasion. Standing From left to right: Shahrukh Zaib – Manager Finance, Regal Automobiles, Miftah-Ul-Huda – CFO, Regal Automobiles, Adeel Usman – Managing Director, Regal Automobiles, Talha H. Dawood… </p>

                            </div>
                            <div className="p-3 bg-white m-2.5 text-left shadow-md rounded min-h-[250px] max-h-[350px] flex flex-col hover:border hover:border-[#f57920] w-full md:w-1/3 overflow-hidden">
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