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
            <div className="mx-5 sm:mx-32 rounded pt-5 px-2 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {items}
                </div>
            </div>
        );
}