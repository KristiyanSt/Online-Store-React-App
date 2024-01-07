import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <>
            <footer className="footer-top footer">
                <section className="footer__wrapper">
                    <section class="footer-top__label">
                        <img src="/images/glowing-star-svgrepo-com.svg" alt="star" />
                        <h2 class="footer-top__title">Subscribe For Our Newsletter</h2>
                    </section>
                    <section className="footer-top__subscribe input-group">
                        <input className="footer-top__subscribe input" type="text" placeholder="Enter your email.." />
                        <span class="footer-top__button input-button">Subscribe</span>
                    </section>
                </section>
            </footer>
            <footer className="footer-middle footer">
                <section className="footer__wrapper">
                    <section className="footer__content">
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
                                            <img className="social-icons__img" src="/images/facebook-svgrepo-com.svg" alt="facebook" />
                                        </Link>
                                    </li>
                                    <li className="social-icons__list-item">
                                        <Link className="social-icons__link">
                                            <img className="social-icons__img" src="/images/instagram-svgrepo-com.svg" alt="instagram" />
                                        </Link>
                                    </li>
                                    <li className="social-icons__list-item">
                                        <Link className="social-icons__link">
                                            <img className="social-icons__img" src="/images/twitter-svgrepo-com.svg" alt="twitter" />
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    <section className="footer__content">
                        <h4 className="footer__title">Information</h4>
                        <ul className="footer__links">
                            <li>
                                <Link className="footer__link">Sell products with Amazon</Link>
                            </li>
                            <li>
                                <Link className="footer__link">Returns & Placements</Link>
                            </li>
                        </ul>
                    </section>
                    <section className="footer__content">
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
                    </section>
                    <section className="footer__content">
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
                    </section>

                </section>
            </footer>
            <footer className="footer-bottom footer">
                <section className="footer__wrapper">
                    <p className="footer-bottom__text">&copy; {new Date().getFullYear()} Powered by Kristiyan Stefanov</p>
                </section>
            </footer>
        </>
    );
}

export default Footer;