import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Trash2, Plus, Minus, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const { user } = useAuth();

  if (cart.length === 0) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '8rem 0' }}>
        <ShoppingCart size={64} style={{ color: 'hsl(var(--text-secondary))', marginBottom: '2rem', opacity: 0.5 }} />
        <h2 style={{ marginBottom: '1rem' }}>Your cart is empty</h2>
        <p style={{ color: 'hsl(var(--text-secondary))', marginBottom: '2.5rem' }}>Looks like you haven't added any components yet.</p>
        <Link to="/products" className="btn btn-primary" style={{ display: 'inline-flex' }}>Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '3rem' }}>Your <span className="text-gradient">Cart</span></h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '3rem' }}>
        {/* Cart Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {cart.map((item) => (
            <motion.div 
              layout
              key={item.product_id} 
              className="glass-card" 
              style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}
            >
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
              
              <div style={{ flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{item.name}</h3>
                <p style={{ color: 'hsl(var(--accent-primary))', fontWeight: 600 }}>${item.price}</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '12px' }}>
                <button onClick={() => updateQuantity(item.product_id, item.quantity - 1)} className="btn-secondary" style={{ padding: '0.3rem', borderRadius: '8px' }}><Minus size={16} /></button>
                <span style={{ minWidth: '20px', textAlign: 'center', fontWeight: 600 }}>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.product_id, item.quantity + 1)} className="btn-secondary" style={{ padding: '0.3rem', borderRadius: '8px' }}><Plus size={16} /></button>
              </div>

              <button onClick={() => removeFromCart(item.product_id)} style={{ color: 'hsl(var(--error))', background: 'transparent', border: 'none', cursor: 'pointer', padding: '0.5rem' }}>
                <Trash2 size={20} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <div className="glass-card" style={{ padding: '2rem', height: 'fit-content' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Order Summary</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'hsl(var(--text-secondary))' }}>
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'hsl(var(--text-secondary))' }}>
              <span>Shipping</span>
              <span style={{ color: 'hsl(var(--success))' }}>FREE</span>
            </div>
            <div style={{ height: '1px', background: 'var(--glass-border)', margin: '0.5rem 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 700 }}>
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>
          {user ? (
            <Link to="/checkout" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}>
              Checkout <CreditCard size={20} />
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}>
              Login to Checkout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
