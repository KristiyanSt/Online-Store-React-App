import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';

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
                            <h6 className="secondary-title" >SUPERCHARGED FOR PROS</h6>
                            <h2 className="main-title">Special Sale</h2>
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
            <section className="categories">
                <div className="container">
                    <div className="category">
                        <div className="text-contain">
                            <h4 className="category__title" >Cameras</h4>
                            <p className="category__subtitle">10 Items</p>
                        </div>
                        <img className="category__img" src="/assets/images/camera-category.jpg" alt="camera" />
                    </div>
                    <div className="category">
                        <div className="text-contain">
                            <h4 className="category__title">Smart TV</h4>
                            <p className="category__subtitle" >10 Items</p>
                        </div>
                        <div className="img__wrapper">
                            <img className="category__img" src="/assets/images/tv-category.jpg" alt="tv" />
                        </div>
                    </div>
                    <div className="category">
                        <div className="text-contain">
                            <h4 className="category__title">Gaming & Accessories</h4>
                            <p className="category__subtitle" >10 Items</p>
                        </div>
                        <div className="img__wrapper">
                            <img className="category__img" src="/assets/images/gaming.jpg" alt="gaming" />
                        </div>
                    </div>
                    <div className="category">
                        <div className="text-contain">
                            <h4 className="category__title">Laptops & PCs</h4>
                            <p className="category__subtitle" >10 Items</p>
                        </div>
                        <div className="img__wrapper">
                            <img className="category__img" src="/assets/images/laptop.jpg" alt="laptop" />
                        </div>
                    </div>
                    <div className="category">
                        <div className="text-contain">
                            <h4 className="category__title">Phones</h4>
                            <p className="category__subtitle" >10 Items</p>
                        </div>
                        <div className="img__wrapper">
                            <img className="category__img" src="/assets/images/phone.jpg" alt="phone" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="featured-collection">
                <div className="container">
                    <div className="header">
                        <h4 className="featured-collection__title">
                            Featured Collection
                        </h4>
                    </div>
                    <div className="products__wrapper">
                        {Array.from({length: 6}).map(x => <ProductCard/>)}
                    </div> 
                </div>
            </section>
        </>
    );
}

export default Home;