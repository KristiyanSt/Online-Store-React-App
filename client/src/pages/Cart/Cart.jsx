import React from 'react';
import Meta from '../../components/Meta/Meta.jsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx';
import './Cart.css';


function Cart(props) {
    return (
        <>
            <Meta title={"Shopping cart"} />
            <Breadcrumb title="Shopping cart" />
            <section className="cart collection">
                <div className="container">
                    <div className="cart__products">
                        <div className="cart__header">
                            <h2 className="cart__title">Shopping Cart</h2>
                            <p className="cart__price">Price</p>
                        </div>
                        <div className="cart__product">
                            <input className="select-item" type="checkbox" />
                            <div className="cart__product--image-wrapper">
                                <img
                                    src="https://media.wired.com/photos/62a3a0ab9f83b5bb2aa0b416/master/w_1600%2Cc_limit/Casio-PRW-61-Gear.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="cart__product--details">
                                <div className="cart__product--header">
                                    <h5 className="cart__product--title">DEWALT 20V Max Cordless Drill / Driver Kit, Compact, 1/2-Inch (DCD771C2), Dewalt Yellow</h5>
                                    <p className="cart__product--price">$83.89</p>
                                </div>
                                <div className="cart__product--info">
                                    <div className="info-item">
                                        <p>Availability</p>
                                        <p>In Stock</p>
                                    </div>
                                    <div className="info-item">
                                        <p>Color</p>
                                        <p>Blue</p>
                                    </div>
                                </div>
                                <div className="cart__product--quantity">
                                    <select value={`Qty: 3`} name="quantity" id="quantity">
                                        <option value="0" selected disabled>Qty</option>
                                        <option value="1">1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                    </select>
                                    <button className="delete-product">Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className="cart__product">
                            <input className="select-item" type="checkbox" />
                            <div className="cart__product--image-wrapper">
                                <img
                                    src="https://media.wired.com/photos/62a3a0ab9f83b5bb2aa0b416/master/w_1600%2Cc_limit/Casio-PRW-61-Gear.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="cart__product--details">
                                <div className="cart__product--header">
                                    <h5 className="cart__product--title">DEWALT 20V Max Cordless Drill / Driver Kit, Compact, 1/2-Inch (DCD771C2), Dewalt Yellow</h5>
                                    <p className="cart__product--price">$83.89</p>
                                </div>
                                <div className="cart__product--info">
                                    <div className="info-item">
                                        <p>Availability</p>
                                        <p>In Stock</p>
                                    </div>
                                    <div className="info-item">
                                        <p>Color</p>
                                        <p>Blue</p>
                                    </div>
                                </div>
                                <div className="cart__product--quantity">
                                    <select value={`Qty: 3`} name="quantity" id="quantity">
                                        <option value="0" selected disabled>Qty</option>
                                        <option value="1">1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                    </select>
                                    <button className="delete-product">Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className="cart__subtotal">Subtotal (2 items): <span>$145.99</span></div>
                    </div>
                    <div className="subtotal">
                        <div className="cart__subtotal">Subtotal (2 items): <span>$145.99</span></div>
                        <button className="proceed-btn btn">Proceed to checkout</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;