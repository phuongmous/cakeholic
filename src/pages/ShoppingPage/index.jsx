import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import CakeList from '../../components/CakeList';
import { useCart } from '../../components/CartContext';
import backgroundImage from '../../images/background-image-1.jpg';
import collectionBackground from '../../images/collection-background.jpg';
export default function ShoppingPage({ user, setUser }) {
  const [cakeItems, setCakeItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  // Reference for categories to generate links
  const categoriesRef = useRef([]);
  const navigate = useNavigate();
  // Location hook to get current URL location
  const location = useLocation();
  // Custom hook to access cart-related functionality
  const { openCart } = useCart();

  // Fetch cake items and set initial state
  const fetchData = async () => {
    try {
      const items = await itemsAPI.getAll();

      // Set categories including 'All-Cakes'
      categoriesRef.current = ['All-Cakes', ...new Set(items.map((item) => item.category.name))];

      // Set cake items and active category based on URL parameter
      setCakeItems(items);
      const params = new URLSearchParams(location.search);
      const categoryParam = params.get('category');
      setActiveCat(categoryParam || '');
    } catch (error) {
      console.error('Error fetching cake items:', error);
    }
  };

  // Fetch user's cart on component mount and when URL changes
  const getCart = async () => {
    const cart = await ordersAPI.getCart();
    setCart(cart);
  };

  useEffect(() => {
    fetchData();
    // Fetch user's cart if user is authenticated
    if (user) {
    getCart();
    }
  }, [location.search, user]);

  // Add item to cart and open cart if user is authenticated; otherwise, redirect to login
  const handleAddToOrder = async (itemId) => {
    try {
    if (user) {
      // Add item to the cart
      const updatedCart = await ordersAPI.addItemToCart(itemId);
      // Update cart state and open the cart
      setCart(updatedCart);
      openCart();
    } else {
      // Redirect to login page if the user is not authenticated
      navigate('/login');
    }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
    
  };

  // Handle search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Generate category links for navigation
  const generateCategoryLinks = () =>
    categoriesRef.current.map((category) => (
        <Link to={category === 'All-Cakes' ? '/shop' : `/shop?category=${encodeURIComponent(category)}`}>
          {category}
        </Link>
    ));
  
  // Filter cake items based on active category and search term
  const filteredCakeItems = cakeItems.filter((item) =>
    (!activeCat || item.category.name === activeCat) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="max-w-auto mx-auto relative">
      <img src={collectionBackground} alt="Collection Background" className="w-full h-[30rem] object-cover" />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
        {activeCat || 'All-Cakes'}
      </h1>
      </div>
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-col">
        <div className="flex flex-wrap my-8 space-x-3 sm:space-x-6 justify-center text-md sm:text-xl font-bold">
          {generateCategoryLinks().map((link, index) => (
            <a
              key={index}
              className="transition-transform transform hover:scale-110 hover:text-cadetblue"
            >
            {link}
            </a>
          ))}
        </div>
        <form className="mb-8">
          <input
            className="border border-black px-8 sm:px-40 py-2 rounded"
            placeholder='🔎 Search Cakes'
            type='text'
            id='search'
            name='search'
            value={searchTerm}
            onChange={handleSearch}
          />
        </form>
        <CakeList 
          cakeItems={
            activeCat
              ? filteredCakeItems.filter((item) => item.category.name === activeCat)
              : filteredCakeItems
          }
          handleAddToOrder={handleAddToOrder}
        />
        </div>
      </div>
    </div>
  );
}