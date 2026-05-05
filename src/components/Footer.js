import React from 'react';
import { Cpu, Globe, Terminal, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'hsl(var(--bg-secondary))', padding: '4rem 0 2rem', marginTop: '4rem', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <Cpu size={24} style={{ color: 'hsl(var(--accent-primary))' }} />
              <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>PC<span className="text-gradient">ECO</span></span>
            </div>
            <p style={{ color: 'hsl(var(--text-secondary))', marginBottom: '1.5rem' }}>
              Premium PC parts for the next generation of builders. Sustainability meets high performance.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" className="btn-secondary" style={{ padding: '0.5rem' }}><Share2 size={20} /></a>
              <a href="#" className="btn-secondary" style={{ padding: '0.5rem' }}><Terminal size={20} /></a>
              <a href="#" className="btn-secondary" style={{ padding: '0.5rem' }}><Globe size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Shop</h4>
            <ul style={{ listStyle: 'none', color: 'hsl(var(--text-secondary))', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li>Processors</li>
              <li>Graphics Cards</li>
              <li>Memory</li>
              <li>Storage</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Support</h4>
            <ul style={{ listStyle: 'none', color: 'hsl(var(--text-secondary))', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li>Shipping Policy</li>
              <li>Returns</li>
              <li>Warranty</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'hsl(var(--text-secondary))', fontSize: '0.9rem' }}>
          © 2026 PC Part Eco Merse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
