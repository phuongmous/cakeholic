import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import CakeList from '../../components/CakeList';
import CategoryList from '../../components/CategoryList';
import CartModel from '../../components/CartModel';

export default function ShoppingPage ({ user, setUser}) {
    const [cakeItems, setCakeItems] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const [cart, setCart] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const categoriesRef = useRef([]);
    const navigate = useNavigate();

    useEffect(function() {
        async function getItems() {
          const items = await itemsAPI.getAll();
          categoriesRef.current = ['All Cakes', ...new Set(items.map(item => item.category.name))];
          setCakeItems(items);
          setActiveCat('');
        }
        getItems();

        // Load cart (a cart is the unpaid order for the logged in user)
        async function getCart() {
            const cart = await ordersAPI.getCart();
            setCart(cart);
          } 
          getCart();
    }, [])

    /*--- Event Handlers --- */
    async function handleAddToOrder(itemId) {
        const updatedCart = await ordersAPI.addItemToCart(itemId);
        setCart(updatedCart);
    }

    async function handleChangeQty(itemId, newQty) {
        const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
        setCart(updatedCart);
    }
    
    async function handleCheckout() {
        await ordersAPI.checkout();
        navigate('/orders');
    }

    const handleCategoryChange = (category) => {
        if (category === 'All Cakes') {
            setActiveCat('');
        } else {
            setActiveCat(category);
        }
      };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };
    
    const filteredCakeItems = cakeItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
      
    return (
        <div>
            <CategoryList
            categories={categoriesRef.current}
            activeCat={activeCat}
            setActiveCat={handleCategoryChange}
            />
            <form>
                <input
                placeholder='🔎 Search Cakes'
                type="text"
                id="search"
                name="search"
                value={searchTerm}
                onChange={handleSearch}
                />
            </form>
            <CakeList
            cakeItems={
                activeCat 
                ? 
                filteredCakeItems.filter(item => item.category.name === activeCat) 
                : 
                filteredCakeItems
            }
            handleAddToOrder={handleAddToOrder}
            />
            <CartModel
            order={ cart }
            handleChangeQty={ handleChangeQty }
            handleCheckout={ handleCheckout }
            />
        </div>
    );
}