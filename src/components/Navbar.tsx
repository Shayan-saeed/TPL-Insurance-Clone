import React, { useState } from 'react';

const NavbarComponent: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar fixed-top py-3 bg-white">
            <div className="container-fluid nav-container p-2 lg:p-3">
                <a className="navbar-brand" href="https://tplinsurance.com">
                    <img src="https://tplinsurance.com/storage/2023/07/TPL-insurance-logo-updatenew.webp" alt="TPL Insurance Logo" />
                </a>
                <button className="navbar-toggler lg:hidden" onClick={toggleMenu} aria-expanded={isOpen} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`navbar-collapse ${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`} id="navbarResponsive">
                    <ul className="navbar-nav ms-auto text-sm md:text-base lg:flex lg:!flex-row  md:space-x-6">
                        <li className="nav-item">
                            <a className="nav-link text-[#696E77] hover:text-[#f57920]" href="https://tplinsurance.com/about-us/">
                                About Us
                            </a>
                            {/* <ul className="dropdown-menu">
                                <li><a href="https://tplinsurance.com/about-us/">Who We Are</a></li>
                                <li><a href="https://tplinsurance.com/about-us/board-of-directors/">Board of Directors</a></li>
                                <li><a href="https://tplinsurance.com/committees/">Committees</a></li>
                            </ul> */}
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-[#696E77] hover:text-[#f57920]" href="#Products">
                                Products
                            </a>
                            {/* <ul className="dropdown-menu">
                                <li><a href="https://tplinsurance.com/products/auto-insurance/">Auto</a></li>
                                <li><a href="https://tplinsurance.com/products/auto-insurance/">Bike</a></li>
                                <li><a href="https://tplinsurance.com/products/auto-insurance/">Travel</a></li>
                                <li><a href="https://tplinsurance.com/products/auto-insurance/">Home</a></li>
                                <li><a href="https://tplinsurance.com/products/auto-insurance/">Health</a></li>
                                <li><a href="https://tplinsurance.com/products/auto-insurance/">Pawsurance</a></li>
                                <li><a href="https://tplinsurance.com/products/auto-insurance/">Mobile</a></li>
                                <li><a href="https://tplinsurance.com/products/auto-insurance/">Property</a></li>
                                <li><a href="https://tplinsurance.com/products/auto-insurance/">Marine</a></li>
                                <li><a href="https://tplinsurance.com/products/auto-insurance/">Cyber-Risk</a></li>
                                <li><a href="https://tplinsurance.com/products/auto-insurance/">Engineering</a></li>
                                <li><a href="https://tplinsurance.com/products/auto-insurance/">Miscellaneous</a></li>
                            </ul> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-[#696E77] hover:text-[#f57920]" href="https://tplinsurance.com/products/takaful/">Takaful</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-[#696E77] hover:text-[#f57920]" href="https://tplinsurance.com/financial-statements/">
                                Investors
                            </a>
                            {/* <ul className="dropdown-menu">
                                <li><a href="https://tplinsurance.com/products/auto-insurance/">Financial Statements</a></li>
                                <li><a href="https://tplinsurance.com/products/auto-insurance/">Financial Analysis</a></li>
                                <li><a href="https://tplinsurance.com/products/auto-insurance/">Investor Relations</a></li>
                            </ul> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-[#696E77] hover:text-[#f57920]" href="https://tplinsurance.com/products/takaful/">Media</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-[#696E77] hover:text-[#f57920]" href="https://tplinsurance.com/contact-us/">Contact</a>
                        </li>
                        <li className="nav-item">
                            <form className="d-flex" role="search" action="https://tplinsurance.com/">
                                <div className="input-group text-[#696E77] rounded-lg p-1">
                                    <input className="form-control text-sm placeholder:text-[#696E77]" type="text" placeholder="Search here..." />
                                    <button className="btn text-[#f57920]" type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21L15.803 15.803A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </li>
                        <li className="nav-item flex items-center navButton text-center bg-[#f57920] hover:bg-white hover:border hover:border-[#f57920] hover:!text-[#f57920] mt-2.5 p-2.5 lg:mt-0 lg:p-0">
                            <a href="https://tplinsurance.com/my-tpli/">My TPLI</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
