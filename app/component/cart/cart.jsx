'use client'
import "./cart.css"
import { useStore } from '../../context/StoreContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotal, currentUser } = useStore();

  if (!currentUser) {
    return (
      <div className="cart-container">
        <h1 className="cart-title">Your Cart</h1>
        <p>Please <a href="/login">login</a> to view cart.</p>
      </div>
    );
  }

  return (
        <div className="cart-container">

            <h1 className="cart-title">Your Cart</h1>

            <div className="cart-content">

                {/* Cart Items */}
                <div className="cart-items">
                  {cart.length === 0 ? (
                    <p>No items in cart</p>
                  ) : (
                    cart.map((item) => (
                      <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} />
                        <div className="item-details">
                          <h3>{item.title}</h3>
                          <p>${item.price}</p>
                          <div className="quantity">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                          </div>
                        </div>
                        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                      </div>
                    ))
                  )}
                </div>

                {/* Summary */}
                <div className="cart-summary">
                    <h2>Order Summary</h2>
                    <p>Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
                    <p>Total Price: ${getTotal().toFixed(2)}</p>
                    <button className="checkout-btn" onClick={() => window.location.href = '/bill'}>Checkout</button>
                </div>

            </div>

        </div>
    )
}
