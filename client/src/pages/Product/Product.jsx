import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import { Rating } from 'react-simple-star-rating';
import './Product.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

import ReactImageZoom from 'react-image-zoom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx';
import Meta from '../../components/Meta/Meta.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, addToCart } from '../../redux/user/userSlice.js';
import { getSingleProduct } from '../../redux/products/productSlice.js';

function Product(props) {
    const productId = useParams().id;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const product = useSelector(state => state.product.singleProduct);
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        dispatch(getSingleProduct(productId));
    }, [productId]);

    const addToWishlistHandler = (productId) => {
        if (user) {
            dispatch(addToWishlist(productId))
        } else {
            navigate('/signin')
        }
    }
    const addToCartHandler = (productData) => {
        dispatch(addToCart(productData))
    }



    const [hasOrdered, setHasOrdered] = useState(true);
    const imagesWrapperRef = useRef();
    const productDetailsRef = useRef();
    // const headerRef = useRef();
    useEffect(() => {
        const attachImages = () => {
            const scrollTop = window.scrollY;

            const productDetailsHeight = productDetailsRef.current.clientHeight;
            const imagesWrapperHeight = imagesWrapperRef.current.clientHeight;
            const offset = productDetailsHeight - 547 + 128;

            if (scrollTop >= 128 && scrollTop <= offset) {
                imagesWrapperRef.current.style.position = "fixed";
                imagesWrapperRef.current.style.top = "0"
            } else if (scrollTop > offset) {
                imagesWrapperRef.current.style.position = "absolute";
                imagesWrapperRef.current.style.bottom = "0"
                imagesWrapperRef.current.style.top = "unset"
            } else {
                imagesWrapperRef.current.style.top = "unset"
                imagesWrapperRef.current.style.position = "unset"
                imagesWrapperRef.current.style.bottom = "unset"
            }
        }
        window.addEventListener('scroll', attachImages);

        return () => {
            window.removeEventListener('scroll', attachImages);
        }
    }, []);

    return (
        <>
            <Breadcrumb title={product?.title} />
            <Meta title={product?.title} />
            <section className="main-product collection">
                <div className="container">
                    <div className="images">
                        <div ref={imagesWrapperRef} className="images-wrapper">
                            <div className="main-image">
                                <ReactImageZoom
                                    width={600}
                                    height={400}
                                    zoomWidth={700}
                                    offset={{ horizontal: "10" }}
                                    scale={1.4}
                                    // zoomLensStyle={"width: 100px; height: 100px; background-color: black;"}
                                    img={product ? product?.images[0]?.url : " "}
                                />
                            </div>
                            <p className="images-wrapper__text">Roll over the image to zoom in</p>
                            <div className="other-images-wrapper">
                                <img className="other-image" src={product && product?.images[1]?.url} alt="" />
                                <img className="other-image" src={product && product?.images[1]?.url} alt="" />
                                <img className="other-image" src={product && product?.images[1]?.url} alt="" />
                                <img className="other-image" src={product && product?.images[1]?.url} alt="" />
                                <img className="other-image" src={product && product?.images[1]?.url} alt="" />
                                <img className="other-image" src={product && product?.images[1]?.url} alt="" />
                                <img className="other-image" src={product && product?.images[1]?.url} alt="" />
                                <img className="other-image" src={product && product?.images[1]?.url} alt="" />
                            </div>
                        </div>
                    </div>
                    <div ref={productDetailsRef} className="main-product__details">
                        <h4 className="main-product__title">
                            {product?.title}
                        </h4>
                        <div className="main-product__rating">
                            <span className="main-product__total-rating">{product?.totalrating}</span>
                            <Rating
                                allowFraction
                                size={19}
                                initialValue={product?.totalrating}
                                fillColor={"#ffa41c"}
                            />
                            <a href="#reviews" className="main-product__ratings-count">{product?.ratings?.length} ratings</a>
                        </div>
                        <div className="main-product__price">
                            <div className="discount">-35%</div>
                            <div className="top-symbol">&#65284;</div>
                            {product?.price}
                            <div className="top-symbol">00</div>
                        </div>
                        <div className="main-product__info">
                            <div className="info-item">
                                <p>Brand</p>
                                <p>{product?.brand}</p>
                            </div>
                            <div className="info-item">
                                <p>Color</p>
                                <p>{product?.color}</p>
                            </div>
                            <div className="info-item">
                                <p>Category</p>
                                <p>{product?.category}</p>
                            </div>
                            <div className="info-item">
                                <p>Availability</p>
                                <p>{product?.quantity >= 1 ? "In Stock" : "Out of Stock"}</p>
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
                    <div className="main-product__preview">
                        <div className="main-product__price">
                            {/* <div className="discount">-35%</div> */}
                            <div className="top-symbol">&#65284;</div>
                            {product?.price}
                            <div className="top-symbol">00</div>
                        </div>
                        <div className="main-product__quantity">
                            <select value={`Qty: 3`} name="quantity" id="quantity">
                                <option value="0" selected disabled>Qty</option>
                                <option value="1">1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                            </select>
                        </div>
                        <div className="main-product__action-buttons">
                            <button onClick={() => addToWishlistHandler(productId)} className="proceed-btn btn">Add to wishlist</button>
                            <button onClick={() => addToCartHandler({ count: 1, productId })} className="proceed-btn btn">Add to cart</button>
                        </div>
                    </div>
                </div>
            </section >
            <section className="description collection">
                <div className="container">
                    <div className="header">
                        <h4 className="collection__title">
                            Description
                        </h4>
                    </div>
                    <p className="description__text">
                        {product?.description}
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
                                    maxLength="400"
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
                        {/* {Array.from({ length: 5 }).map((x, index) => <ProductCard key={index} />)} */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Product;