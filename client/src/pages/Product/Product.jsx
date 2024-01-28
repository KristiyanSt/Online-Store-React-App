import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import { Rating } from 'react-simple-star-rating';
import './Product.css';

function Product(props) {

    const [hasOrdered, setHasOrdered] = useState(true);

    return (
        <>
            <section className="description collection">
                <div className="container">
                    <div className="header">
                        <h4 className="collection__title">
                            Description
                        </h4>
                    </div>
                    <p className="description__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit, nulla, rerum, exercitationem asperiores distinctio deserunt cum natus quod omnis ex pariatur suscipit. Perspiciatis tempora est molestiae harum, impedit autem!
                    </p>
                </div>
            </section>
            <section className="reviews collection">
                <div className="container">
                    <div className="header">
                        <h4 className="collection__title">
                            Customer reviews
                        </h4>
                    </div>
                    <div className="total-rating">
                        <Rating
                            allowFraction
                            size={20}
                            initialValue={4}
                        />
                        <p className="total-ratins__text">Based on 23 reviews</p>
                        {
                            hasOrdered && (
                                <p className="create-review-link">Write a review</p>
                            )
                        }
                    </div>
                </div>
            </section>
            <section className="featured-collection collection">
                <div className="container">
                    <div className="header">
                        <h4 className="collection__title">
                            Popular products
                        </h4>
                    </div>
                    <div className="products__wrapper">
                        {Array.from({ length: 5 }).map((x, index) => <ProductCard key={index} />)}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Product;