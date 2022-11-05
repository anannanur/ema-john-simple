import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity
        total = total + (product.price)*(product.quantity);
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * (10/100)).toFixed(2))
    const grandTotal = total + shipping + tax;
    return (
        <>
            <h1>Order Summery</h1>
            <p>Selected Products: {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Charge : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <p><b>Grand Total : {grandTotal.toFixed(2)}</b></p>
        </>
    );
};

export default Cart;