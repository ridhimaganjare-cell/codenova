import React from 'react';
import { 
  LeafIcon, 
  ThermometerIcon, 
  ShieldAlertIcon, 
  ArrowRightIcon, 
  CheckCircleIcon, 
  CloudRainIcon,
  SparklesIcon
} from '../components/Icons';

/**
 * Page 4: About
 * Requirements:
 * - Brief explanation of how CropGuard AI works
 * - Micro-climatic disease prediction principles
 * - Architecture pipeline
 */
export default function AboutPage({ onStartAnalysis }) {
  return (
    <div className="page-wrapper">
      <div className="about-header">
        <span className="badge badge-sage" style={{ marginBottom: '0.75rem' }}>
          System Architecture &amp; Methodology
        </span>
        <h1 className="section-title">How CropGuard AI Works</h1>
        <p className="section-subtitle">
          Bridging computer vision with micro-climatic biology to detect crop epidemics before irreversible field defoliation occurs.
        </p>
      </div>

      {/* 3-Pillar Architecture Grid */}
      <div className="about-pillars-grid">
        <div className="pillar-card">
          <div className="pillar-number">01</div>
          <div style={{ color: 'var(--color-forest-primary)', marginBottom: '0.75rem' }}>
            <LeafIcon size={28} />
          </div>
          <h3>Foliar Computer Vision</h3>
          <p>
            Farmers photograph crop foliage directly on their phones. Our visual recognition module scans for early-stage chlorosis, necrotic concentric rings, and water-soaked lesions that precede full blight outbreaks.
          </p>
        </div>

        <div className="pillar-card">
          <div className="pillar-number">02</div>
          <div style={{ color: 'var(--color-forest-primary)', marginBottom: '0.75rem' }}>
            <ThermometerIcon size={28} />
          </div>
          <h3>Micro-Climatic Sensor Fusion</h3>
          <p>
            Pathogenic fungi do not sporulate randomly. By ingesting hyper-local canopy temperature, relative humidity, and 48-hour rainfall forecasts, we calculate the biological incubation index (Smith Periods).
          </p>
        </div>

        <div className="pillar-card">
          <div className="pillar-number">03</div>
          <div style={{ color: 'var(--color-forest-primary)', marginBottom: '0.75rem' }}>
            <ShieldAlertIcon size={28} />
          </div>
          <h3>Pre-Symptomatic Advisory</h3>
          <p>
            Instead of reactive emergency measures after a field is lost, our system produces precise preventive advisories: preventive bio-fungicides, overhead irrigation cut-offs, and canopy ventilation adjustments.
          </p>
        </div>
      </div>

      {/* Science Deep Dive Callout */}
      <div className="science-callout">
        <div>
          <span className="badge" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', marginBottom: '0.75rem' }}>
            The Agro-Climatic Principle
          </span>
          <h3>Understanding the "Smith Period" Warning</h3>
          <p>
            For pathogens like <em>Phytophthora infestans</em> (Late Blight in Tomatoes and Potatoes), spores can only germinate when the leaf surface remains continuously wet at temperatures between 15°C and 22°C for at least 6 consecutive hours.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            By tracking these micro-climatic conditions ahead of rainfall fronts, CropGuard AI gives farmers a critical <strong>24 to 48-hour pre-symptomatic headstart</strong> to apply organic or protective sprays before rapid spore multiplication begins.
          </p>
        </div>

        <div className="science-metric-badge-box">
          <div className="smith-period-item">
            <span>Critical Relative Humidity:</span>
            <strong>&gt; 85% RH</strong>
          </div>
          <div className="smith-period-item">
            <span>Optimal Fungal Temp:</span>
            <strong>15°C – 22°C</strong>
          </div>
          <div className="smith-period-item">
            <span>Minimum Wetness Duration:</span>
            <strong>6+ Continuous Hours</strong>
          </div>
          <div className="smith-period-item">
            <span>Crop Vulnerability:</span>
            <strong>Tomato &amp; Potato</strong>
          </div>
        </div>
      </div>

      {/* Team / Hackathon Card */}
      <div className="team-card">
        <span className="badge badge-sage team-badge">Team CodeNova</span>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Built for 6-Hour Hackathon</h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Designed and developed by first-year engineering students addressing the critical problem statement: 
          <strong> Micro-Climatic Crop Disease Early Warning System</strong>. 
          Built with React, modern CSS design tokens, and modular mock data architecture ready for backend API integration.
        </p>

        <button 
          className="btn btn-primary btn-lg"
          onClick={onStartAnalysis}
        >
          <span>Try Crop Analysis Now</span>
          <ArrowRightIcon size={18} />
        </button>
      </div>
    </div>
  );
}
