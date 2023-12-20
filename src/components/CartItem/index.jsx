export default function CartItem({ cartItem,  isPaid, handleChangeQty}) {
    return (
        <div className="flex flex-col items-center space-y-2 font-bold mb-6">
            <img 
            className="rounded w-24 h-24 object-cover transition-transform transform hover:scale-110" 
            src={cartItem.item.image} 
            alt="cake photo"
            />
            <div>{cartItem.item.name}</div>
            <div>Price: ${cartItem.item.price.toFixed(2)}</div>
            <div className="flex items-center">
                {!isPaid && 
                    <button
                        className="bg-black text-yellow px-2 rounded-full mr-2 transition-transform transform hover:scale-110"
                        onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty -1)}
                    >-</button>
                }
                <span className="text-md">{cartItem.qty}</span>
                {!isPaid && 
                    <button
                        className="bg-black text-yellow px-2 rounded-full ml-2 transition-transform transform hover:scale-110"
                        onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty +1)}
                    >+</button>
                }
            </div>
            <div className="ext-price">Total: ${cartItem.extPrice.toFixed(2)}</div>
        </div>

    );
}