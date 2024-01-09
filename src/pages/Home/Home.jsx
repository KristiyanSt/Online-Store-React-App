import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home(props) {
    return (
        <>
            <section className="banners">
                <div className="container">
                    <div className="main-banner">
                        <div className="img__wrapper">
                            <img className="main-banner__img" src="assets/images/woman-banner.jpg" alt="main banner" />
                        </div>
                        <div className="main-banner__content">
                            <h4 className="secondary-title" >SUPERCHARGED FOR PROS</h4>
                            <h5 className="main-title">Special Sale</h5>
                            <p className="desc">From $349,99 or $14,59/mo. <br /> for 24 mo.</p>
                            <Link className="button" >BUY NOW</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services">
                <div className="container">
                    <div className="services__shipping service">
                        <img className="service__img" src="/assets/images/truck-delivery.svg" alt="delivery-truck" />
                        <div className="text-container">
                            <p className="services__title">Free Shipping</p>
                            <p className="services__text">From all orders over $100</p>
                        </div>
                    </div>
                    <div className="services__shipping service">
                        <img className="service__img" src="/assets/images/gift.svg" alt="gift" />
                        <div className="text-container">
                            <p className="services__title">Daily Surprise Offers</p>
                            <p className="services__text">Save up to 20% off</p>
                        </div>
                    </div>
                    <div className="services__shipping service">
                        <img className="service__img" src="/assets/images/support.svg" alt="delivery-truck" />
                        <div className="text-container">
                            <p className="services__title">Free Shipping</p>
                            <p className="services__text">From all orders over $100</p>
                        </div>
                    </div>
                    <div className="services__shipping service">
                        <img className="service__img" src="/assets/images/prices.svg" alt="delivery-truck" />
                        <div className="text-container">
                            <p className="services__title">Affordable Prices</p>
                            <p className="services__text">Get Factory Direct Price</p>
                        </div>
                    </div>
                    <div className="services__shipping service">
                        <img className="service__img" src="/assets/images/bank-card.svg" alt="delivery-truck" />
                        <div className="text-container">
                            <p className="services__title">Secure Payments</p>
                            <p className="services__text">100% Protected Payments</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;