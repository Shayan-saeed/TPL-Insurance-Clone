import React, { useState } from 'react';

interface NavbarProps {
    isOpen: boolean,
    toggleMenu: () => void,
}

const NavbarComponent: React.FC<NavbarProps> = ({ isOpen, toggleMenu }) => {

    const [showSearch, setShowSearch] = useState(false);



    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    return (
        <nav className="navbar fixed-top py-3 bg-white">
            <div className="container-fluid nav-container p-2 lg:p-3">
                <a className="navbar-brand outline-none" href="https://tplinsurance.com">
                    <img src="https://tplinsurance.com/storage/2023/07/TPL-insurance-logo-updatenew.webp" alt="TPL Insurance Logo" />
                </a>
                <button className="navbar-toggler border-none" onClick={toggleMenu} aria-expanded={isOpen} aria-label="Toggle navigation">
                    <div className={`menu-icon ${isOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                <div className={`navbar-collapse ${isOpen ? 'block' : 'hidden'}`} id="navbarResponsive">
                    <ul className="navbar-nav ms-auto text-sm md:text-base md:space-x-6">
                        <li className="nav-item dropdown">
                            <a className="nav-link text-[#696E77] hover:text-[#f57920]" href="https://tplinsurance.com/about-us/">
                                About Us
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-[#696E77] hover:text-[#f57920]" href="#Products">
                                Products
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-[#696E77] hover:text-[#f57920]" href="https://tplinsurance.com/products/takaful/">Takaful</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-[#696E77] hover:text-[#f57920]" href="https://tplinsurance.com/financial-statements/">
                                Investors
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-[#696E77] hover:text-[#f57920]" href="https://tplinsurance.com/products/takaful/">Media</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-[#696E77] hover:text-[#f57920]" href="https://tplinsurance.com/contact-us/">Contact</a>
                        </li>
                        <li className="nav-item relative">
                            <button className="btn text-[#f57920] hidden searchButton" onClick={toggleSearch}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21L15.803 15.803A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                            {showSearch && (
                                <div className="absolute top-full right-0 w-full min-w-[200px] bg-white p-3 border border-gray-200 rounded-lg dropSearch hidden">
                                    <form className="d-flex" role="search" action="https://tplinsurance.com/">
                                        <div className="input-group flex text-[#696E77] rounded-lg p-1">
                                            <input className="form-control text-sm placeholder:text-[#696E77]" type="text" placeholder="Search here..." />
                                            <button className="btn text-[#f57920]" type="submit">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21L15.803 15.803A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </li>
                        <li className="nav-item hidden navForm">
                            <form className="d-flex" role="search" action="https://tplinsurance.com/">
                                <div className="input-group flex text-[#696E77] rounded-lg p-1">
                                    <input className="form-control text-sm placeholder:text-[#696E77]" type="text" placeholder="Search here..." />
                                    <button className="btn text-[#f57920]" type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21L15.803 15.803A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </li>
                        <li style={{ maxHeight: "44px" }} className="nav-item flex items-center navButton cursor-pointer text-center bg-[#f57920] hover:bg-white hover:border hover:border-[#f57920] hover:!text-[#f57920] mt-2.5 p-2.5 lg:mt-0 lg:p-0">
                            <a href="https://tplinsurance.com/my-tpli/">My TPLI</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
