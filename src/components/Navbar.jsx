import React, { useState } from 'react';
import { LeafIcon, MenuIcon, XIcon, ArrowRightIcon } from './Icons';

/**
 * Navbar Component with responsive mobile drawer & active route highlighting
 */
export default function Navbar({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'analysis', label: 'Crop Analysis' },
    { id: 'results', label: 'Results Dashboard' },
    { id: 'about', label: 'About' }
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="brand-link"
          style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
        >
          <div className="brand-icon-wrapper">
            <LeafIcon size={22} />
          </div>
          <div className="brand-title">
            <span className="brand-name">CropGuard AI</span>
            <span className="brand-tag">Early Warning</span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNavClick('analysis')}
                className="btn btn-primary nav-cta-btn"
              >
                <span>Analyze Leaf</span>
                <ArrowRightIcon size={16} />
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
    </header>
  );
}
