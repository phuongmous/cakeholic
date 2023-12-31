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
    // Function to fetch the user's cart
    const getCart = async () => {
        const fetchedCart = await ordersAPI.getCart();
        setCart(fetchedCart);
        console.log('CART', fetchedCart);
      };

    // useEffect to fetch the user's cart when the component mounts or cart is opened
    useEffect(() => {
        if (user) {
          getCart();
        }
      }, [user, isCartOpen]);
    
    // Function to handle quantity change for items in the cart
    const handleChangeQty = async (itemId, newQty) => {
        const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
        setCart(updatedCart);
      };
    
      // Function to handle checkout and navigate to the user's profile page
      const handleCheckout = async () => {
        await ordersAPI.checkout();
        navigate('/profile');
        setCart(null);
      };
    
      // Function to handle user logout
      const handleLogOut = () => {
        userService.logOut();
        setUser(null);
      };
    
      // Function to handle opening the cart
      const handleCartClick = () => {
        getCart()
        openCart();
      };
    
      // Function to handle closing the cart
      const handleCartClose = () => {
        closeCart();
      };

      // Variable to store the total item count in the cart
      const cartItemCount = cart ? cart.orderQty : 0;

      return (
        <div className="header sticky top-0 left-0 w-full sm:ml-0 sm:block bg-white z-20">
            <div className="flex items-center justify-between bg-purple md:px-10 py-4">
                <div className="flex flex-wrap md:space-x-4">
                    <Link to="/" className="text-black transition-transform transform hover:scale-110 hover:text-cadetblue rounded-md md:px-3 p-2 text-xl font-medium ">Home</Link>
                    <Link to="/shop" className="text-black transition-transform transform hover:scale-110 hover:text-cadetblue rounded-md md:px-2 p-2 text-xl font-medium">Shop</Link> 
                </div>
                
                <h1 className="text-3xl md:text-5xl l text-black font-rubik">CAKEHOLIC</h1> 
                    {' '}

                <div className="flex md:space-x-4">
                    {user ? (
                    <>
                        <Link to="/profile" className="text-black transition-transform transform hover:scale-110 hover:text-cadetblue rounded-md px-3 py-2 text-2xl font-medium">
                            {/* User profile icon */}
                            <LuUserCircle2 /> 
                        </Link> {' '}
                        {/* Cart icon */}
                        <div className=" transition-transform hover:text-cadetblue  flex flex-col items-end ">
                        <span className="absolute top-7 sm:top-[0.5rem] md:top-[0.5rem] right-9 md:right-[5.5rem] bg-black text-white rounded-full px-2 py-1 text-xs">
                            {cartItemCount}
                        </span>
                        <BsCart4 
                        style={{ fontSize: '1.7em', cursor: 'pointer', marginTop: '5px'}}
                        onClick={handleCartClick}
                        />
                        </div>
                        <Link to="/"  onClick={handleLogOut} className="text-black transition-transform transform hover:scale-110 hover:text-cadetblue rounded-md px-3 py-2 text-2xl font-medium">
                        <LuLogOut />
                        </Link>
                    </>
                    ) : (
                        <Link to="/login" className="text-black transition-transform transform hover:scale-110 hover:text-cadetblue rounded-md px-3 py-2 text-2xl font-medium"><LuLogIn /></Link>
                    )}
                </div>
            </div>
            {/* Display the cart list if the cart is open */}
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