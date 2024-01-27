import React from 'react';
import './Wishlist.css';
import Meta from '../../components/Meta/Meta.jsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx';


function Wishlist(props) {
    return (
        <>
            <Meta title={"Wishlist"} />
            <Breadcrumb title="Wishlist" />
            <div className="wishlist">
                <div className="container">
                    <div className="wishlist-card">
                        <img className="close-btn" src="/assets/images/cross.png" alt="cross" />
                        <div className="image__wrapper">
                            <img src="/assets/images/apple-watch.jpg" alt="watch" />
                        </div>
                        <div className="wishlist-card__header">
                            <h5 className="wishlist-card__title">
                                Apple Watch G42 e3 Wi-Fi
                            </h5>
                            <p className="wishlist-card__price">$100</p>
                        </div>
                    </div>
                    <div className="wishlist-card">
                        <img className="close-btn" src="/assets/images/cross.png" alt="cross" />
                        <div className="image__wrapper">
                            <img src="/assets/images/apple-watch.jpg" alt="watch" />
                        </div>
                        <div className="wishlist-card__header">
                            <h5 className="wishlist-card__title">
                                Apple Watch G42 e3 Wi-Fi
                            </h5>
                            <p className="wishlist-card__price">$100</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wishlist;