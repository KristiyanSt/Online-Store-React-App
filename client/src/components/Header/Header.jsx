import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { getCart } from '../../redux/user/userSlice.js';
import CustomDropdown from '../CustomDropdown/CustomDropdown.jsx';

const CATEGORIES = ["Electronics", "Music", "Healthcare", "Office"]

function Header(props) {
    const dispatch = useDispatch();

    const [selectedCategory, setSelectedCategory] = useState("Shop Categories");
    const handleSelectedCategory = (categoryValue) => {
        setSelectedCategory(categoryValue)
    }

    const cart = useSelector(state => state.auth?.cart);
    const user = useSelector(state => state.auth?.user);
    const cartItemsCount = cart ? cart.products.reduce((acc, p) => acc += p.count, 0) : 0;

    useEffect(() => {
        if (user !== null) {
            dispatch(getCart());
        }
    }, [user]);

    return (
        <>
            <header className="header">
                <div className="container">
                    <section className="header-top">
                        <div className="header-top__wrapper">
                            <h1 className="header-top__title">
                                <Link to="/">Storish</Link>
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
                                        <Link to="/compare-products" className="header-top__link">
                                            <img className="header-top__link--img" src="/assets/images/circle.png" alt="compare" />
                                            <p className="header-top__link--text">Compare <br /> Products</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/wishlist" className="header-top__link">
                                            <img className="header-top__link--img" src="/assets/images/heart-regular.svg" alt="heart" />
                                            <p className="header-top__link--text">Favourite <br /> Wishlist</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/signin" className="header-top__link">
                                            <img className="header-top__link--img" src="/assets/images/user-regular.svg" alt="user" />
                                            <p className="header-top__link--text">Sign In  <br /> My Account</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/cart" className="header-top__link">
                                            <img className="header-top__link--img" src="/assets/images/cart-arrow-down-solid.svg" alt="cart" />
                                            <p className="header-top__link--text">
                                                <span className="header-top__link--text--zero">{cartItemsCount < 11 ? cartItemsCount : "10+"}</span> <br />
                                                ${cart ? (
                                                    cart.cartTotal.toString().length > 3 ? (
                                                        cart.cartTotal.toString().substr(0, 3) + "..."
                                                    ) : (
                                                        cart.cartTotal
                                                    )
                                                ) : (
                                                    "00.00"
                                                )}
                                            </p>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </section>
                    <section className="header-bottom">
                        <div className="header-bottom__wrapper">
                            <CustomDropdown
                                title={null}
                                selected={selectedCategory}
                                options={CATEGORIES}
                                handleOption={handleSelectedCategory}
                            />
                            <div className="header-bottom__menu">
                                <nav className="header-bottom__nav">
                                    <ul className="header-bottom__links">
                                        <li>
                                            <NavLink to="/" className="header-bottom__link">Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/store" className="header-bottom__link">Store</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="header-bottom__link">Blogs</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="header-bottom__link">Contact</NavLink>
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