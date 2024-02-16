import React, { useEffect, useState } from 'react';
import './Store.css';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx';
import Meta from '../../components/Meta/Meta.jsx';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/products/productSlice.js';
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown.jsx';

const FILTERS = ["Price: low to high", "Price: high to low", "Best Sellers", "Featured"];

function Store(props) {
    const [columns, setColumns] = useState(4);
    const [selectedFilter, setSelectedFilter] = useState("Best Sellers");

    const dispatch = useDispatch();
    const getProducts = () => {
        dispatch(getAllProducts());
    }
    useEffect(() => {
        getProducts();
    }, [])

    const products = useSelector((state) => state.product?.products);

    const changeGridColumns = (columns) => {
        setColumns(columns);
    }


    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };
    return (
        <>
            <Meta title={'Store'} />
            <Breadcrumb title={'Store'} />
            <div className="store">
                <div className="result-info">
                    <p>1-24 of over 6,000 results for <span>"iphone 3"</span></p>
                    <div className="sort">
                        <CustomDropdown
                            title={`Sort by`}
                            selected={selectedFilter}
                            options={FILTERS}
                            handleOption={handleFilterClick}
                        />
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
                            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
                            {products && products?.map(p => <ProductCard columns={columns} {...p} key={p?._id} />)}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Store;