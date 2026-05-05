import React, { useState } from 'react';
import { ShoppingCart, Star, MapPin, Cpu, Info, X, CreditCard, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    if (e) e.stopPropagation();
    if (!user) {
      navigate('/login');
      return;
    }
    addToCart(product);
  };

  const handleCheckout = (e) => {
    if (e) e.stopPropagation();
    if (!user) {
      navigate('/login');
      return;
    }
    addToCart(product);
    navigate('/cart');
  };

  return (
    <>
      <motion.div 
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -10 }}
        onClick={() => setShowDetails(true)}
        className="glass-card" 
        style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', cursor: 'pointer' }}
      >
        <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ 
            position: 'absolute', 
            top: '1rem', 
            right: '1rem', 
            background: 'rgba(0,0,0,0.6)', 
            padding: '0.3rem 0.8rem', 
            borderRadius: '20px', 
            fontSize: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            backdropFilter: 'blur(4px)'
          }}>
            <Star size={14} fill="gold" color="gold" />
            {product.rating}
          </div>
        </div>
        
        <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ color: 'hsl(var(--accent-primary))', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
              {product.category}
            </span>
            <Info size={18} style={{ color: 'hsl(var(--text-secondary))', opacity: 0.5 }} />
          </div>
          
          <h3 style={{ margin: '0.5rem 0 1rem', fontSize: '1.2rem', fontWeight: 600 }}>{product.name}</h3>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'hsl(var(--text-secondary))', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            <MapPin size={14} /> {product.location}
          </div>
          
          <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>${product.price}</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={handleAddToCart}
                className="btn-secondary" 
                style={{ padding: '0.6rem', borderRadius: '10px' }}
              >
                <Plus size={20} />
              </button>
              <button 
                onClick={handleCheckout}
                className="btn btn-primary" 
                style={{ padding: '0.6rem 1rem', borderRadius: '10px', fontSize: '0.9rem' }}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Details Modal */}
      <AnimatePresence>
        {showDetails && (
          <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh', 
            zIndex: 2000, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '1rem'
          }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDetails(false)}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-card"
              style={{ 
                position: 'relative', 
                width: '100%', 
                maxWidth: '700px', 
                padding: '2.5rem', 
                maxHeight: '90vh', 
                overflowY: 'auto' 
              }}
            >
              <button 
                onClick={() => setShowDetails(false)}
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', zIndex: 10 }}
              >
                <X size={24} />
              </button>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                <div style={{ height: '350px', borderRadius: '16px', overflow: 'hidden' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className="text-gradient" style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '1px' }}>{product.category}</span>
                  <h2 style={{ fontSize: '2.2rem', margin: '0.5rem 0 1.5rem', fontWeight: 800 }}>{product.name}</h2>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div className="btn-secondary" style={{ padding: '0.6rem', borderRadius: '12px' }}><MapPin size={20} /></div>
                      <div>
                        <p style={{ fontSize: '0.85rem', color: 'hsl(var(--text-secondary))', marginBottom: '0.2rem' }}>Origin & Location</p>
                        <p style={{ fontWeight: 600 }}>{product.location}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div className="btn-secondary" style={{ padding: '0.6rem', borderRadius: '12px' }}><Cpu size={20} /></div>
                      <div>
                        <p style={{ fontSize: '0.85rem', color: 'hsl(var(--text-secondary))', marginBottom: '0.2rem' }}>Technical Specifications</p>
                        <p style={{ fontWeight: 500, fontSize: '0.95rem', lineHeight: '1.5' }}>{product.specs}</p>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: 'auto', paddingTop: '2.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                      <span style={{ fontSize: '0.9rem', color: 'hsl(var(--text-secondary))' }}>Unit Price</span>
                      <span style={{ fontSize: '2.2rem', fontWeight: 800 }}>${product.price}</span>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <button 
                        onClick={() => { handleAddToCart(); setShowDetails(false); }}
                        className="btn-secondary" 
                        style={{ justifyContent: 'center', padding: '1rem' }}
                      >
                        <ShoppingCart size={20} /> Add to Cart
                      </button>
                      <button 
                        onClick={handleCheckout}
                        className="btn btn-primary" 
                        style={{ justifyContent: 'center', padding: '1rem' }}
                      >
                        Checkout <CreditCard size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductCard;
