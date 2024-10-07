import React from 'react';

const Navbar: React.FC = () => {
    return (
        // <nav className="bg-white fixed top-0 left-0 w-full z-50 py-3">
        //     <div className="w-full flex justify-between items-center pt-4">
        //         <div className='ml-24'>
        //             <a href="https://tplinsurance.com" className=''>
        //                 <img src="https://tplinsurance.com/storage/2023/07/TPL-insurance-logo-updatenew.webp" className='max-w-[200px]' />
        //             </a>
        //         </div>
        //         <div className='navbar-links mr-14'>
        //             <ul className="flex space-x-4">
        //                 <li className='pr-6 pt-2'><a href='#' className=" hover:text-[#f57920] text-[#696E77]">About us</a></li>
        //                 <li className='pr-4 pt-2'><a href='#' className="hover:text-[#f57920] text-[#696E77]">Products</a></li>
        //                 <li className='pr-4 pt-2'><a href='#' className="hover:text-[#f57920] text-[#696E77]">Takaful</a></li>
        //                 <li className='pr-4 pt-2'><a href='#' className="hover:text-[#f57920] text-[#696E77]">Investors</a></li>
        //                 <li className='pr-4 pt-2'><a href='#' className="hover:text-[#f57920] text-[#696E77]">Media</a></li>
        //                 <li className='pr-4 pt-2'><a href='#' className="hover:text-[#f57920] text-[#696E77]">Contact</a></li>
        //                 <li className=' text-[#696E77] border-[#f57920] border rounded-lg p-2'>
        //                     <form>
        //                         <div className='flex justify-between items-center border-1'>
        //                             <input type="text" placeholder='Search here...' className='rounded outline-none text-base placeholder:text-[#696E77]' />
        //                             <button className='bg-white text-[#f57920]' type='submit'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        //                                 <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        //                             </svg>
        //                             </button>
        //                         </div>
        //                     </form>
        //                 </li>
        //                 <li className='bg-[#f57920] text-white text-sm w-[100px] text-center pt-3 rounded'><a href='#' className="">My TPLI</a></li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-3 px-10">
                <div className="container-fluid nav-container p-3">
                    <a href="https://tplinsurance.com" className="navbar-brand max-w-[200px] ml-10">
                        <img src="https://tplinsurance.com/storage/2023/07/TPL-insurance-logo-updatenew.webp" alt="TPL Insurance Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse mr-10" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown pr-2">
                                <a className="nav-link  hover:text-[#f57920]" href="https://tplinsurance.com/about-us/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                </a>
                                <ul className="dropdown-menu border-[#f57920]" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/about-us/">Who We Are</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/about-us/board-of-directors/">Board of Directors</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/committees/">Committees</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown pr-2">
                                <a className="nav-link  hover:text-[#f57920]" href="#services" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu border-[#f57920]" aria-labelledby="servicesDropdown">
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Auto</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Bike</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Travel</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Home</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Health</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Pawsurance</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Mobile</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Property</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Marine</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Cyber-Risk</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Engineering</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Miscellaneous</a></li>
                                </ul>
                            </li>
                            <li className="nav-item pr-2">
                                <a className="nav-link hover:text-[#f57920]" href="https://tplinsurance.com/products/takaful/">Takaful</a>
                            </li>
                            <li className="nav-item dropdown pr-2">
                                <a className="nav-link hover:text-[#f57920]" href="https://tplinsurance.com/financial-statements/" id='investorsDropdown' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Investors
                                </a>
                                <ul className="dropdown-menu border-[#f57920]" aria-labelledby="investorsDropdown">
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Financial Statements</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Financial Analysis</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Investor Relations</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">CSR Activities</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Election of Directors</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Notices</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Complaints Resolution Forums</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Unclaimed-insurance-benefits-II</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown pr-2">
                                <a className="nav-link hover:text-[#f57920]" href="#" id='menuDropdown' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Media
                                </a>
                                <ul className="dropdown-menu border-[#f57920]" aria-labelledby="menuDropdown">
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Press Releases</a></li>
                                    <li><a className="dropdown-item hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Blogs</a></li>
                                </ul>
                            </li>
                            <li className="nav-item pr-2">
                                <a className="nav-link hover:text-[#f57920]" href="https://tplinsurance.com/contact-us/">Contact</a>
                            </li>
                            <li className="nav-item text-[#696E77] !border-[#f57920] border rounded-lg p-1.5">
                                <form className="d-flex" role="search" action="https://tplinsurance.com/">
                                    <div className="input-group flex justify-between items-center">
                                        <input className="border-none outline-none rounded text-base placeholder:text-[#696E77]" type="text" placeholder="Search here..." name="s" />
                                        <button className="btn text-[#f57920]" type="submit">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21L15.803 15.803A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </li>
                            <li className="nav-item ml-4 bg-[#f57920] py-1 px-2 rounded hover:bg-white hover:border hover:border-[#f57920] hover:!text-[#f57920]">
                                <a className="nav-link text-white hover:!text-[#f57920]" href="https://tplinsurance.com/my-tpli/">My TPLI</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
