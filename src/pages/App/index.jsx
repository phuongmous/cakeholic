import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { getUser } from '../../utilities/users-service';

import Header from '../../components/Header';
import HomePage from '../HomePage';
import ShoppingPage from '../ShoppingPage';
import UserProfilePage from '../UserProfilePage';
import AuthPage from '../AuthPage';
import Footer from '../../components/Footer';

import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="flex flex-col min-h-screen">
      <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShoppingPage user={user} setUser={setUser}/>} />
          {user ? (
            <Route path="/profile" element={<UserProfilePage user={user} setUser={setUser}/>} />
          ) : (
            <Route path="/login" element={<AuthPage setUser={setUser} />} />
          )}
        </Routes>
      <Footer />
    </main>
  );
}