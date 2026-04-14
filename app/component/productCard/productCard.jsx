"use client";
import "./productCard.css";
import { useStore } from '../../context/StoreContext';
import Link from 'next/link';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export default function ProductCard({ title, price, description, badge, image, id = Date.now() }) {
  const { addToCart, currentUser, wishlist, addToWishlist } = useStore();

  const isInWishlist = wishlist.some((item) => item.id === id);
  const productData = { id, title, price, image, description };

  const handleAddToCart = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!currentUser) {
      alert('Please login first');
      return;
    }
    addToCart({ id: id || Date.now(), title, price: parseFloat(String(price).replace(/[^\d.]/g, '')), image, description });

  };

  return (
    <Link href={`/product/${id}`} className="product-card-link">
      <article className="product-card">
        {/* {badge ? <span className=\"product-card-badge\">{badge}</span> : null} */}
        <div className="product-card-image">
          {image ? (
            <img src={image} alt={title} />
          ) : (
            <div className="product-card-image-placeholder">{title.charAt(0)}</div>
          )}
        </div>
        <div className="product-card-content">
          <h2 className="product-card-title">{title}</h2>
          <p>{description}</p>
          <div className="product-card-footer">
            <span className="product-card-price">{price}</span>
            <button 
              className="wishlist-btn" 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToWishlist(productData);
              }}
              title={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
            >
              {isInWishlist ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
            <button className="product-card-button" onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
}

