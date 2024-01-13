import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx';
import Meta from '../../components/Meta/Meta.jsx';
import './Store.css';

function Store(props) {
    return (
        <>
            <Meta title={'Store'}/>
            <Breadcrumb title={'Store'} />
            <div className="store">
                <div className="container">
                    <div className="filters">
                        <div className="filter-card">
                            <h5>Shop By Categories</h5>
                            <ul>
                                <li>Watches</li>
                                <li>TVs</li>
                                <li>Cameras</li>
                                <li>Laptops</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Store;