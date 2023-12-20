import React, { useState, useEffect } from 'react';
import UserInfo from '../../components/UserInfo';
import OrderHistory from '../../components/OrderHistory';
import * as ordersAPI from '../../utilities/orders-api';
import backgroundImage from '../../images/cake-background.jpeg';

export default function UserProfilePage({user, order}) {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    // Fetch order history
    const fetchOrderHistory = async () => {
      try {
        const orders = await ordersAPI.orderHistory();
        console.log('ORDER', orders);
        setOrderHistory(orders);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };
    fetchOrderHistory();
  }, []);

  return (
    <div className="bg-cover bg-center mb-10 backdrop-blur" style={{ backgroundImage: `url(${backgroundImage})` }} >
      <UserInfo user={user} />
      <OrderHistory 
      orderHistory={orderHistory} 
      order={order} 
      />
    </div>
  );
}