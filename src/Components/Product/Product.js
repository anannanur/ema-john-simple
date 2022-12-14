import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {

    const { handleAddToCart, product } = props;
    const { img, name, price, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Ratings : {ratings} stars</p>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(product)}>Add to Cart  <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;