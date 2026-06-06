import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <span className="logo-text">AURUM MOTORS</span>
          <span className="logo-sub">EST. 1987 · LUXURY AUTOMOBILES</span>
        </div>

        <div className="navbar-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#models" className="nav-link">Models</a>
          <a href="#collections" className="nav-link">Collections</a>
          <a href="#heritage" className="nav-link">Heritage</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div className="navbar-actions">
          <a href="#booking" className="nav-cta">Book Your Drive</a>
        </div>
      </div>

      <div className="navbar-ticker">
        <div className="ticker-track">
          {[
            'BESPOKE PERFORMANCE',
            'LIMITED EDITION HYPERCARS',
            'WORLDWIDE DELIVERY',
            'CONCIERGE SERVICE',
            'BESPOKE PERFORMANCE',
            'LIMITED EDITION HYPERCARS',
            'WORLDWIDE DELIVERY',
            'CONCIERGE SERVICE'
          ].map((text, i) => (
            <React.Fragment key={i}>
              <span>{text}</span>
              <span className="ticker-dot">◆</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;