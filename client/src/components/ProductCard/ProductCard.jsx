import React from 'react';
import './ProductCard.css';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishlist } from '../../redux/user/userSlice.js';

function ProductCard({
    columns,
    brand,
    category,
    color,
    description,
    images,
    price,
    quantity,
    title,
    totalrating,
    _id
}) {

    const location = useLocation();
    const dispatch = useDispatch();

    const addToWishlistHandler = (ev, productId) => {
        ev.preventDefault();
        dispatch(addToWishlist(productId))
    }
    const addToCartHandler = (ev, productData) => {
        ev.preventDefault();
        dispatch(addToCart(productData))
    }

    return <div className={`product-card ${location.pathname === '/' ? "product-card-scale" : ""}`}>
        <Link to={`/product/${_id}`}>
            <div className={`product-card__content ${columns <= 2 ? "content-row" : ""}`}>
                <div className="image__wrapper">
                    <img className="product-card__image" src={images[0]?.url || ""} alt="watch" />
                    <img className="product-card__image-secondary" src={images[1]?.url || ""} alt="watch-secondary" />
                </div>
                <div className="product__details">
                    <p className="product__brand">{brand}</p>
                    <h5 className="product__title">{title}</h5>
                    <p className="product__price">${price}</p>
                </div>
                <div className={`${columns <= 2 ? "actions-top" : "actions-right"}`} >
                    <button className="actions__link" onClick={(ev) => addToCartHandler(ev, { count: 1, productId: _id })} ><img src="/assets/images/market.png" alt="bag" /></button>
                    <button className="actions__link" onClick={(ev) => addToWishlistHandler(ev, _id)}><img src="/assets/images/heart.png" alt="heart" /></button>
                    <button className="actions__link"><img src="/assets/images/compare.png" alt="compare" /></button>
                </div>
            </div>
        </Link >
    </div >
}

export default ProductCard;

