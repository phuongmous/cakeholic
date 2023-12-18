import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { getUser } from '../../utilities/users-service';

import ShoppingPage from '../ShoppingPage';
import AuthPage from '../AuthPage';
import OrderHistoryPage from '../OrderHistoryPage';
import NavBar from '../../components/NavBar';
import HomePage from '../HomePage';
import UserProfilePage from '../UserProfilePage';

import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={ user } setUser={ setUser } />
          <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/shop" element={ <ShoppingPage /> } />
            <Route path='/profile' element={ <UserProfilePage /> } />
            <Route path="/orders" element={ <OrderHistoryPage /> } />
          </Routes>
        </>
        :
        <AuthPage setUser={ setUser }/>
      }
    </main>
  );
}