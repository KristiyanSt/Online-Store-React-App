import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <>
            <footer className="footer-top footer">
                <section className="footer__wrapper">
                    <section class="footer-top__label">
                        <img src="/images/glowing-star-svgrepo-com.svg" alt="glowing star" />
                        <h2 class="footer-top__title">Subscribe For Our Newsletter</h2>
                    </section>
                    <section className="footer-top__subscribe input-group">
                        <input className="footer-top__subscribe input" type="text" placeholder="Enter your email.." />
                        <span class="footer-top__button input-button">Subscribe</span>
                    </section>
                </section>
            </footer>
            <footer className="footer-middle footer"></footer>
            <footer className="footer-bottom footer">
                <section className="footer__wrapper">
                    <p className="footer-bottom__text">&copy; {new Date().getFullYear()} Powered by Kristiyan Stefanov</p>
                </section>
            </footer>
        </>
    );
}

export default Footer;