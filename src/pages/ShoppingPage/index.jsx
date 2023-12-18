import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import CakeList from '../../components/CakeList';
import CartList from '../../components/CartList';

export default function ShoppingPage({ user, setUser }) {
  const [cakeItems, setCakeItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const categoriesRef = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchData = async () => {
    try {
      const items = await itemsAPI.getAll();
      categoriesRef.current = ['All Cakes', ...new Set(items.map((item) => item.category.name))];
      setCakeItems(items);
      const params = new URLSearchParams(location.search);
      const categoryParam = params.get('category');
      setActiveCat(categoryParam || '');
    } catch (error) {
      console.error('Error fetching cake items:', error);
    }
  };

  const getCart = async () => {
    const cart = await ordersAPI.getCart();
    setCart(cart);
  };

  useEffect(() => {
    fetchData();
    getCart();
  }, [location.search]);

  const handleAddToOrder = async (itemId) => {
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    setCart(updatedCart);
  };

  const handleChangeQty = async (itemId, newQty) => {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  };

  const handleCheckout = async () => {
    await ordersAPI.checkout();
    navigate('/profile');
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const generateCategoryLinks = () =>
    categoriesRef.current.map((category) => (
        <Link to={category === 'All Cakes' ? '/shop' : `/shop?category=${encodeURIComponent(category)}`}>
          {category}
        </Link>
    ));

  const filteredCakeItems = cakeItems.filter((item) =>
    (!activeCat || item.category.name === activeCat) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>{generateCategoryLinks()}</div>
      <form>
        <input
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
      <CartList order={cart} handleChangeQty={handleChangeQty} handleCheckout={handleCheckout} />
    </div>
  );
}