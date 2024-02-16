import React, { useState } from 'react';
import './Cart.css'
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from '../../redux/user/userSlice.js';
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown.jsx';
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
    const [selectedQuantity, setSelectedQuantity] = useState(count);

    const updateQuantityInCart = (productData) => {
        dispatch(addToCart(productData))
    }

    const handleSelectedQuantity = (quantityValue) => {
        setSelectedQuantity(quantityValue);
        updateQuantityInCart({ count: quantityValue, productId: _id });
    }
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId))
    }

    return (
        <div className="cart__product">
            <input className="select-item" type="checkbox" />
            <div className="cart__product--image-wrapper">
                <img
                    src={images[0]?.url}
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
                    <CustomDropdown
                        title={'Qty'}
                        selected={selectedQuantity}
                        options={Array.from({ length: quantity }).map((x, index) => index + 1)}
                        handleOption={handleSelectedQuantity}
                    />
                    <button onClick={() => removeFromCartHandler(_id)} className="delete-product">Remove</button>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;