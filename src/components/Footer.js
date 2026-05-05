import React from 'react';
import { Cpu, Mail, MapPin } from 'lucide-react';

const SocialIcon = ({ path, size = 20 }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor"
  >
    <path d={path} />
  </svg>
);

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      path: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.335.935 20.665.522 19.874.217c-.765-.295-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03z'
    },
    {
      name: 'Twitter (X)',
      url: 'https://twitter.com',
      path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z'
    }
  ];

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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  title={social.name}
                  className="btn-secondary"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: '42px', 
                    height: '42px', 
                    padding: 0,
                    borderRadius: '12px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <SocialIcon path={social.path} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 700 }}>Contact</h4>
            <ul style={{ listStyle: 'none', color: 'hsl(var(--text-secondary))', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <span>123 Tech Avenue, Silicon Valley, CA</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={18} style={{ flexShrink: 0 }} />
                <a href="mailto:contact@pceco.com" style={{ color: 'inherit', textDecoration: 'none' }}>contact@pceco.com</a>
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
