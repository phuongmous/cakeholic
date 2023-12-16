import MenuListItem from '../MenuListItem';
export default function MenuList({ menuItems, handleAddToOrder }) {
    const items = menuItems.map(item =>
        <MenuListItem 
        key={item.id}
        menuItem={item}
        handleAddToOrder={ handleAddToOrder }
        />
        );
        return (
            <div>
                {items}
            </div>
        );
}