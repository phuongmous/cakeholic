import CartItem from '../CartItem';
export default function CartModel ({ order, handleChangeQty, handleCheckOut }) {
    if (!order) return null;

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
                        onClick={handleCheckOut}
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