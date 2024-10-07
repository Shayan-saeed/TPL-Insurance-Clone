import React, {useState} from 'react';

const Navbar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-3">
                <div className="container-fluid nav-container p-2 md:p-3">
                    <a href="https://tplinsurance.com" className="navbar-brand  max-w-[150px] md:max-w-[200px] ml-4 md:ml-10">
                        <img src="https://tplinsurance.com/storage/2023/07/TPL-insurance-logo-updatenew.webp" alt="TPL Insurance Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse mr-10" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto text-sm md:text-base">
                            <li className="nav-item dropdown">
                                <a className="nav-link text-[#696E77]  hover:text-[#f57920]" href="https://tplinsurance.com/about-us/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                </a>
                                <ul className="dropdown-menu border-[#f57920]" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/about-us/">Who We Are</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/about-us/board-of-directors/">Board of Directors</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/committees/">Committees</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-[#696E77]  hover:text-[#f57920]" href="#services" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu border-[#f57920]" aria-labelledby="servicesDropdown">
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Auto</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Bike</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Travel</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Home</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Health</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Pawsurance</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Mobile</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Property</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Marine</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Cyber-Risk</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Engineering</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Miscellaneous</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-[#696E77] hover:text-[#f57920]" href="https://tplinsurance.com/products/takaful/">Takaful</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-[#696E77] hover:text-[#f57920]" href="https://tplinsurance.com/financial-statements/" id='investorsDropdown' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Investors
                                </a>
                                <ul className="dropdown-menu border-[#f57920]" aria-labelledby="investorsDropdown">
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Financial Statements</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Financial Analysis</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Investor Relations</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">CSR Activities</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Election of Directors</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Notices</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Complaints Resolution Forums</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Unclaimed-insurance-benefits-II</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-[#696E77] hover:text-[#f57920]" href="#" id='menuDropdown' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Media
                                </a>
                                <ul className="dropdown-menu border-[#f57920]" aria-labelledby="menuDropdown">
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Press Releases</a></li>
                                    <li><a className="dropdown-item text-[#696E77] hover:text-[#f57920] hover:bg-white" href="https://tplinsurance.com/products/auto-insurance/">Blogs</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-[#696E77] hover:text-[#f57920]" href="https://tplinsurance.com/contact-us/">Contact</a>
                            </li>
                            <li className="nav-item text-[#696E77] !border-[#f57920] border rounded-lg p-1">
                                <form className="d-flex" role="search" action="https://tplinsurance.com/">
                                    <div className="input-group">
                                        <input className="form-control border-none outline-none rounded text-sm placeholder:text-[#696E77]" type="text" placeholder="Search here..." name="s" />
                                        <button className="btn text-[#f57920]" type="submit">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21L15.803 15.803A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </li>
                            <li className="nav-item flex items-center navButton text-center bg-[#f57920] hover:bg-white hover:border hover:border-[#f57920] hover:!text-[#f57920]">
                                <a href="https://tplinsurance.com/my-tpli/">My TPLI</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
