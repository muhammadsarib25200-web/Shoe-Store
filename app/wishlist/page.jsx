"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../component/productCard/productCard";
import { useStore } from "../context/StoreContext";
import { useSearchParams } from "next/navigation";

// Wishlist page removed and replaced with /contact
// Wishlist functionality preserved in context for product cards/hearts
export default function RemovedPage() {
  return (
    <div style={{padding: '2rem', textAlign: 'center'}}>
      <h1>Page Moved</h1>
      <p>This page has been replaced. Visit <a href="/contact">Contact</a> instead.</p>
    </div>
  );
}

