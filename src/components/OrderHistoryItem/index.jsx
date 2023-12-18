import React from 'react';

export default function OrderHistoryItem ({ order }) {
    const { orderId, updatedAt, orderTotal, orderQty, cartItems } = order;
    console.log('Cart Items:', cartItems);
    return (
        <div >
            <div>
                <div>Order Id: <span className="smaller">{ orderId }</span></div>
                <div>Date: { new Date(updatedAt).toLocaleDateString() }</div>
            </div>
            <div>
                <div>Total: ${ orderTotal.toFixed(2) }</div>
                <div>{ orderQty } Items:</div>
                {cartItems.map(cartItem => (
                    <div>
                    <img src={cartItem.item.image} alt="cake photo" style={{ width: '50px', height: '50px' }}/>
                    <div>{cartItem.item.name}</div>
                    <div>${cartItem.item.price.toFixed(2)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};