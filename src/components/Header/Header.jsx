import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const handleOptionClick = (option) => {
        console.log(`Selected option: ${option}`);
        closeDropdown();
    };

    return (
        <>
            <header className="header">
                <div className="container">
                    <section className="header-top">
                        <div className="header-top__wrapper">
                            <h1 className="header-top__title hover-b-white">
                                <Link className="header-top__title--link">Storish</Link>
                            </h1>
                            <div className="header-top__search input-group">
                                <input className="header-top__search--input input" type="text" placeholder="Search products.." />
                                <span className="input-button">
                                    <img className="header-top__search--img" src="/assets/images/magnifying-glass-solid.svg" alt="magnifying-glass" />
                                </span>
                            </div>
                            <nav className="header-top__nav">
                                <ul className="header-top__links">
                                    <li>
                                        <Link className="header-top__link hover-b-white">
                                            <img className="header-top__link--img" src="/assets/images/heart-regular.svg" alt="heart" />
                                            <p className="header-top__link--text">Favourite <br /> Wishlist</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="header-top__link hover-b-white">
                                            <img className="header-top__link--img" src="/assets/images/user-regular.svg" alt="user" />
                                            <p className="header-top__link--text">Log In  <br /> My Account</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="header-top__link hover-b-white">
                                            <img className="header-top__link--img" src="/assets/images/cart-arrow-down-solid.svg" alt="cart" />
                                            <p className="header-top__link--text">
                                                <span className="header-top__link--text--zero">0</span> <br /> $0.00
                                            </p>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </section>
                    <section className="header-bottom">
                        <div className="header-bottom__wrapper">
                                <div className="dropdown" onClick={toggleDropdown}>
                                    <button className="dropdown__button hover-b-white" >
                                        Shop Categories
                                    </button>
                                    <img className="dropdown__icon" src="/assets/images/down-arrow-svgrepo-com.svg" alt="dropdown-icon" />

                                    {isOpen && (
                                        <ul className="dropdown__menu">
                                            <li className="dropdown__link" onClick={() => handleOptionClick('Option 1')}><Link>Option 1</Link></li>
                                            <li className="dropdown__link" onClick={() => handleOptionClick('Option 2')}><Link>Option 2</Link></li>
                                            <li className="dropdown__link" onClick={() => handleOptionClick('Option 3')}><Link>Option 3</Link></li>
                                        </ul>
                                    )}
                                </div>
                                <div className="header-bottom__menu">
                                    <nav className="header-bottom__nav">
                                        <ul className="header-bottom__links">
                                            <li>
                                                <NavLink to="/" className="header-bottom__link hover-b-white">Home</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/store" className="header-bottom__link hover-b-white">Store</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="header-bottom__link hover-b-white">Blogs</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="header-bottom__link hover-b-white">Contact</NavLink>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                        </div>
                    </section>
                </div>
            </header >
        </>
    );
}

export default Header;