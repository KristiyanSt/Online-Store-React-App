import React, { useEffect, useState } from 'react';
import './Store.css';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx';
import Meta from '../../components/Meta/Meta.jsx';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/products/productSlice.js';

function Store(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [columns, setColumns] = useState(4);



    const dispatch = useDispatch();
    const getProducts = () => {
        dispatch(getAllProducts());
    }
    useEffect(() => {
        getProducts();
    },[])
    
    const products = useSelector((state) => state.product?.products);

    const changeGridColumns = (columns) => {
        setColumns(columns);
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const handleOptionClick = (option) => {
        console.log(`Selected option: ${option}`);
        closeDropdown();
    };
    return (
        <>
            <Meta title={'Store'} />
            <Breadcrumb title={'Store'} />
            <div className="store">
                <div className="result-info">
                    <p>1-24 of over 6,000 results for <span>"iphone 3"</span></p>
                    <div className="sort">
                        <div tabIndex="0" className="dropdown" onClick={toggleDropdown}>
                            <button className="dropdown__button" >
                                Sort by: Filtered
                            </button>
                            <img className="dropdown__icon" src="/assets/images/down-arrow-black.svg" alt="dropdown-icon" />

                            {isOpen && (
                                <ul className="dropdown__menu">
                                    <li className="dropdown__link" onClick={() => handleOptionClick('Option 1')}><Link>Option 1</Link></li>
                                    <li className="dropdown__link" onClick={() => handleOptionClick('Option 2')}><Link>Option 2</Link></li>
                                    <li className="dropdown__link" onClick={() => handleOptionClick('Option 3')}><Link>Option 3</Link></li>
                                </ul>
                            )}
                        </div>
                        <div className="menu-grid">
                            <img onClick={() => changeGridColumns(1)} src="/assets/images/menu-horizontal.svg" alt="menu-burger-horizontal" />
                            <img onClick={() => changeGridColumns(2)} src="/assets/images/menu-vertical-2.svg" alt="menu-burger-vertical-2" />
                            <img onClick={() => changeGridColumns(3)} src="/assets/images/menu-vertical-3.svg" alt="menu-burger-vertical-3" />
                            <img onClick={() => changeGridColumns(4)} src="/assets/images/menu-vertical-4.svg" alt="menu-burger-vertical-4" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="filters">
                        <div className="filter-card">
                            <h5 className="filter-card__title">Shop By Categories</h5>
                            <ul className="filter-card__options">
                                <li>Watches</li>
                                <li>TVs</li>
                                <li>Cameras</li>
                                <li>Laptops</li>
                            </ul>
                        </div>
                        <div className="filter-card">
                            <h5 className="filter-card__title">Price</h5>
                            <div className="price-form">
                                <div className="price-form-group">
                                    <input type="number" id="from-price" />
                                    <label htmlFor="from-price">From</label>
                                </div>
                                <div className="price-form-group">
                                    <input type="number" id="to-price" />
                                    <label htmlFor="to-price">To</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-container">
                        <h4 className="results-title">Results</h4>
                        <div
                            className="products-list"
                            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
                                {products && products?.map(p => <ProductCard columns={columns} {...p} key={p?._id}/>)}
                    </div>
                </div>
            </div>
        </div >
        </>
    );
}

export default Store;