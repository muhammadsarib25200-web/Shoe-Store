'use client'
import React from 'react';
import "./product.css";
import ProductCard from "../component/productCard/productCard";
import { GiSlippers } from "react-icons/gi";
import { useStore } from "../context/StoreContext";
export default function Page()
 {  const { products } = useStore();
   return (
   <div className="main-cont">  
 <div className="shoe-store">
     <h1 className="shoe-store-text">Welcome To Shoe Store</h1>
            <p className="shoe-store-subtitle">Explore our product cards to find the perfect fit for your style. </p>
           </div>   
           <div className="product-grid"> 
{products.length === 0 ? (
            <p style={{gridColumn: '1/-1', textAlign: 'center', padding: '2rem', color: '#666'}}>
              No products available at the moment. Please check back later!
            </p>
          ) : (
            products.map((product) => (
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
                 </div>)};
