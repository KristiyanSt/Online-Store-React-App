import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
    return (
        <header className="header">
            <div className="wrapper">
                <h1 className="header__title">
                    <Link>Storish</Link>
                </h1>
                <section className="header__searchBar">
                    <input type="text" placeholder="Search products.." />
                    <img className="searchBar__icon" src="/images/magnifying-glass-solid.svg" alt="" />
                </section>
                <nav>
                    <ul>
                        <li>
                            <Link>
                                <span>
                                    <img src="/images/heart-regular.svg" alt="" />
                                </span>
                                <span>
                                    <p>Favourite <br/> Wishlist</p>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src="/images/user-regular.svg" alt="" />
                                <p>Log In  <br/> My Account</p>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src="/images/cart-arrow-down-solid.svg" alt="" />
                                <p>
                                    0 <br/> 0.00$
                                </p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}

export default Header;