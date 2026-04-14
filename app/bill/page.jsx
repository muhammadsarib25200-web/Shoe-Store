'use client'
import { useStore } from '../context/StoreContext';
import "./bill.css";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Bill() {
  const { cart, getTotal, currentUser, removeFromCart } = useStore();
  const [bill, setBill] = useState(null);

  useEffect(() => {
    if (!currentUser) return;
    const total = getTotal();
    const items = cart.reduce((sum, item) => sum + item.quantity, 0);
    setBill({
      user: currentUser.email,
      items,
      total: total.toFixed(2),
      date: new Date().toLocaleString()
    });
  }, [cart, getTotal, currentUser]);

  if (!bill || bill.items === 0) {
    return <div><p>No cart items for bill.</p><Link href="/cart">Back to Cart</Link></div>;
  }

  return (
    <div className="bill-container" style={{maxWidth: '600px', margin: '2rem auto', padding: '2rem', border: '1px solid #ddd', borderRadius: '8px'}}>
      <h1>Order Bill</h1>
      <div className="bill-details">
        <p><strong>User:</strong> {bill.user}</p>
        <p><strong>Date:</strong> {bill.date}</p>
        <p><strong>Total Items:</strong> {bill.items}</p>
        <p><strong>Total Amount:</strong> ${bill.total}</p>
      </div>
      <div className="bill-items">
        <h3>Items:</h3>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.title} x {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      <button className="pay-now-btn" onClick={() => {
        cart.forEach(item => removeFromCart(item.id));
        alert('Payment successful! Cart cleared.');
      }}>Pay Now</button>
      <Link href="/product">Continue Shopping</Link>
    </div>
  );
}

