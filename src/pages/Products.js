import React, { useState } from 'react';
import { Search, Filter, Cpu, Layers, Disc, Database, Monitor } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const allProducts = [
    { 
      id: 1, 
      name: 'RTX 5090 Super', 
      price: 1599, 
      category: 'GPU', 
      rating: 4.9, 
      image: '/images/gpu.png',
      location: 'California, USA',
      specs: '24GB GDDR7, 512-bit, 32Gbps, PCIe 5.0, 450W TGP'
    },
    { 
      id: 2, 
      name: 'Ryzen 9 9950X', 
      price: 699, 
      category: 'CPU', 
      rating: 4.8, 
      image: '/images/cpu.png',
      location: 'Texas, USA',
      specs: '16 Cores, 32 Threads, 5.7GHz Boost, 170W TDP, AM5'
    },
    { 
      id: 3, 
      name: 'X870E Master', 
      price: 499, 
      category: 'Motherboard', 
      rating: 4.7, 
      image: '/images/motherboard.png',
      location: 'Taiwan',
      specs: 'AM5, 20+2+1 Phases, DDR5 8000+, 5x M.2, Wi-Fi 7'
    },
    { 
      id: 4, 
      name: 'DDR5 64GB 7200MHz', 
      price: 299, 
      category: 'RAM', 
      rating: 4.9, 
      image: '/images/cpu.png',
      location: 'South Korea',
      specs: '64GB (2x32GB), CL34, RGB, Intel XMP 3.0'
    },
    { 
      id: 5, 
      name: 'NVMe Gen5 4TB', 
      price: 450, 
      category: 'Storage', 
      rating: 4.8, 
      image: '/images/motherboard.png',
      location: 'Japan',
      specs: '14,000MB/s Read, 12,000MB/s Write, 3D TLC, Heatsink included'
    },
    { 
      id: 6, 
      name: 'RTX 5070 Ti', 
      price: 899, 
      category: 'GPU', 
      rating: 4.6, 
      image: '/images/gpu.png',
      location: 'California, USA',
      specs: '16GB GDDR7, 256-bit, PCIe 5.0, 285W TGP'
    },
  ];

  const categories = [
    { name: 'All', icon: <Layers size={16} /> },
    { name: 'GPU', icon: <Monitor size={16} /> },
    { name: 'CPU', icon: <Cpu size={16} /> },
    { name: 'Motherboard', icon: <Disc size={16} /> },
    { name: 'RAM', icon: <Database size={16} /> },
    { name: 'Storage', icon: <Database size={16} /> },
  ];

  const filteredProducts = allProducts.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <div style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Hardware <span className="text-gradient">Catalog</span></h1>
        <p style={{ color: 'hsl(var(--text-secondary))' }}>Everything you need for your next ultra-performance build.</p>
      </div>

      {/* Filters & Search */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flexGrow: 1, maxWidth: '500px' }}>
            <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'hsl(var(--text-secondary))' }} />
            <input 
              type="text" 
              placeholder="Search parts, categories..." 
              className="form-input"
              style={{ paddingLeft: '3rem' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Category Chips */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 1.2rem',
                borderRadius: '50px',
                border: '1px solid var(--glass-border)',
                background: selectedCategory === cat.name ? 'hsl(var(--accent-primary))' : 'var(--glass-bg)',
                color: selectedCategory === cat.name ? 'white' : 'hsl(var(--text-primary))',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontWeight: 600
              }}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '5rem 0', color: 'hsl(var(--text-secondary))' }}>
          <h3>No components found matching your selection.</h3>
        </div>
      )}
    </div>
  );
};

export default Products;
