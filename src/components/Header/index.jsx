import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import * as userService from '../../utilities/users-service';
import * as ordersAPI from '../../utilities/orders-api';
import { LuUserCircle2, LuLogOut, LuLogIn } from "react-icons/lu";
import { BsCart4 } from "react-icons/bs";
import CartList from '../CartList';
import { useCart } from '../CartContext';

export default function Header ({user, setUser}) {
    const navigate = useNavigate();
    const [cart, setCart] = useState(null);
    const { isCartOpen, openCart, closeCart } = useCart();
    const getCart = async () => {
        const fetchedCart = await ordersAPI.getCart();
        setCart(fetchedCart);
        console.log('CART', fetchedCart);
      };
    useEffect(() => {
        if (user) {
          getCart();
        }
      }, [user, isCartOpen]);

    const handleChangeQty = async (itemId, newQty) => {
        const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
        setCart(updatedCart);
      };
    
    const handleCheckout = async () => {
        await ordersAPI.checkout();
        navigate('/profile');
      };

    const handleLogOut = () => {
        userService.logOut();
        setUser(null);
      };

    const handleCartClick = () => {
        getCart()
        openCart();
      };
    
    const handleCartClose = () => {
        closeCart();
      };

    const cartItemCount = cart ? cart.orderQty : 0;

      return (
        <div className="header fixed top-0 left-0 w-full sm:ml-0 sm:block bg-yellow z-20">
            <div className="flex items-center justify-between bg-purple md:px-10 py-4">
                <div className="flex md:space-x-4">
                    <Link to="/" className="text-black hover:bg-yellow-1 hover:text-white rounded-md px-3 py-2 text-xl font-medium ">Home</Link>
                    <Link to="/shop" className="text-black hover:bg-yellow-1 hover:text-white rounded-md px-2 py-2 text-xl font-medium">Shop</Link> 
                </div>
                
                <h1 className="text-3xl md:text-5xl l text-black font-rubik">CAKEHOLIC</h1> 
                    {' '}

                <div className="flex md:space-x-4">
                    {user ? (
                    <>
                        <Link to="/profile" className="text-black hover:bg-yellow-1 hover:text-white rounded-md px-3 py-2 text-2xl font-medium">
                            {/* User profile icon */}
                            <LuUserCircle2 /> 
                        </Link> {' '}
                        {/* Cart icon */}
                        <div>
                        <BsCart4 onClick={handleCartClick}/>
                        <span>{cartItemCount}</span>
                        </div>
                        <Link to="/"  onClick={handleLogOut} className="text-black hover:bg-yellow-1 hover:text-white rounded-md px-3 py-2 text-2xl font-medium">
                        <LuLogOut />
                        </Link>
                    </>
                    ) : (
                        <Link to="/login" className="text-black hover:bg-yellow-1 hover:text-white rounded-md px-3 py-2 text-2xl font-medium"><LuLogIn /></Link>
                    )}
                </div>
            </div>
            {isCartOpen && (
        <div className="fixed top-0 right-0 h-full w-full bg-gray-800 bg-opacity-75 z-30">
          <div className="absolute top-0 right-0 m-4">
            <CartList order={cart} handleChangeQty={handleChangeQty} handleCheckout={handleCheckout}/>
          </div>
        </div>
      )}
        </div>
      );
    }