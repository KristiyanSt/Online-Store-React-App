import React from 'react';
import './Breadcrumb.css';
import { Link } from 'react-router-dom';

function Breadcrumb(props) {
    const { title } = props;
    return (
        <div className="breadcrumb">
            <p className="breadcrumb__path">
                <Link to="/" >Home </Link>
                / {title}
            </p>
        </div>
    );
}

export default Breadcrumb;