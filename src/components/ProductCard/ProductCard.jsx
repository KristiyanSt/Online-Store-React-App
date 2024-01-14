import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({ columns }) {
    return <div className="product-card">
        <Link>
            <div className={`product-card__content ${columns <= 2 ? "content-row" :"content-col"}`}>
                <div className="image__wrapper">
                    <img className="product-card__image" src="/assets/images/apple-watch.jpg" alt="watch" />
                    <img className="product-card__image-secondary" src="/assets/images/watch-secondary.jpg" alt="watch-secondary" />
                </div>
                <div className="product__details">
                    <p className="product__brand">Apple</p>
                    <h5 className="product__title">Apple Watch SE (GPS + Cellular, 44mm) - Silver Aluminum Case</h5>
                    <p className="product__price">$100</p>
                </div>
                <div className="actions">
                    <Link className="actions__link"><img src="/assets/images/market.png" alt="bag" /></Link>
                    <Link className="actions__link"><img src="/assets/images/view.png" alt="view" /></Link>
                    <Link className="actions__link"><img src="/assets/images/heart.png" alt="heart" /></Link>
                    <Link className="actions__link"><img src="/assets/images/compare.png" alt="compare" /></Link>
                </div>
            </div>
        </Link >
    </div >
}

export default ProductCard;