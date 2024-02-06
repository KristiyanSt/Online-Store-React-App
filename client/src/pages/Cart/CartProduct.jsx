import React from 'react';
import './Cart.css'
function CartProduct({
    images,
    title,
    price,
    quantity,
    color,
    count
}) {
    return (
        <div className="cart__product">
            <input className="select-item" type="checkbox" />
            <div className="cart__product--image-wrapper">
                <img
                    src={images[0].url}
                    alt=""
                />
            </div>
            <div className="cart__product--details">
                <div className="cart__product--header">
                    <h5 className="cart__product--title">
                        {title}
                    </h5>
                    <p className="cart__product--price">
                        ${price}
                        </p>
                </div>
                <div className="cart__product--info">
                    <div className="info-item">
                        <p>Availability</p>
                        <p>{quantity <= 0 ? "Out of Stock" : "In Stock"}</p>
                    </div>
                    <div className="info-item">
                        <p>Color</p>
                        <p>{color}</p>
                    </div>
                </div>
                <div className="cart__product--quantity">
                    <select value={`Qty: 3`} name="quantity" id="quantity">
                        <option value="0" selected disabled>Qty</option>
                        <option value="1">1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                    </select>
                    <button className="delete-product">Remove</button>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;