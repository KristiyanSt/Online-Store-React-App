import React from 'react';
import Meta from '../../components/Meta/Meta.jsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx';
import './Compare.css';


function CompareProducts(props) {
    return (
        <>
            <Meta title={"Compare Products"} />
            <Breadcrumb title="Compare Products" />
            <div className="compare-products">
                <div className="container">
                    <div className="compare-card">
                        <img className="close-btn" src="/assets/images/cross.png" alt="cross" />
                        <div className="image__wrapper">
                            <img className="compare-card__image" src="/assets/images/apple-watch.jpg" alt="watch" />
                        </div>
                        <div className="compare-card__header">
                            <h5 className="compare-card__title">
                                Apple Watch G42 e3 Wi-Fi
                            </h5>
                            <p className="compare-card__price">$100</p>
                        </div>
                        <div className="compare-card__details">
                            <div className="details-couple">
                                <h5 className="couple-title">Brand:</h5>
                                <p className="couple-label">Apple</p>
                            </div>
                            <div className="details-couple">
                                <h5 className="couple-title">Type:</h5>
                                <p className="couple-label">Watch</p>
                            </div>
                            <div className="details-couple">
                                <h5 className="couple-title">Availability:</h5>
                                <p className="couple-label">In Stock</p>
                            </div>
                            <div className="details-couple">
                                <h5 className="couple-title">Size:</h5>
                                <p className="couple-label">L M</p>
                            </div>
                        </div>
                    </div>
                    <div className="compare-card">
                        <img className="close-btn" src="/assets/images/cross.png" alt="cross" />
                        <div className="image__wrapper">
                            <img className="compare-card__image" src="/assets/images/apple-watch.jpg" alt="watch" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CompareProducts;