// import React from 'react';
import './Categories.css';

const categories = [
  { id: 1, name: 'Grand Tourers', sub: '8 Models', accent: '#d4af37', pattern: 'vertical', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=500&fit=crop' },
  { id: 2, name: 'Hypercars', sub: '12 Models', accent: '#c9a227', pattern: 'diagonal', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=500&fit=crop' },
  { id: 3, name: 'Sport Classics', sub: '6 Models', accent: '#e8c547', pattern: 'horizontal', image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=500&h=500&fit=crop' },
  { id: 4, name: 'Limited Editions', sub: '50 Units', accent: '#b8931f', pattern: 'grid', image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=500&fit=crop' },
];

const Categories = () => {
  return (
    <section className="categories">
      <div className="section-header">
        <div className="section-label">
          <span className="label-line"></span>
          <span>Shop by Category</span>
        </div>
        <h2 className="section-title">
          Every occasion,<br /><em>refined.</em>
        </h2>
      </div>

      <div className="categories-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat.id}>
            <div className="category-visual" style={{ '--cat-accent': cat.accent, '--pattern': cat.pattern, backgroundImage: `url(${cat.image})` }}>
              <div className="cat-pattern"></div>
              <div className="cat-overlay"></div>
              <div className="cat-shine"></div>
            </div>
            <div className="category-info">
              <span className="cat-sub">{cat.sub}</span>
              <h3 className="cat-name">{cat.name}</h3>
            </div>
            <div className="category-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;