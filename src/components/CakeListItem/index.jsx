export default function CakeListItem({ cakeItem, handleAddToOrder }) {
    return (
        <div>
            <img src={cakeItem.image} alt="cake photo" style={{ width: '200px', height: '200px' }}/>
            <div>{cakeItem.name}</div>
            <div>${cakeItem.price.toFixed(2)}</div>
            <button onClick={() => handleAddToOrder(cakeItem._id)}>
                Add To Cart
            </button>
        </div>
    );
}