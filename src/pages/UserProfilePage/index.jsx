import React, { useState, useEffect } from 'react';
import UserInfo from '../../components/UserInfo';
import OrderHistory from '../../components/OrderHistory';
import * as ordersAPI from '../../utilities/orders-api';
import backgroundImage from '../../images/profile-background.jpg';

export default function UserProfilePage({user, order}) {
  // State to store user's order history
  const [orderHistory, setOrderHistory] = useState([]);

  // useEffect to fetch the user's order history when the component mounts
  useEffect(() => {

    // Function to fetch the user's order history
    const fetchOrderHistory = async () => {
      try {
        const orders = await ordersAPI.orderHistory();
        setOrderHistory(orders);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };
    fetchOrderHistory();
  }, []);

  return (
    <div >
      <div className="bg-cover bg-center backdrop-blur" style={{ backgroundImage: `url(${backgroundImage})` }} >
        <UserInfo user={user} />
        <OrderHistory 
        orderHistory={orderHistory} 
        order={order} 
        />
      </div>
    </div>
  );
}