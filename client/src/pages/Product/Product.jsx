import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import { Rating } from 'react-simple-star-rating';
import './Product.css';
import { Link } from 'react-router-dom';

function Product(props) {

    const [hasOrdered, setHasOrdered] = useState(true);

    return (
        <>
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
            <section className="reviews collection">
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