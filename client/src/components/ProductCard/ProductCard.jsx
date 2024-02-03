import React from 'react';
import './ProductCard.css';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToWishlist as addToWishlistAction } from '../../redux/products/productSlice.js';

function ProductCard({
    columns,
    product: {
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
    } }) {

    const location = useLocation();
    const dispatch = useDispatch();

    const addToWishlist = (productId) => {
        dispatch(addToWishlistAction(productId))
    }

    return <div className={`product-card ${location.pathname === '/' ? "product-card-scale" : ""}`}>
        <Link>
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
                    <button className="actions__link"><img src="/assets/images/market.png" alt="bag" /></button>
                    {/* <Link className="actions__link"><img src="/assets/images/view.png" alt="view" /></Link> */}
                    <button className="actions__link" onClick={() => addToWishlist(_id)}><img src="/assets/images/heart.png" alt="heart" /></button>
                    <button className="actions__link"><img src="/assets/images/compare.png" alt="compare" /></button>
                </div>
            </div>
        </Link >
    </div >
}

export default ProductCard;

