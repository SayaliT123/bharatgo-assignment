import React from 'react';
import { useCart } from '../Context/CartContext';

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.title} - {item.price}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            {cart.length === 0 && <p>Your cart is empty.</p>}
        </div>
    );
};

export default Cart;