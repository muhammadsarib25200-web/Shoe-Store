'use client'
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useStore } from '../../context/StoreContext';


export default function ProductDetail() {
  const params = useParams();
  const id = params?.id;
  const { getProductById, addToCart, currentUser } = useStore();
  const product = id ? getProductById(id) : null;

  const handleAddToCart = () => {
    if (!currentUser) {
      alert('Please login first');
      return;
    }
    addToCart(product);
    alert('Added to cart!');
  };

  if (!product) {
    return <div>Product not found. <Link href="/product">Back to products</Link></div>;
  }

  return (
    <div className="main-cont">
      <div className="product-detail">
        <Link href="/product" className="back-link"> Back to Products </Link>
        <div className="detail-grid">
          <div className="detail-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="detail-content">
            <h1 className="detail-title">{product.title}</h1>
            <p className="detail-description">{product.description}</p>
            <div className="detail-price">{product.price}</div>
            <button className="add-to-cart-detail" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

