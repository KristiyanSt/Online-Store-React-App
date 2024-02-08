import React from 'react';
import './Cart.css'
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from '../../redux/user/userSlice.js';
function CartProduct({
    _id,
    images,
    title,
    price,
    quantity,
    color,
    count
}) {
    const dispatch = useDispatch();
    
    const removeFromCartHandler =  (productId) => {
        dispatch(removeFromCart(productId))
    }

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
                    <button onClick={() => removeFromCartHandler(_id)}className="delete-product">Remove</button>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;