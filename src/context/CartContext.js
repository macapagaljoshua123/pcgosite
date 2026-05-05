import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { user } = useAuth();
  const API_URL = 'http://localhost:5000/api/cart';

  // Fetch cart from DB on login
  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem('token');
      if (user && token) {
        try {
          const res = await fetch(API_URL, {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          const data = await res.json();
          if (res.ok) setCart(data);
        } catch (error) {
          console.error('Failed to fetch cart:', error);
        }
      } else {
        setCart([]); // Clear cart if user logs out
      }
    };
    fetchCart();
  }, [user]);

  const addToCart = async (product) => {
    const token = localStorage.getItem('token');
    if (!user || !token) return;

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          product_id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        })
      });
      const data = await res.json();
      if (res.ok) {
        setCart(prev => {
          const existing = prev.find(item => item.product_id === product.id);
          if (existing) {
            return prev.map(item => item.product_id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
          }
          return [...prev, data];
        });
      }
    } catch (error) {
      console.error('Add to cart failed:', error);
    }
  };

  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return;
    const token = localStorage.getItem('token');
    
    try {
      const res = await fetch(`${API_URL}/${productId}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ quantity: newQuantity })
      });
      if (res.ok) {
        setCart(prev => prev.map(item => item.product_id === productId ? { ...item, quantity: newQuantity } : item));
      }
    } catch (error) {
      console.error('Update quantity failed:', error);
    }
  };

  const removeFromCart = async (productId) => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${API_URL}/${productId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        setCart(prev => prev.filter(item => item.product_id !== productId));
      }
    } catch (error) {
      console.error('Remove from cart failed:', error);
    }
  };

  const clearCart = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(API_URL, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) setCart([]);
    } catch (error) {
      console.error('Clear cart failed:', error);
    }
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
