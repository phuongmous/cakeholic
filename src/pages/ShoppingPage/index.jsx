import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import MenuList from '../../components/MenuList';
import CategoryList from '../../components/CategoryList';

const ShoppingPage = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const categoriesRef = useRef([]);

    useEffect(function() {
        async function getItems() {
          const items = await itemsAPI.getAll();
          categoriesRef.current = ['All Cakes', ...new Set(items.map(item => item.category.name))];
          setMenuItems(items);
          setActiveCat('');
        }
        getItems();
    }, [])

    /*--- Event Handlers --- */

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
    
    const filteredMenuItems = menuItems.filter(item =>
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
            <MenuList
            menuItems={
                activeCat 
                ? 
                filteredMenuItems.filter(item => item.category.name === activeCat) 
                : 
                filteredMenuItems
            }
            handleAddToOrder={handleAddToOrder}
            />
        </div>
    );
}

export default ShoppingPage;