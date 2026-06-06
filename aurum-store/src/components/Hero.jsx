import { useState, useEffect } from 'react';
import './Hero.css';

const heroImages = [
  'car.jpg',
  'car1.jpg ',
   'car2.jpg',
  'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1920&h=1080&fit=crop'
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg">
        <img 
          key={currentImage}
          src={heroImages[currentImage]} 
          alt="Luxury Car"
          className="hero-bg-image"
        />
        <div className="hero-gradient"></div>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow-line"></span>
          <span className="eyebrow-text">AURUM MOTORS — 2026 COLLECTION</span>
          <span className="eyebrow-line"></span>
        </div>

        <h1 className="hero-title">
          <span className="title-line">ENGINEERING</span>
          <span className="title-line">PERFECTION.</span>
        </h1>

        <p className="hero-subtitle">
          Where automotive excellence meets uncompromising luxury.<br/>
          Discover vehicles engineered for those who demand the extraordinary.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">Explore Models</button>
          <button className="btn-ghost">
            <span>Request Test Drive</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">0-100 KM/H</span>
            <span className="stat-label">2.9 Seconds</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">620</span>
            <span className="stat-label">Horsepower</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">Limited</span>
            <span className="stat-label">Only 50 Units</span>
          </div>
        </div>
      </div>

      <div className="floating-tag tag-1">
        <span className="tag-label">NEW RELEASE</span>
        <span className="tag-name">AURUM GT-R Hypercar</span>
        <span className="tag-price">$2,850,000</span>
      </div>

      <div className="floating-tag tag-2">
        <span className="tag-label">EXCLUSIVELY CRAFTED</span>
        <span className="tag-name">Hand-Assembled</span>
        <span className="tag-price">In-House Engineering</span>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll to Discover</span>
      </div>
    </section>
  );
};

export default Hero;