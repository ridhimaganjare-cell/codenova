import React from 'react';
import { 
  LeafIcon, 
  ShieldAlertIcon, 
  CloudRainIcon, 
  ThermometerIcon, 
  DropletsIcon, 
  ArrowRightIcon, 
  CheckCircleIcon,
  SparklesIcon
} from '../components/Icons';
import RiskBadge from '../components/RiskBadge';

/**
 * Page 1: Homepage
 * Requirements:
 * - CropGuard AI title
 * - Tagline 'Predict Before It Spreads'
 * - Introduction
 * - Start Analysis button
 */
export default function HomePage({ onStartAnalysis, onLearnMore }) {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div>
          <div className="hero-badge-row">
            <span className="badge badge-sage">
              <SparklesIcon size={14} />
              <span>Micro-Climatic Early Warning System</span>
            </span>
          </div>

          <h1 className="hero-title">
            CropGuard <span className="highlight">AI</span>
          </h1>

          <div className="hero-tagline">
            <span>Predict Before It Spreads</span>
          </div>

          <p className="hero-intro">
            Traditional crop disease detection only works after leaves turn brown and irreversible damage is already done. 
            <strong> CropGuard AI</strong> merges visual leaf symptoms with real-time canopy temperature, relative humidity, and rainfall forecasts to predict outbreaks days before spores multiply.
          </p>

          <div className="hero-actions">
            <button 
              className="btn btn-primary btn-lg"
              onClick={onStartAnalysis}
            >
              <span>Start Analysis</span>
              <ArrowRightIcon size={18} />
            </button>

            <button 
              className="btn btn-secondary btn-lg"
              onClick={onLearnMore}
            >
              <span>How It Works</span>
            </button>
          </div>

          {/* Quick Metrics Ticker */}
          <div className="hero-stats-row">
            <div className="stat-item">
              <span className="stat-number">48 hrs</span>
              <span className="stat-label">Advance Warning Window</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Tomato &amp; Potato</span>
              <span className="stat-label">Initial High-Value Targets</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3-Pillar</span>
              <span className="stat-label">Vision + Micro-Climate + Advisory</span>
            </div>
          </div>
        </div>

        {/* Live Early-Warning Simulation Preview Card */}
        <div>
          <div className="hero-preview-card">
            <div className="hero-preview-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="pulse-dot"></span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-forest-dark)' }}>
                  Live Field Telemetry Simulation
                </span>
              </div>
              <RiskBadge level="High" score={88} />
            </div>

            <div className="preview-crop-thumb">
              <svg width="100%" height="100%" viewBox="0 0 320 160" preserveAspectRatio="none">
                <rect width="100%" height="100%" fill="#1E3A2F" />
                <path d="M160,20 C220,50 260,110 200,140 C170,120 150,150 150,150 C150,150 130,120 90,140 C50,100 90,50 160,20 Z" fill="#40916C" />
                <circle cx="150" cy="70" r="14" fill="#78350F" opacity="0.85" />
                <circle cx="185" cy="95" r="18" fill="#78350F" opacity="0.85" />
                <text x="160" y="145" fill="#E2ECE5" fontSize="11" fontFamily="sans-serif" textAnchor="middle">
                  Tomato Canopy: High-Risk Blight Lesion
                </text>
              </svg>
            </div>

            <div className="preview-grid-metrics">
              <div className="preview-metric-box">
                <span className="preview-metric-label">Micro-Climate RH</span>
                <span className="preview-metric-val" style={{ color: 'var(--risk-high-text)' }}>92% RH</span>
              </div>
              <div className="preview-metric-box">
                <span className="preview-metric-label">Canopy Temp</span>
                <span className="preview-metric-val">18.5°C</span>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--color-sage-bg)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', fontSize: '0.825rem', color: 'var(--color-forest-dark)' }}>
              <strong>Smith Period Alert:</strong> Persistent humidity &gt; 85% with 18.5°C triggers explosive spore germination. Apply protective copper spray immediately.
            </div>

            <button 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: '1.25rem' }}
              onClick={onStartAnalysis}
            >
              Run Your Own Crop Scan
            </button>
          </div>
        </div>
      </section>

      {/* Value Pillars Section */}
      <section style={{ marginTop: '2rem' }}>
        <div className="section-header">
          <p className="section-eyebrow">Why Micro-Climate Matters</p>
          <h2 className="section-title">The Early Warning Advantage</h2>
          <p className="section-subtitle">
            Pathogens like blight fungi don't appear randomly. They strictly require specific temperature and moisture thresholds before destroying crops.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-box">
              <ThermometerIcon size={24} />
            </div>
            <h3>Micro-Climate Fusion</h3>
            <p>
              We monitor temperature, relative humidity, and canopy dew point. If conditions match the pathogen reproduction window, an alert is triggered immediately.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box">
              <LeafIcon size={24} />
            </div>
            <h3>Leaf Symptom Inspection</h3>
            <p>
              Upload high-resolution photographs of tomato or potato leaves. Our computer vision module detects early chlorosis and concentric lesions.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box">
              <CloudRainIcon size={24} />
            </div>
            <h3>Rainfall &amp; Spore Forecast</h3>
            <p>
              Rainfall washes fungal spores into soil ridges and neighbouring plants. We forecast washdown risk so protective spray can be applied before storms.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box">
              <ShieldAlertIcon size={24} />
            </div>
            <h3>Actionable Farmer Advisory</h3>
            <p>
              Clear, step-by-step organic and chemical treatments, pruning recommendations, and drip irrigation adjustments tailored to your crop's current stage.
            </p>
          </div>
        </div>
      </section>

      {/* Supported Crops Section */}
      <section className="crops-section">
        <div className="section-header" style={{ marginBottom: '1.5rem' }}>
          <span className="badge badge-sage" style={{ marginBottom: '0.5rem' }}>Crops in Focus</span>
          <h2 className="section-title">Solanaceae Family Specialists</h2>
          <p className="section-subtitle">
            Currently calibrated for high-yield staple crops highly vulnerable to rapid fungal defoliation.
          </p>
        </div>

        <div className="crops-grid">
          {/* Tomato Card */}
          <div className="crop-card">
            <div className="crop-card-header">
              <div className="crop-title-group">
                <div className="crop-icon-bubble">🍅</div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Tomato (Solanum lycopersicum)</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Warm &amp; Humid Vector</span>
                </div>
              </div>
              <span className="badge badge-sage">Active Model</span>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: 0 }}>
              Highly susceptible to Late Blight (water-soaked lesions) and Early Blight (target spot). Humid greenhouse and field canopies create rapid transmission risks.
            </p>

            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-forest-dark)', textTransform: 'uppercase' }}>Target Pathogens:</span>
              <div className="disease-tag-list">
                <span className="disease-pill">Late Blight (Phytophthora)</span>
                <span className="disease-pill">Early Blight (Alternaria)</span>
                <span className="disease-pill">Septoria Leaf Spot</span>
              </div>
            </div>

            <button 
              className="btn btn-outline" 
              style={{ width: '100%', marginTop: 'auto' }}
              onClick={onStartAnalysis}
            >
              Analyze Tomato Crop
            </button>
          </div>

          {/* Potato Card */}
          <div className="crop-card">
            <div className="crop-card-header">
              <div className="crop-title-group">
                <div className="crop-icon-bubble">🥔</div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Potato (Solanum tuberosum)</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Cool-Mist &amp; Rain Vector</span>
                </div>
              </div>
              <span className="badge badge-sage">Active Model</span>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: 0 }}>
              Irish famine pathogen (Late Blight) can destroy entire potato plots in under a week during overcast cool rains. Tuber washdown protection is critical.
            </p>

            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-forest-dark)', textTransform: 'uppercase' }}>Target Pathogens:</span>
              <div className="disease-tag-list">
                <span className="disease-pill">Late Blight (Foliar + Tuber)</span>
                <span className="disease-pill">Early Blight (Alternaria)</span>
                <span className="disease-pill">Blackleg &amp; Soft Rot</span>
              </div>
            </div>

            <button 
              className="btn btn-outline" 
              style={{ width: '100%', marginTop: 'auto' }}
              onClick={onStartAnalysis}
            >
              Analyze Potato Crop
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
