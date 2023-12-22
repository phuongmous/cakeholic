import React from 'react';

// OrderHistoryItem component to display individual order details
export default function OrderHistoryItem ({ order }) {
    // Destructure order object to access its properties
    const { orderId, updatedAt, orderTotal, orderQty, cartItems } = order;
    // Log cart items to the console for debugging
    console.log('Cart Items:', cartItems);
    return (
        <div className="flex justify-between p-4 border rounded shadow-md mx-6 sm:mx-[10rem] md:mx-[20rem] bg-gray-50 bg-opacity-95">
            <div className="text-cadetblue">
                <div>Order Id: <span className="smaller">{ orderId }</span></div>
                <div>Date: { new Date(updatedAt).toLocaleDateString() }</div>
            </div>
            <div>
                <div>Total: ${ orderTotal.toFixed(2) }</div>
                <div>{ orderQty } Items:</div>
                {cartItems.map(cartItem => (
                    <div>
                        <img src={cartItem.item.image} alt="cake photo" className="w-12 h-12 object-cover rounded mx-auto"/>
                        <div>{cartItem.item.name}</div>
                        <div>${cartItem.item.price.toFixed(2)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};