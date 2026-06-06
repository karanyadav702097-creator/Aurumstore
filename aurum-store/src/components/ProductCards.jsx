import React, { useState } from 'react';
import './ProductCards.css';

const products = [
  { id: 1, name: 'AURUM GT-R', price: 2850000, originalPrice: null, tag: 'New', category: 'Hypercar', color: '#1a1510', hue: '35deg 20% 12%', image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=600&fit=crop', specs: '0-100 in 2.9s' },
  { id: 2, name: 'AURUM Elegance', price: 1850000, originalPrice: null, tag: 'Bestseller', category: 'Grand Tourer', color: '#2a2520', hue: '40deg 15% 18%', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=600&fit=crop', specs: '620 HP' },
  { id: 3, name: 'AURUM Vortex', price: 2250000, originalPrice: 2500000, tag: 'Sale', category: 'Sport', color: '#181820', hue: '240deg 12% 12%', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=600&fit=crop', specs: '700 HP' },
  { id: 4, name: 'AURUM Sovereign', price: 4200000, originalPrice: null, tag: 'Limited', category: 'Ultra-Luxury', color: '#1e1510', hue: '30deg 20% 12%', image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=500&h=600&fit=crop', specs: 'Limited to 10' },
  { id: 5, name: 'AURUM Phantom', price: 3150000, originalPrice: null, tag: 'New', category: 'Hypercar', color: '#201a12', hue: '38deg 25% 14%', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=600&fit=crop', specs: '750 HP' },
  { id: 6, name: 'AURUM Apex', price: 1650000, originalPrice: 1850000, tag: 'Sale', category: 'Grand Tourer', color: '#1a1a1a', hue: '0deg 0% 12%', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=600&fit=crop&crop=right', specs: '580 HP' },
  { id: 7, name: 'AURUM Dynasty', price: 2950000, originalPrice: null, tag: 'New', category: 'Sport', color: '#1f1f1f', hue: '0deg 0% 15%', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=600&fit=crop&crop=bottom', specs: '680 HP' },
  { id: 8, name: 'AURUM Crown', price: 5200000, originalPrice: null, tag: 'Limited', category: 'Ultra-Luxury', color: '#2a2410', hue: '45deg 50% 25%', image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=500&h=600&fit=crop&crop=top', specs: 'One-Off Build' },
  { id: 9, name: 'AURUM Velocity', price: 1950000, originalPrice: null, tag: 'Bestseller', category: 'Sport', color: '#3a3a3a', hue: '0deg 0% 20%', image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=600&fit=crop&crop=left', specs: '620 HP' },
  { id: 10, name: 'AURUM Prestige', price: 2450000, originalPrice: null, tag: 'New', category: 'Grand Tourer', color: '#2a1810', hue: '25deg 40% 15%', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=600&fit=crop&crop=center', specs: '650 HP' },
  { id: 11, name: 'AURUM Eclipse', price: 2150000, originalPrice: 2400000, tag: 'Sale', category: 'Hypercar', color: '#1a1a1a', hue: '0deg 0% 12%', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=600&fit=crop&crop=right', specs: '700 HP' },
  { id: 12, name: 'AURUM Heritage', price: 3850000, originalPrice: null, tag: 'Bestseller', category: 'Classic', color: '#2a1810', hue: '25deg 40% 15%', image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=600&fit=crop&crop=top', specs: 'Bespoke Crafted' },
];

const ProductCard = ({ product }) => {
  const [wished, setWished] = useState(false);

  return (
    <div className="product-card">
      <div className="product-image" style={{ '--hue': product.hue }}>
        <img src={product.image} alt={product.name} className="product-img" />
        <div className="product-bg"></div>
        <div className="product-form"></div>
        <div className="product-gloss"></div>

        <div className="product-badge" data-type={product.tag}>{product.tag}</div>

        <button
          className={`wishlist-btn ${wished ? 'wished' : ''}`}
          onClick={() => setWished(!wished)}
        >
          <svg viewBox="0 0 24 24" strokeWidth="1.5" fill={wished ? 'currentColor' : 'none'} stroke="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>

        <div className="product-quick-add">
          <button className="quick-add-btn">Quick Add</button>
        </div>
      </div>

      <div className="product-info">
        <div className="product-meta">
          <span className="product-category">{product.category}</span>
          <span className="product-specs">{product.specs}</span>
        </div>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-pricing">
          <span className="product-price">
            ${(product.price / 1000000).toFixed(2)}M
          </span>
          {product.originalPrice && (
            <span className="product-original">
              ${(product.originalPrice / 1000000).toFixed(2)}M
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductCards = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'New', 'Bestseller', 'Sale', 'Limited'];

  return (
    <section className="products-section">
      <div className="products-header">
        <div className="products-title-area">
          <div className="section-label">
            <span className="label-line"></span>
            <span>Featured Collection</span>
          </div>
          <h2 className="section-title">
            Our<br /><em>Supercars.</em>
          </h2>
        </div>
        <div className="products-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {products
          .filter(p => activeFilter === 'All' || p.tag === activeFilter)
          .map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>

      <div className="products-cta">
        <button className="view-all-btn">
          View All 180 Pieces
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ProductCards;