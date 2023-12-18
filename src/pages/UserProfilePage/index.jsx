import React, { useState, useEffect } from 'react';
import UserInfo from '../../components/UserInfo';
import OrderHistory from '../../components/OrderHistory';
import * as userAPI from '../../utilities/users-api';
import * as ordersAPI from '../../utilities/orders-api';

export default function UserProfilePage({order, activeOrder, setActiveOrder}) {
  const [user, setUser] = useState(null);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    // Fetch user information
    const fetchUserData = async () => {
      try {
        const userData = await userAPI.getUserInfo();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

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

    fetchUserData();
    fetchOrderHistory();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo user={user} />
      <OrderHistory 
      orderHistory={orderHistory} 
      order={order} 
      activeOrder={activeOrder}
      setActiveOrder={setActiveOrder}
      />
    </div>
  );
}