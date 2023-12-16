export default function MenuListItem({ menuItem, handleAddToOrder }) {
    return (
        <div>
            <img src={menuItem.image} alt="cake photo" style={{ width: '200px', height: '200px' }}/>
            <div>{menuItem.name}</div>
            <div>${menuItem.price.toFixed(2)}</div>
            <Button onClick={() => handleAddToOrder(menuItem._id)}>
                Add To Cart
            </Button>
        </div>
    );
}