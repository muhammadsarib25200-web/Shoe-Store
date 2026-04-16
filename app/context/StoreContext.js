"use client";

import { createContext, useContext, useState, useEffect } from "react";

const StoreContext = createContext();

const defaultProducts = [
  {
    id: 1,
    image: "/assets/shoe1.avif",
    title: "Nike Air Max Runner",
    price: "$89.99",
    description: "Lightweight running shoes with max cushioning.",
  },
  {
    id: 2,
    image: "/assets/shoe2.avif",
    title: "Adidas Ultraboost",
    price: "$124.99",
    description: "Premium boost technology for energy return.",
  },
  {
    id: 3,
    image: "/assets/shoe3.avif",
    title: "Puma RS-X",
    price: "$99.99",
    description: "Retro-futuristic sneakers with bold design. ",
  },
  {
    id: 4,
    image: "/assets/shoe4.avif",
    title: "Reebok Classic Leather",
    price: "$79.99",
    description: "Timeless casual leather sneakers.",
  },
  {
    id: 5,
    image: "/assets/shoe5.avif",
    title: "New Balance 574",
    price: "$94.99",
    description: "Iconic lifestyle sneakers for everyday wear.",
  },
  {
    id: 6,
    image: "/assets/shoe6.avif",
    title: "Vans Old Skool",
    price: "$69.99",
    description: "Classic skate shoe with iconic sidestripe.",
  },
  {
    id: 7,
    image: "/assets/shoe7.avif",
    title: "Converse Chuck 70",
    price: "$74.99",
    description: "High-top canvas sneakers, timeless style.",
  },
  {
    id: 8,
    image: "/assets/shoe8.avif",
    title: "Under Armour HOVR",
    price: "$109.99",
    description: "Charged cushioning for all-day comfort.",
  },
  {
    id: 9,
    image: "/assets/shoe9.avif",
    title: "Asics Gel-Kayano",
    price: "$139.99",
    description: "Stability running shoe with GEL technology.",
  },
  {
    id: 10,
    image: "/assets/shoe10.avif",
    title: "Fila Disruptor",
    price: "$84.99",
    description: "Chunky platform sneakers for street style.",
  },
  {
    id: 11,
    image: "/assets/shoe11.avif",
    title: "Jordan 1 Low",
    price: "$119.99",
    description: "Classic basketball shoe in low-top design.",
  },
  {
    id: 12,
    image: "/assets/shoe12.avif",
    title: "Saucony Original",
    price: "$89.99",
    description: "Vintage running-inspired casual shoe.",
  },
  {
    id: 13,
    image: "/assets/shoe13.avif",
    title: "On Cloud 5",
    price: "$129.99",
    description: "CloudTec technology for cloud-like comfort.",
  },
  {
    id: 14,
    image: "/assets/shoe14.avif",
    title: "Hoka One One Bondi",
    price: "$149.99",
    description: "Maximal cushioning for long-distance comfort.",
  },
  {
    id: 15,
    image: "/assets/shoe15.avif",
    title: "Merrell Moab",
    price: "$114.99",
    description: "Trail hiking shoe with superior grip.",
  },
  {
    id: 16,
    image: "/assets/shoe16.avif",
    title: "Timberland 6-Inch",
    price: "$159.99",
    description: "Iconic waterproof boot for rugged terrain.",
  },
  {
    id: 17,
    image: "/assets/shoe17.avif",
    title: "Dr. Martens 1460",
    price: "$169.99",
    description: "Legendary combat boots with air-cushioned sole.",
  },
  {
    id: 18,
    image: "/assets/shoe18.avif",
    title: "Clarks Wallabee",
    price: "$134.99",
    description: "Creeper sole moccasin for urban style.",
  },
  {
    id: 19,
    image: "/assets/shoe19.jpg",
    title: "Nike React Infinity",
    price: "$109.99",
    description: "React foam for responsive performance.",
  },
  {
    id: 20,
    image: "/assets/shoe20.jpg",
    title: "Adidas NMD R1",
    price: "$129.99",
    description: "Primeknit upper with boost cushioning.",
  },
  {
    id: 21,
    image: "/assets/shoe21.jpg",
    title: "Puma Suede Classic",
    price: "$79.99",
    description: "Soft upper, classic basketball silhouette.",
  },
  {
    id: 22,
    image: "/assets/shoe22.jpg",
    title: "New Balance 990v5",
    price: "$179.99",
    description: "Premium made-in-USA running shoe.",
  },
  {
    id: 23,
    image: "/assets/shoe23.jpg",
    title: "Vans Authentic",
    price: "$64.99",
    description: "Original low-top skate shoe, timeless design.",
  }
];

export function StoreProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [products, setProducts] = useState(defaultProducts);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // ✅ INITIAL LOAD
  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) setUsers(JSON.parse(storedUsers));

    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) setCurrentUser(JSON.parse(storedUser));


    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));

    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) setWishlist(JSON.parse(storedWishlist));
  }, []);

  // ✅ SAVE TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // ✅ AUTH
  const signup = (email, password) => {
    if (users.find((u) => u.email === email)) {
      alert("User already exists");
      return false;
    }
    const newUser = { id: Date.now(), email, password };
    setUsers([...users, newUser]);
    return true;
  };

  const login = (email, password) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      return true;
    }
    alert("Invalid credentials");
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    setCart([]);
  };

  // ✅ CART
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const getTotal = () => {
    return cart.reduce(
      (sum, item) => {
        const priceNum = parseFloat(String(item.price).replace(/[^\d.]/g, ''));
        return sum + (isNaN(priceNum) ? 0 : priceNum) * item.quantity;
      },
      0
    );
  };

  const addToWishlist = (product) => {
    const existing = wishlist.find((item) => item.id === product.id);
    if (existing) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, { ...product }]);
    }
  };

  const getProductById = (id) =>
    products.find((p) => p.id === parseInt(id));

  return (
    <StoreContext.Provider
      value={{
        currentUser,
        cart,
        products,
        getProductById,
        signup,
        login,
        logout,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotal,
        wishlist,
        addToWishlist,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

// ✅ CUSTOM HOOK
export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return context;
};