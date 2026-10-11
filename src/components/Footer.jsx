import React from 'react';
import { LeafIcon } from './Icons';

/**
 * Footer component with team information and quick navigation
 */
export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Brand & Statement */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ color: 'var(--color-sage-light)' }}>
                <LeafIcon size={24} />
              </div>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem', margin: 0 }}>CropGuard AI</h3>
            </div>
            <p className="footer-brand-desc">
              Micro-Climatic Crop Disease Early Warning System. Empowering farmers to predict and curb fungal and bacterial pathogens before visible foliar destruction spreads.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><button onClick={() => onNavigate('home')}>Homepage</button></li>
              <li><button onClick={() => onNavigate('analysis')}>Crop Analysis</button></li>
              <li><button onClick={() => onNavigate('results')}>Results Dashboard</button></li>
              <li><button onClick={() => onNavigate('about')}>How It Works</button></li>
            </ul>
          </div>

          {/* Hackathon Project Info */}
          <div>
            <h4 className="footer-title">Project Info</h4>
            <ul className="footer-links" style={{ color: '#B7C8B5' }}>
              <li><strong>Team:</strong> CodeNova</li>
              <li><strong>Event:</strong> 6-Hour Engineering Hackathon</li>
              <li><strong>Target Crops:</strong> Tomato &amp; Potato</li>
              <li><strong>Status:</strong> Frontend UI Prototype</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} CropGuard AI • Built by Team CodeNova for Hackathon</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge badge-demo">Simulated Agro-Data</span>
            <span>Frontend Prototype</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
