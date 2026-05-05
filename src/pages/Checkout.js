import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Truck, CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const { user, loading } = useAuth();
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  if (loading) return <div className="container">Loading...</div>;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setStep(3);
    setTimeout(() => {
      clearCart();
    }, 100);
  };

  if (cart.length === 0 && step !== 3) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '8rem 0' }}>
        <h2>Your cart is empty</h2>
        <p style={{ margin: '1rem 0 2rem' }}>Add some hardware before checking out.</p>
        <Link to="/products" className="btn btn-primary">Go to Store</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <AnimatePresence mode="wait">
        {step < 3 ? (
          <motion.div 
            key="form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem' }}
          >
            <div>
              <button onClick={() => navigate(-1)} style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-secondary))', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', cursor: 'pointer' }}>
                <ArrowLeft size={18} /> Back
              </button>
              
              <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Secure <span className="text-gradient">Checkout</span></h1>
              
              <form onSubmit={handlePlaceOrder}>
                <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                  <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Truck size={20} /> Shipping Information</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" className="form-input" required />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" className="form-input" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Street Address</label>
                    <input type="text" className="form-input" required />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label>City</label>
                      <input type="text" className="form-input" required />
                    </div>
                    <div className="form-group">
                      <label>State</label>
                      <input type="text" className="form-input" required />
                    </div>
                    <div className="form-group">
                      <label>ZIP Code</label>
                      <input type="text" className="form-input" required />
                    </div>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '2rem' }}>
                  <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CreditCard size={20} /> Payment Details</h3>
                  <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" className="form-input" placeholder="0000 0000 0000 0000" required />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input type="text" className="form-input" placeholder="MM/YY" required />
                    </div>
                    <div className="form-group">
                      <label>CVC</label>
                      <input type="password" className="form-input" placeholder="***" required />
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '2rem', justifyContent: 'center', padding: '1.2rem' }}>
                  Place Order - ${cartTotal.toFixed(2)}
                </button>
              </form>
            </div>

            {/* Sidebar Summary */}
            <div style={{ height: 'fit-content' }}>
               <div className="glass-card" style={{ padding: '2rem', position: 'sticky', top: '100px' }}>
                  <h3 style={{ marginBottom: '1.5rem' }}>Order Summary</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {cart.map(item => (
                      <div key={item.product_id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                        <span style={{ color: 'hsl(var(--text-secondary))' }}>{item.name} x{item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <div style={{ height: '1px', background: 'var(--glass-border)', margin: '0.5rem 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.1rem' }}>
                      <span>Total</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ textAlign: 'center', padding: '6rem 0' }}
          >
            <div style={{ color: 'hsl(var(--success))', marginBottom: '2rem' }}>
              <CheckCircle size={80} />
            </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Order <span className="text-gradient">Placed!</span></h1>
            <p style={{ color: 'hsl(var(--text-secondary))', marginBottom: '3rem', fontSize: '1.2rem' }}>
              Thank you for choosing PC ECO. Your hardware is being prepared for carbon-neutral shipping.
            </p>
            <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex' }}>Return Home</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Checkout;
