import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <>
            <footer className="footer">
                <section className="footer-top">
                    <div className="footer__wrapper">
                        <div className="footer-top__label">
                            <img src="/assets/images/glowing-star-svgrepo-com.svg" alt="star" />
                            <p>Subscribe For Our Newsletter</p>
                        </div>
                        <div className="footer-top__subscribe input-group">
                            <input className="footer-top__subscribe input" type="text" placeholder="Enter your email.." />
                            <span className="footer-top__button input-button">Subscribe</span>
                        </div>
                    </div>
                </section>
                <section className="footer-middle">
                    <div className="footer__wrapper">
                        <div className="footer-middle__contents">
                            <div className="footer__content">
                                <h4 className="footer__title">Get to know us</h4>
                                <ul className="footer__links">
                                    <li>
                                        <Link className="footer__link">Careers</Link>
                                    </li>
                                    <li>
                                        <Link className="footer__link">Blog</Link>
                                    </li>
                                    <li>
                                        <Link className="footer__link">About Amazon</Link>
                                    </li>
                                    <li>
                                        <Link className="footer__link">Amazon Devices</Link>
                                    </li>
                                    <li className="social-icons">
                                        <ul>
                                            <li className="social-icons__list-item">
                                                <Link className="social-icons__link">
                                                    <img className="social-icons__img" src="/assets/images/facebook-svgrepo-com.svg" alt="facebook" />
                                                </Link>
                                            </li>
                                            <li className="social-icons__list-item">
                                                <Link className="social-icons__link">
                                                    <img className="social-icons__img" src="/assets/images/instagram-svgrepo-com.svg" alt="instagram" />
                                                </Link>
                                            </li>
                                            <li className="social-icons__list-item">
                                                <Link className="social-icons__link">
                                                    <img className="social-icons__img" src="/assets/images/twitter-svgrepo-com.svg" alt="twitter" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__content">
                                <h4 className="footer__title">Information</h4>
                                <ul className="footer__links">
                                    <li>
                                        <Link className="footer__link">Sell products with Amazon</Link>
                                    </li>
                                    <li>
                                        <Link className="footer__link">Returns & Placements</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__content">
                                <h4 className="footer__title">Account</h4>
                                <ul className="footer__links">
                                    <li>
                                        <Link className="footer__link">Settings</Link>
                                    </li>
                                    <li>
                                        <Link className="footer__link">Manage</Link>
                                    </li>
                                    <li>
                                        <Link className="footer__link">Security</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__content">
                                <h4 className="footer__title">Quick links</h4>
                                <ul className="footer__links">
                                    <li>
                                        <Link className="footer__link">Laptops</Link>
                                    </li>
                                    <li>
                                        <Link className="footer__link">Phones</Link>
                                    </li>
                                    <li>
                                        <Link className="footer__link">Chargers</Link>
                                    </li>
                                    <li>
                                        <Link className="footer__link">Headphones</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer-bottom">
                    <div className="footer__wrapper">
                        <p className="footer-bottom__text">&copy; {new Date().getFullYear()} Powered by Kristiyan Stefanov</p>
                    </div>
                </section>
            </footer>
        </>
    );
}

export default Footer;