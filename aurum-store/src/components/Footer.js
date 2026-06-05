// import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="newsletter-inner">
          <div className="newsletter-text">
            <span className="newsletter-eyebrow">AURUM INSIDER</span>
            <h3 className="newsletter-title">
              Receive the <em>AURUM</em> briefing
            </h3>
            <p className="newsletter-sub">Invitations, model reveals, concierge services, and priority access to limited editions.</p>
          </div>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-btn">Join</button>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-text">AURUM MOTORS</span>
            <span className="footer-logo-sub">Luxury Automotive Maison</span>
          </div>
          <p className="footer-desc">
            Global leaders in bespoke automotive engineering. Crafted for those who demand performance, prestige, and exclusivity.
          </p>
          <div className="footer-socials">
            {[
              { name: 'Instagram', url: 'https://www.instagram.com' },
              { name: 'YouTube', url: 'https://www.youtube.com' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com' }
            ].map(site => (
              <a
                key={site.name}
                className="social-link"
                href={site.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {site.name}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-nav">
          <div className="footer-col">
            <h4 className="footer-col-title">Collections</h4>
            <ul className="footer-list">
              <li>Grand Touring</li>
              <li>Hypercars</li>
              <li>Heritage Edition</li>
              <li>Bespoke Commission</li>
              <li>Limited Series</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-list">
              <li>About AURUM MOTORS</li>
              <li>Craftsmanship</li>
              <li>Ownership Services</li>
              <li>Press & Media</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-list">
              <li>Book Test Drive</li>
              <li>Concierge Delivery</li>
              <li>Warranty & Service</li>
              <li>Financing</li>
              <li>Custom Commissions</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Showrooms</h4>
            <ul className="footer-list">
              <li>Dubai, UAE</li>
              <li>Geneva, Switzerland</li>
              <li>London, United Kingdom</li>
              <li>New York, USA</li>
              <li>Tokyo, Japan</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© 2026 AURUM MOTORS. All rights reserved.</span>
        <div className="footer-legal">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Cookie Preferences</span>
        </div>
        <div className="footer-payments">
          {['VISA', 'MasterCard', 'AMEX', 'WIRE'].map(p => (
            <span key={p} className="payment-badge">{p}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;