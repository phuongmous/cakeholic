import CakeListItem from '../CakeListItem';
export default function CakeList({ cakeItems, handleAddToOrder }) {
    const items = cakeItems.map(item =>
        <CakeListItem 
        key={item.id}
        cakeItem={item}
        handleAddToOrder={ handleAddToOrder }
        />
        );
        return (
            <div>
                {items}
            </div>
        );
}