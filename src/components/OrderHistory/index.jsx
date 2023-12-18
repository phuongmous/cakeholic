import React from 'react';
import OrderHistoryItem from '../OrderHistoryItem';

export default function OrderHistory ({orderHistory, activeOrder, setActiveOrder}) {
    return (
    <div>
      <h3>Order History</h3>
      {orderHistory && orderHistory.length > 0 ? ( // Add a check for orderHistory
        <div>
          {orderHistory.map((order) => (
            <OrderHistoryItem
              key={order._id}
              order={order}
              activeOrder={activeOrder}
              setActiveOrder={setActiveOrder}
            />
          ))}
        </div>
      ) : (
        <p>No order history available.</p>
      )}
    </div>
    )
}