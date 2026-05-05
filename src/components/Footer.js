import React from 'react';
import { Cpu, Mail, MapPin, Globe, Camera, MessageCircle, Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'hsl(var(--bg-secondary))', padding: '5rem 0 3rem', marginTop: '4rem', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
          {/* Brand Section */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <Cpu size={28} style={{ color: 'hsl(var(--accent-primary))' }} />
              <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.5px' }}>PC<span className="text-gradient">ECO</span></span>
            </div>
            <p style={{ color: 'hsl(var(--text-secondary))', lineHeight: '1.6', marginBottom: '2rem' }}>
              Premium PC parts for the next generation of builders. Sustainability meets high performance.
            </p>
          </div>
          
          {/* Shop Section */}
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 700 }}>Shop Hardware</h4>
            <ul style={{ listStyle: 'none', color: 'hsl(var(--text-secondary))', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><a href="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Processors</a></li>
              <li><a href="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Graphics Cards</a></li>
              <li><a href="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Memory & Storage</a></li>
              <li><a href="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Motherboards</a></li>
            </ul>
          </div>
          
          {/* Social Links Section */}
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 700 }}>Follow Us</h4>
            <ul style={{ listStyle: 'none', color: 'hsl(var(--text-secondary))', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>
                  <Globe size={18} /> Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'inherit', textDecoration: 'none' }}>
                  <Camera size={18} /> Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'inherit', textDecoration: 'none' }}>
                  <MessageCircle size={18} /> Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'inherit', textDecoration: 'none' }}>
                  <Briefcase size={18} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 700 }}>Contact</h4>
            <ul style={{ listStyle: 'none', color: 'hsl(var(--text-secondary))', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <span>My Location: 123 Tech Avenue, Silicon Valley, CA</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={18} flexShrink={0} />
                <a href="mailto:contact@pceco.com" style={{ color: 'inherit', textDecoration: 'none' }}>Email: contact@pceco.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: 'hsl(var(--text-secondary))', fontSize: '0.9rem' }}>
          <div>© 2026 PC Part Eco Merse. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
