import React from 'react';
import { InfoIcon, SparklesIcon } from './Icons';

/**
 * Notice banner clearly stating DEMO DATA mode
 * As required: "Use clearly labelled DEMO DATA for results until the backend is integrated"
 */
export default function DemoBanner({ onLearnMore }) {
  return (
    <div className="demo-banner">
      <div className="demo-banner-content">
        <span className="badge badge-demo">Demo Mode</span>
        <span>
          <strong>Backend Integration Notice:</strong> Currently displaying simulated micro-climatic predictions. Teammates can connect real AI/Weather endpoints in <code>src/data/mockResults.js</code>.
        </span>
      </div>
      {onLearnMore && (
        <button 
          className="demo-banner-btn"
          onClick={onLearnMore}
          title="See backend integration instructions"
        >
          Integration Guide
        </button>
      )}
    </div>
  );
}
