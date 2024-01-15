import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';

import bannerImage1 from './banner-bg-images/banner-image-1.jpg';
import bannerImage2 from './banner-bg-images/banner-image-2.jpg';
import bannerImage3 from './banner-bg-images/banner-image-3.jpg';
import bannerImage4 from './banner-bg-images/banner-image-4.jpg';
const bannerImages = [bannerImage1, bannerImage2, bannerImage3, bannerImage4];

function Home(props) {
    const [slide, setSlide] = useState(0);

    const onLeftClick = () => {
        if (slide == 0) {
            return setSlide(bannerImages.length - 1);
        }
        return setSlide(prevSlide => prevSlide - 1);
    }
    const onRightClick = () => {
        if (slide == bannerImages.length - 1) {
            return setSlide(0);
        }
        return setSlide(prevSlide => prevSlide + 1);

    }

    useEffect(() => {
        const interval = setInterval(onRightClick, 8000);
        return () => clearInterval(interval);
    }, [slide]);

    return (
        <>
            <section className="banners">
                <div className="container">
                    <div className="banners__slider">
                        {bannerImages.map(imageSrc => {
                            return <div
                                className="banner__wrapper"
                                style={{
                                    translate: `${(slide * -100)}%`,
                                    backgroundImage: `url(${imageSrc})`
                                }}
                                key={imageSrc}
                            >
                                <div className="bg-shade"></div>
                            </div>
                        })}
                    </div>
                    <button className="slider-button button-left" onClick={onLeftClick}>
                        <img src="/assets/images/left-arrow.svg" alt="arrow-left" />
                    </button>
                    <button className="slider-button button-right" onClick={onRightClick}>
                        <img src="/assets/images/right-arrow.svg" alt="arrow-right" />
                    </button>
                    {/* <div className="main-banner">
                        <div className="img__wrapper">
                            <img className="main-banner__img" src="assets/images/woman-banner.jpg" alt="main banner" />
                        </div>
                        <div className="main-banner__content">
                            <h6 className="secondary-title" >SUPERCHARGED FOR PROS</h6>
                            <h2 className="main-title">Special Sale</h2>
                            <p className="desc">From $349,99 or $14,59/mo. <br /> for 24 mo.</p>
                            <Link className="button" >BUY NOW</Link>
                        </div>
                    </div> */}
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
            <section className="featured-collection collection">
                <div className="container">
                    <div className="header">
                        <h4 className="collection__title">
                            Featured Collection.
                            <span className="collection__title-shade" >Unparalleled choices for rich, high-quality experience.</span>
                        </h4>
                    </div>
                    <div className="products__wrapper">
                        {Array.from({ length: 5 }).map((x, index) => <ProductCard key={index}/>)}
                    </div>
                </div>
            </section>
            <section className="latest-collection collection">
                <div className="container">
                    <div className="header">
                        <h4 className="collection__title">
                        The latest.
                            <span className="collection__title-shade" >Take a look at what’s new, right now.</span>
                        </h4>
                    </div>
                    <div className="latest__wrapper">
                        <div className="latest-card">
                            <img className="latest-card__img" src="/assets/images/latest-card-img-2.jpg" alt="latest-card" />
                            <div className="latest-card__content">
                                <h5 className="latest-card__title">In with the new.</h5>
                                <p className="latest-card__desc">Discover fresh new colors for your favorite accessories.</p>
                            </div>
                        </div>
                        <div className="latest-card">
                            <img className="latest-card__img" src="/assets/images/latest-card-img-2.jpg" alt="latest-card" />
                        </div>
                        <div className="latest-card">
                            <img className="latest-card__img" src="/assets/images/latest-card-img-2.jpg" alt="latest-card" />
                        </div>
                        <div className="latest-card">
                            <img className="latest-card__img" src="/assets/images/latest-card-img-2.jpg" alt="latest-card" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;