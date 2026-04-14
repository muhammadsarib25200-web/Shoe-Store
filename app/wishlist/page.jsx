'use client'
import React from 'react';
import ProductCard from "../component/productCard/productCard";
import { useStore } from "../context/StoreContext";
import { useSearchParams } from "next/navigation";

export default function WishlistPage() {
  const { wishlist, products } = useStore();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  const filteredWishlist = wishlist.filter(product => 
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main-cont">  
      <div className="shoe-store">
        <h1 className="shoe-store-text">Your Wishlist ({filteredWishlist.length})</h1>
        {search && <p className="shoe-store-subtitle">Showing results for "{search}"</p>}
        {!search && <p className="shoe-store-subtitle">Your saved favorite shoes.</p>}
      </div>   
      <div className="product-grid"> 
        {filteredWishlist.length === 0 ? (
          <p style={{gridColumn: "1/-1", textAlign: "center", padding: "2rem", color: "#666"}}>
            {search ? `No wishlist items matching "${search}".` : "No items in wishlist. Add some favorites from shop!"}
          </p>
        ) : (
          filteredWishlist.map((product) => (
            <ProductCard 
              key={product.id}  
              image={product.image}   
              title={product.title}
              price={product.price}
              description={product.description}
              id={product.id} 
            />
          ))
        )}
      </div>
    </div>
  );
}
