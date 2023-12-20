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
        <div>
            <div className="section-heading">
            <button onClick={handleClose}>Close X</button>
                {order.isPaid ?
                <span>ORDER <span className="smaller">{order.orderId}</span></span>
                :
                <span>NEW ORDER</span>
                }
                <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
            </div>

            <div>
            {cartItems.length ?
            <> 
            {cartItems}
            <section>
                {
                    order.isPaid ?
                    <span>TOTAL&nbsp;&nbsp;</span>
                    :
                    <button
                        onClick={handleCheckout}
                        disabled={!cartItems.length}
                    >CHECKOUT</button>
                }
                <span>{order.totalQty}</span>
                <span>${order.orderTotal.toFixed(2)}</span>
            </section>
            </>
            :
            <div>Shopping cart is empty</div>
            }
            </div>
        </div>
    );
}