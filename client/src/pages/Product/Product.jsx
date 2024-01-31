import React, { useRef, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import { Rating } from 'react-simple-star-rating';
import './Product.css';
import { Link } from 'react-router-dom';

import ReactImageZoom from 'react-image-zoom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx';
import Meta from '../../components/Meta/Meta.jsx';

function Product(props) {

    const [hasOrdered, setHasOrdered] = useState(true);
    // const imagesWrapperRef = useRef();
    const [imagesWrapperStyle, setImageWrapperStyle] = useState({ position: "", top: "", bottom: "" });

    window.onscroll = () => {
        const scrollTop = window.scrollY;

        if (scrollTop >= 128 && scrollTop <= 856.84 - 547 + 128) {
            setImageWrapperStyle({
                ...imagesWrapperStyle,
                position: "fixed",
                top: "0"
            });
            // imagesWrapperRef.current.style.position = "fixed";
            // imagesWrapperRef.current.style.top = "0"
        } else if (scrollTop > 856.84 - 547 + 128) {
            setImageWrapperStyle({
                ...imagesWrapperStyle,
                position: "absolute",
                bottom: "0",
                top: "unset"
            });
            // imagesWrapperRef.current.style.position = "absolute";
            // imagesWrapperRef.current.style.bottom = "0"
            // imagesWrapperRef.current.style.top = "unset"
        } else {
            setImageWrapperStyle({
                ...imagesWrapperStyle,
                position: "unset",
                bottom: "unset",
                top: "unset"
            });
            // imagesWrapperRef.current.style.position = "unset"
            // imagesWrapperRef.current.style.top = "unset"
            // imagesWrapperRef.current.style.bottom = "unset"
        }
    }

    return (
        <>
            <Breadcrumb title="Product name" />
            <Meta title="Product name" />
            <section className="main-product collection">
                <div className="container">
                    <div className="images-wrapper">
                        <div style={imagesWrapperStyle} className="imagesWrapper">
                            <div className="main-image">
                                <ReactImageZoom
                                    width={600}
                                    height={400}
                                    zoomWidth={700}
                                    offset={{ horizontal: "10" }}
                                    scale={1.4}
                                    img={"https://media.wired.com/photos/62a3a0ab9f83b5bb2aa0b416/master/w_1600%2Cc_limit/Casio-PRW-61-Gear.jpg"}
                                />
                            </div>
                            <p className="images-wrapper__text">Roll over the image to zoom in</p>
                            <div className="other-images-wrapper">
                                <img className="other-image" src="https://media.wired.com/photos/62a3a0ab9f83b5bb2aa0b416/master/w_1600%2Cc_limit/Casio-PRW-61-Gear.jpg" alt="" />
                                <img className="other-image" src="https://media.wired.com/photos/62a3a0ab9f83b5bb2aa0b416/master/w_1600%2Cc_limit/Casio-PRW-61-Gear.jpg" alt="" />
                                <img className="other-image" src="https://media.wired.com/photos/62a3a0ab9f83b5bb2aa0b416/master/w_1600%2Cc_limit/Casio-PRW-61-Gear.jpg" alt="" />
                                <img className="other-image" src="https://media.wired.com/photos/62a3a0ab9f83b5bb2aa0b416/master/w_1600%2Cc_limit/Casio-PRW-61-Gear.jpg" alt="" />
                                <img className="other-image" src="https://media.wired.com/photos/62a3a0ab9f83b5bb2aa0b416/master/w_1600%2Cc_limit/Casio-PRW-61-Gear.jpg" alt="" />
                                <img className="other-image" src="https://media.wired.com/photos/62a3a0ab9f83b5bb2aa0b416/master/w_1600%2Cc_limit/Casio-PRW-61-Gear.jpg" alt="" />
                                <img className="other-image" src="https://media.wired.com/photos/62a3a0ab9f83b5bb2aa0b416/master/w_1600%2Cc_limit/Casio-PRW-61-Gear.jpg" alt="" />
                                <img className="other-image" src="https://media.wired.com/photos/62a3a0ab9f83b5bb2aa0b416/master/w_1600%2Cc_limit/Casio-PRW-61-Gear.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="main-product__details">
                        <h4 className="main-product__title">DEWALT 20V Max Cordless Drill / Driver Kit, Compact, 1/2-Inch (DCD771C2), Dewalt Yellow</h4>
                        <div className="main-product__rating">
                            <span className="main-product__total-rating">4.6</span>
                            <Rating
                                allowFraction
                                size={19}
                                initialValue={4.5}
                                fillColor={"#ffa41c"}
                            />
                            <a href="#reviews" className="main-product__ratings-count">41,946 ratings</a>
                        </div>
                        <div className="main-product__price">
                            <div className="discount">-35%</div>
                            <div className="top-symbol">&#65284;</div>
                            99
                            <div className="top-symbol">00</div>
                        </div>
                        <div className="main-product__info">
                            <div className="info-item">
                                <p>Brand</p>
                                <p>Dewalt</p>
                            </div>
                            <div className="info-item">
                                <p>Color</p>
                                <p>Black/yellow</p>
                            </div>
                            <div className="info-item">
                                <p>Category</p>
                                <p>Mechanics</p>
                            </div>
                            <div className="info-item">
                                <p>Availability</p>
                                <p>In Stock</p>
                            </div>
                            <div className="info-item">
                                <p>Brand</p>
                                <p>Dewalt</p>
                            </div>
                        </div>
                        <div className="about">
                            <h6 className="about__title">About this item</h6>
                            <ul className="about__list">
                                <li className="about__item">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident iusto porro magnam accusamus perspiciatis et ut optio aperiam quo! Consequuntur nemo molestias debitis provident tempora commodi quae! Saepe, officia reiciendis.</li>
                                <li className="about__item">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam eligendi ipsa dignissimos, dolorum, voluptatem animi, harum quasi voluptatum hic eum laboriosam tempora! Repudiandae at laudantium modi consequuntur libero ipsum quibusdam.</li>
                                <li className="about__item">lorem</li>
                            </ul>
                        </div>
                        <div className="feature-ratings">
                            <h6 className="feature__title">Customer rating by feature</h6>
                            <div className="feature__item">
                                <p>Durability</p>
                                <Rating
                                    allowFraction
                                    size={19}
                                    initialValue={4.5}
                                    fillColor={"#ffa41c"}
                                />
                                4.5
                            </div>
                            <div className="feature__item">
                                <p>Value for money</p>
                                <Rating
                                    allowFraction
                                    size={19}
                                    initialValue={4.5}
                                    fillColor={"#ffa41c"}
                                />
                                4.5
                            </div>
                            <div className="feature__item">
                                <p>Ergonomic</p>
                                <Rating
                                    allowFraction
                                    size={19}
                                    initialValue={4.5}
                                    fillColor={"#ffa41c"}
                                />
                                4.5
                            </div>
                        </div>
                    </div>
                    <div className="cart">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sequi, illum reprehenderit facilis tenetur alias quae sunt error mollitia incidunt magnam assumenda rem debitis eius ullam quas eos ducimus doloremque!</p>
                    </div>
                </div>
            </section>
            <section className="description collection">
                <div className="container">
                    <div className="header">
                        <h4 className="collection__title">
                            Description
                        </h4>
                    </div>
                    <p className="description__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit, nulla, rerum, exercitationem asperiores distinctio deserunt cum natus quod omnis ex pariatur suscipit. Perspiciatis tempora est molestiae harum, impedit autem!
                    </p>
                </div>
            </section>
            <section id="reviews" className="reviews collection">
                <div className="container">
                    <div className="header">
                        <h4 className="collection__title">
                            Customer reviews
                        </h4>
                    </div>
                    <div className="total-rating">
                        <Rating
                            allowFraction
                            size={20}
                            initialValue={4}
                        />
                        <p className="total-ratins__text">Based on 23 reviews</p>
                        {
                            hasOrdered && (
                                <p className="create-review-link">Write a customer review</p>
                            )
                        }
                    </div>
                    <div className="review-form">
                        <h5 className="review-form__title">Create a review</h5>
                        <form action="">
                            <div className="review__input-group">
                                <div>
                                    <span className="review-form__list-item">1</span>
                                    <p>How would you rate this product?</p>
                                </div>
                                <Rating
                                    allowFraction
                                    size={20}
                                    initialValue={0}
                                />
                            </div>
                            <div className="review__input-group">
                                <div>
                                    <span className="review-form__list-item">2</span>
                                    <p>Give your review a headline</p>
                                </div>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="headline"
                                    placeholder="Headline"
                                />
                            </div>
                            <div className="review__input-group">
                                <div>
                                    <span className="review-form__list-item">3</span>
                                    <p>Share your opinion on this product</p>
                                </div>
                                <textarea
                                    placeholder="Write your review"
                                    className="review"
                                    maxlength="400"
                                    name="review"
                                    cols="10"
                                    rows="3"></textarea>
                            </div>
                            <div className="review__buttons">
                                <button className="preview-button">Preview </button>
                                <button type="submit" className="submit-button">Publish</button>
                            </div>

                        </form>
                    </div>
                </div >
            </section >
            <section className="featured-collection collection">
                <div className="container">
                    <div className="header">
                        <h4 className="collection__title">
                            Popular products
                        </h4>
                    </div>
                    <div className="products__wrapper">
                        {Array.from({ length: 5 }).map((x, index) => <ProductCard key={index} />)}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Product;