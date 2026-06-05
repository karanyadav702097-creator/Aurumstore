import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductCards from './components/ProductCards';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Luxury Brand Marquee */}
      <div className="luxury-marquee">
        <p>🏁 AURUM MOTORS: Engineering Excellence Since 1987 | Where Performance Meets Prestige | Limited Availability</p>
      </div>

      {/* Glassmorphism Navigation */}
      <Navbar />

      {/* Luxury Car Hero Showcase */}
      <Hero />

      {/* Car Collections */}
      <section className="collections-section">
        <div className="collections-header">
          <p className="collections-subtitle">Collections</p>
          <h2 className="collections-title">Our Automotive Legacy</h2>
          <p className="collections-description">
            Discover the pinnacle of automotive engineering. Each model represents decades of innovation, precision craftsmanship, and uncompromising excellence.
          </p>
        </div>

        <div className="collections-grid">
          <div className="collection-card">
            <div className="collection-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop)'}}>
              <div className="collection-overlay"></div>
            </div>
            <div className="collection-content">
              <h3 className="collection-title">Grand Touring</h3>
              <p className="collection-description">Long-distance luxury and performance for the discerning collector.</p>
              <a href="#models" className="collection-link">Explore Series ↗</a>
            </div>
          </div>

          <div className="collection-card">
            <div className="collection-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop)'}}>
              <div className="collection-overlay"></div>
            </div>
            <div className="collection-content">
              <h3 className="collection-title">Hypercars</h3>
              <p className="collection-description">Ultimate performance engineering for elite clientele worldwide.</p>
              <a href="#models" className="collection-link">Explore Series ↗</a>
            </div>
          </div>

          <div className="collection-card">
            <div className="collection-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=400&h=300&fit=crop)'}}>
              <div className="collection-overlay"></div>
            </div>
            <div className="collection-content">
              <h3 className="collection-title">Heritage Edition</h3>
              <p className="collection-description">Iconic designs reimagined with cutting-edge technology.</p>
              <a href="#models" className="collection-link">Explore Series ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* Car Types/Models Showcase */}
      <Categories />

      {/* Featured Supercars */}
      <div id="models">
        <ProductCards />
      </div>

      {/* Brand History */}
      <section className="brand-history">
        <div className="history-content">
          <div className="history-text">
            <p className="history-subtitle">Our Story</p>
            <h2 className="history-title">AURUM MOTORS Heritage</h2>
            <p className="history-description">
              Founded in 1987, AURUM MOTORS emerged from a singular vision: to create automobiles that transcend mere transportation. Our name, derived from the Latin word for gold, represents our commitment to perfection, luxury, and timeless elegance.
            </p>
            <p className="history-description">
              Each vehicle that bears the AURUM crest is a masterpiece of engineering. We employ only the finest materials, collaborate with world-renowned designers, and employ master craftsmen with decades of expertise. Our production is deliberately limited—we believe in exclusivity.
            </p>
            <p className="history-description">
              Today, AURUM vehicles are found in the garages of royalty, industry titans, and automotive connoisseurs across 50 countries. We don't build cars for everyone. We build them for those who understand that true luxury is felt in every heartbeat of the engine.
            </p>
            <div className="history-stats">
              <div className="stat">
                <span className="stat-value">38</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="stat">
                <span className="stat-value">1200+</span>
                <span className="stat-label">Handcrafted Vehicles</span>
              </div>
              <div className="stat">
                <span className="stat-value">50</span>
                <span className="stat-label">Countries Worldwide</span>
              </div>
            </div>
          </div>
          <div className="history-image">
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop" alt="AURUM Heritage" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Test Drive Booking */}
      <section className="booking-section">
        <div className="booking-content">
          <div className="booking-header">
            <p className="booking-subtitle">Experience AURUM</p>
            <h2 className="booking-title">Schedule Your Test Drive</h2>
            <p className="booking-description">
              Feel the precision. Experience the power. Discover why AURUM is the choice of connoisseurs.
            </p>
          </div>

          <form className="booking-form">
            <div className="form-group">
              <input type="text" placeholder="Full Name" className="form-input" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" className="form-input" required />
            </div>
            <div className="form-group">
              <select className="form-input" required>
                <option value="">Select Your Preferred Model</option>
                <option value="gt">Grand Touring</option>
                <option value="hyper">Hypercar</option>
                <option value="heritage">Heritage Edition</option>
              </select>
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" className="form-input" required />
            </div>
            <button type="submit" className="booking-btn">Request Test Drive</button>
          </form>
        </div>
      </section>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
}

export default App;