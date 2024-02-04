import React, { useEffect } from 'react';
import './Wishlist.css';
import Meta from '../../components/Meta/Meta.jsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWishlist } from '../../redux/user/userSlice.js';
import { addToWishlist } from '../../redux/products/productSlice.js';


function Wishlist(props) {

    const dispatch = useDispatch();
    
    const getWishlist = () => {
        dispatch(getUserWishlist());
    }
    const removeFromWishlist = (productId) => {
        dispatch(addToWishlist(productId));
        dispatch(getUserWishlist()); //TODO fix api endpoint to point at user controller
    }
    useEffect(() => {
        getWishlist();
    }, []);

    const wishlist = useSelector(state => state.auth.wishlist?.wishlist);

    return (
        <>
            <Meta title={"Wishlist"} />
            <Breadcrumb title="Wishlist" />
            <div className="wishlist">
                <div className="container">
                    {wishlist?.map(p => 
                        <div className="wishlist-card" key={p._id}>
                        <img onClick={() => removeFromWishlist(p._id)} className="close-btn" src="/assets/images/cross.png" alt="cross" />
                        <div className="image__wrapper">
                            <img src={p.images[0].url} alt="watch" />
                        </div>
                        <div className="wishlist-card__header">
                            <h5 className="wishlist-card__title">
                                {p.title}
                            </h5>
                            <p className="wishlist-card__price">${p.price}</p>
                        </div>
                    </div>)}
                </div>
            </div>
        </>
    );
}

export default Wishlist;