import React, { useEffect } from 'react';
import Meta from '../../components/Meta/Meta.jsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx';
import './Cart.css';
import { useDispatch, useSelector } from "react-redux";
import { getCart, removeFromCart } from '../../redux/user/userSlice.js';
import CartProduct from './CartProduct.jsx';
import { Link, useNavigate } from 'react-router-dom';

function Cart(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.auth?.cart);

    const getCartHandler = () => {
        dispatch(getCart());
    }

    const checkoutHandler = () => {
        fetch('http://localhost:5000/api/user/create-order', {
            method: "post",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            },
            body: JSON.stringify({
                products: cart.products
            })
        }).then(res => res.json())
            .then(({ url }) => window.location = url)
    }

    useEffect(() => {
        getCartHandler();
    }, [])

    const cartItemsCount = cart ? cart.products.reduce((acc, p) => acc += p.count, 0) : 0;

    return (
        <>
            <Meta title={"Shopping cart"} />
            <Breadcrumb title="Shopping cart" />
            <section className="cart collection">
                <div className="container">
                    <div className="cart__products">
                        {cart?.products?.length === 0 || !cart ? (
                            <div className="empty-cart">
                                <img src="/assets/images/empty-cart.png" alt='' />
                                <div className="empty-cart__desc">
                                    <h2 className="empty-cart__title">Your Storish cart is empty</h2>
                                    <Link to="/store" className="empty-cart__link">Shop today's deals</Link>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="cart__header">
                                    <h2 className="cart__title">Shopping Cart</h2>
                                    <p className="cart__price">Price</p>
                                </div>
                                {cart && cart?.products?.map(p => <CartProduct count={p.count} {...p.product} key={p?.product?._id} />)}
                                <div className="cart__subtotal">
                                    Subtotal ({cart && cartItemsCount} items):
                                    {" "}<span>${cart && cart.cartTotal}</span>
                                </div>
                            </>
                        )}
                    </div>
                    {cart?.products?.length === 0 || !cart ? (
                        <div className="secondary-details">
                            <h5>You Might Like</h5>
                        </div>
                    ) : (
                        <div className="secondary-details">
                            <div className="cart__subtotal">Subtotal ({cartItemsCount} items):
                                {" "}<span>${cart && cart.cartTotal}</span>
                            </div>
                            <button onClick={checkoutHandler} className="proceed-btn btn">Proceed to checkout</button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Cart;