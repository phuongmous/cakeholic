import CartItem from '../CartItem';
import { useCart } from '../../components/CartContext';
export default function CartList ({ order, handleChangeQty, handleCheckout }) {
    if (!order) return null;
    const { closeCart } = useCart();
    const handleClose = () => {
        closeCart();
      };
    const cartItems = order.cartItems.map(item =>
        <CartItem 
            cartItem={item}
            isPaid={order.isPaid}
            handleChangeQty={handleChangeQty}
            key={item._id}
        />
    );

    return (
        <div className="p-4 bg-yellow rounded max-h-[51rem] sm:max-h-[46rem] overflow-y-auto">
            <div className="flex flex-col items-center mb-4">
                <button 
                className="bg-black text-yellow px-2 ml-0 mr-4 rounded-full text-xl self-start transition-transform transform hover:scale-110" 
                onClick={handleClose}>
                    X
                </button>
                <div className="text-3xl font-extrabold">
                {order.isPaid ?
                <span>ORDER <span>{order.orderId}</span></span>
                :
                <span>NEW ORDER</span>
                }
                </div>
                <div className="text-md mt-2">
                <span>Date: {new Date(order.updatedAt).toLocaleDateString()}</span>
                </div>
            </div>

            <div>
            {cartItems.length ?
            <> 
            <div className="mb-4">{cartItems}</div>
            <section className="flex items-center justify-between mx-6">
                {
                    order.isPaid ?
                    <span>TOTAL&nbsp;&nbsp;</span>
                    :
                    <button
                        className="bg-black text-yellow py-1 px-5 rounded transition-transform transform hover:scale-110"
                        onClick={() => {
                            handleCheckout();
                            handleClose();
                        }}
                        disabled={!cartItems.length}
                    >CHECKOUT</button>
                }
                <span>{order.totalQty}</span>
                <span className="text-xl">${order.orderTotal.toFixed(2)}</span>
            </section>
            </>
            :
            <div>Shopping cart is empty</div>
            }
            </div>
        </div>
    );
}