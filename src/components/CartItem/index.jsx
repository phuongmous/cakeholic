export default function CartItem({ cartItem,  isPaid, handleChangeQty}) {
    return (
        <div>
            <img src={cartItem.item.image} alt="cake photo" style={{ width: '50px', height: '50px' }}/>
            <div>{cartItem.item.name}</div>
            <div>${cartItem.item.price.toFixed(2)}</div>
            <div>
                {!isPaid && 
                    <button
                        onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty -1)}
                    >-</button>
                }
                <span>{cartItem.qty}</span>
                {!isPaid && 
                    <button
                        onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty +1)}
                    >+</button>
                }
                <div className="ext-price">${cartItem.extPrice.toFixed(2)}</div>
            </div>
        </div>

    );
}