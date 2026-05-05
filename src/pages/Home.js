import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = [
    { id: 1, name: 'RTX 5090 Super', price: 1599, category: 'GPU', rating: 4.9, image: '/images/gpu.png' },
    { id: 2, name: 'Ryzen 9 9950X', price: 699, category: 'CPU', rating: 4.8, image: '/images/cpu.png' },
    { id: 3, name: 'X870E Master', price: 499, category: 'Motherboard', rating: 4.7, image: '/images/motherboard.png' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ padding: '8rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '800px' }}
          >
            <span className="text-gradient" style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem', display: 'block' }}>
              Welcome to the Future of Computing
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-2px' }}>
              Build Your <span className="text-gradient">Dream Machine</span> with PC ECO
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'hsl(var(--text-secondary))', marginBottom: '2.5rem', maxWidth: '600px' }}>
              Discover high-performance components sourced with eco-conscious precision. Power your passion without compromising the planet.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/products" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                Shop Components <ArrowRight size={20} />
              </Link>
              <Link to="/signup" className="btn btn-secondary" style={{ padding: '1rem 2.5rem' }}>
                Join Community
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Glow */}
        <div style={{ 
          position: 'absolute', 
          top: '20%', 
          right: '-10%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, hsla(var(--accent-primary), 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0
        }} />
      </section>

      {/* Features */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <Zap />, title: 'Peak Performance', desc: 'Hand-picked hardware for maximum FPS and speed.' },
              { icon: <Shield />, title: 'Eco Warranty', desc: 'Industry-leading 5-year warranty on all eco-certified parts.' },
              { icon: <Globe />, title: 'Global Shipping', desc: 'Fast, carbon-neutral shipping to over 50 countries.' }
            ].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card" 
                style={{ padding: '2rem' }}
              >
                <div style={{ color: 'hsl(var(--accent-primary))', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ color: 'hsl(var(--text-secondary))' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Featured <span className="text-gradient">Hardware</span></h2>
              <p style={{ color: 'hsl(var(--text-secondary))' }}>Top rated components by our expert community.</p>
            </div>
            <Link to="/products" style={{ color: 'hsl(var(--accent-primary))', textDecoration: 'none', fontWeight: 600 }}>
              View All Components →
            </Link>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
