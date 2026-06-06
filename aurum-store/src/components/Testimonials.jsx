import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote: "The AURUM GT-R isn't just a car—it's a revolution on wheels. 2.9 seconds to 100 km/h, handcrafted to perfection, and a driving experience that transcends reality. This is automotive excellence.",
    author: "Sheikh Rashid Al Maktoum",
    title: "Entrepreneur & Collector",
    initials: "SA",
    rating: 5,
  },
  {
    id: 2,
    quote: "I've owned supercars from every legendary marque, but AURUM represents something different—a modern renaissance of craftsmanship. The Phantom Coupe is pure poetry in motion.",
    author: "Maximilian von König",
    title: "German Industrialist",
    initials: "MK",
    rating: 5,
  },
  {
    id: 3,
    quote: "AURUM captured my heart the moment I sat behind the wheel of the Elegance. It's not about speed or horsepower—it's about the symphony of engineering, the whisper of perfection.",
    author: "Isabella Ferrari",
    title: "Italian Fashion Icon",
    initials: "IF",
    rating: 5,
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[active];

  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <div className="testimonials-left">
          <div className="section-label">
            <span className="label-line"></span>
            <span>Owner Stories</span>
          </div>
          <h2 className="section-title">
            Driven by the<br /><em>exceptional.</em>
          </h2>
          <div className="testi-controls">
            <button className="testi-nav" onClick={prev}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <div className="testi-progress">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`progress-dot ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                ></div>
              ))}
            </div>
            <button className="testi-nav" onClick={next}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="testimonials-right">
          <div className="quote-mark">"</div>
          <blockquote className="quote-text" key={t.id}>
            {t.quote}
          </blockquote>
          <div className="quote-stars">
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>
          <div className="quote-author">
            <div className="author-avatar">
              <span>{t.initials}</span>
            </div>
            <div className="author-info">
              <span className="author-name">{t.author}</span>
              <span className="author-title">{t.title}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials-marquee">
        <div className="marquee-track">
          {['Hand-Assembled', 'Limited Production', 'Carbon Fiber', '0-100 in 2.9s', 'Bespoke Interior', 'Worldwide Service', 'Hand-Assembled', 'Limited Production', 'Carbon Fiber', '0-100 in 2.9s', 'Bespoke Interior', 'Worldwide Service'].map((text, i) => (
            <React.Fragment key={i}>
              <span className="marquee-item">{text}</span>
              <span className="marquee-sep">◆</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;