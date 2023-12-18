import React from 'react';

export default function OrderHistoryItem ({ order, activeOrder, setActiveOrder }) {
    const { _id, orderId, updatedAt, orderTotal, orderQty, cartItems } = order;
    console.log('Cart Items:', cartItems);
    return (
        <div onClick={() => setActiveOrder(_id)} className={ _id === activeOrder ? 'OrderHistoryItem selected' : 'OrderHistoryItem' }>
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