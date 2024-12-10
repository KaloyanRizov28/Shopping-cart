// App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import ShopCart from './pages/ShopCart';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

export default function App() {
  // Initialize from localStorage
  const [listOfItems, setListOfItems] = useState([]);
  const [boughtItems, setBoughtItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(boughtItems));
      console.log("Saved to localStorage:", boughtItems); // Debug log
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [boughtItems]);

  const handleBuyClick = (product) => {
    console.log("Adding product to cart:", product); // Debug log
    setBoughtItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, amount: (item.amount || 0) + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, amount: 1 }];
      }
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    setBoughtItems(prevItems => {
      if (newQuantity <= 0) {
        return prevItems.filter(item => item.id !== productId);
      }
      return prevItems.map(item =>
        item.id === productId ? { ...item, amount: newQuantity } : item
      );
    });
  };

  const removeItem = (productId) => {
    setBoughtItems(prevItems => 
      prevItems.filter(item => item.id !== productId)
    );
  };

  // Calculate cart count safely
  const cartCount = boughtItems?.reduce((sum, item) => sum + (item?.amount || 0), 0) || 0;

  return (
    <NextUIProvider>
      <BrowserRouter>
        <div className="dark text-foreground bg-background min-h-screen">
          <Navbar cartCount={cartCount} />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route 
                path="/shop" 
                element={
                  <Shop 
                    listOfItems={listOfItems}
                    setListOfItems={setListOfItems}
                    handleBuyClick={handleBuyClick}
                  />
                } 
              />
              <Route 
                path="/cart" 
                element={
                  <ShopCart 
                    boughtItems={boughtItems}
                    updateQuantity={updateQuantity}
                    removeItem={removeItem}
                  />
                } 
              />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </NextUIProvider>
  );
}