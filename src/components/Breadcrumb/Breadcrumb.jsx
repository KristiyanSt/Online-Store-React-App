import React from 'react';
import './Breadcrumb.css';
import { Link } from 'react-router-dom';

function Breadcrumb(props) {
    const { title } = props;
    return (
        <div className="breadcrumb">
            <div className="container">
                <p>
                    <Link to="/" >Home </Link>
                    / {title}
                </p>
            </div>
        </div>
    );
}

export default Breadcrumb;