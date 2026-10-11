import React, { useState } from 'react';
import { 
  ThermometerIcon, 
  DropletsIcon, 
  CloudRainIcon, 
  LeafIcon, 
  RefreshCwIcon, 
  ArrowRightIcon, 
  CheckCircleIcon, 
  ShieldAlertIcon,
  MapPinIcon,
  InfoIcon
} from '../components/Icons';
import MetricCard from '../components/MetricCard';
import RiskBadge from '../components/RiskBadge';
import { MOCK_SCENARIOS } from '../data/mockResults';

/**
 * Page 3: Results Dashboard
 * Requirements:
 * - Display uploaded image
 * - Possible disease identified
 * - Detection confidence
 * - Temperature, humidity, rainfall forecast
 * - Future disease risk (Low/Moderate/High)
 * - Preventive recommendations
 * - Clearly labelled DEMO DATA
 */
export default function ResultsPage({ analysisData, onAnalyzeAnother, onSelectScenario }) {
  // If user navigated directly to results without analyzing yet, use default Tomato Late Blight scenario
  const [currentResult, setCurrentResult] = useState(
    analysisData || {
      ...MOCK_SCENARIOS.tomato_late_blight,
      location: 'Nashik Valley, Maharashtra (Field #3)',
      timestamp: '11:45 AM',
      date: 'Today',
      userImage: null,
      isDemoData: true
    }
  );

  // Switch between demo scenarios for hackathon presentation
  const handleScenarioChange = (scenarioKey) => {
    const scenario = MOCK_SCENARIOS[scenarioKey];
    if (scenario) {
      setCurrentResult({
        ...scenario,
        location: currentResult.location || 'Demo Field Station',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: 'Today',
        userImage: currentResult.userImage,
        isDemoData: true
      });
      if (onSelectScenario) onSelectScenario(scenarioKey);
    }
  };

  const {
    crop = 'Tomato',
    diseaseName = 'Late Blight',
    scientificName = 'Phytophthora infestans',
    confidence = 94.6,
    riskLevel = 'High',
    riskScore = 88,
    riskSummary = 'Elevated micro-climatic humidity and rain risk.',
    microClimate = {},
    recommendations = [],
    location = 'Field Location',
    userImage = null,
    timestamp = 'Just now',
    isHealthy = false
  } = currentResult;

  // Determine risk style tags
  const riskNormalized = riskLevel.toLowerCase();

  return (
    <div className="page-wrapper">
      {/* DEMO DATA Warning Header */}
      <div style={{ marginBottom: '1.5rem', padding: '0.85rem 1.25rem', backgroundColor: '#FEF3C7', border: '1.5px solid #FCD34D', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span className="badge badge-demo">Simulated Demo Data</span>
          <span style={{ fontSize: '0.875rem', color: '#78350F' }}>
            <strong>Note:</strong> Disease predictions and micro-climate metrics are simulated demo values until backend APIs are connected.
          </span>
        </div>
        <button
          className="btn btn-secondary"
          style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem' }}
          onClick={() => window.print()}
        >
          Print / Save PDF
        </button>
      </div>

      {/* Results Header Bar */}
      <div className="results-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
            <span className="badge badge-forest">{crop} Scan Report</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
              Captured at {timestamp}
            </span>
          </div>
          <h1 style={{ fontSize: '2rem', margin: 0 }}>Diagnostic &amp; Early Warning Report</h1>
        </div>

        <button
          onClick={onAnalyzeAnother}
          className="btn btn-primary"
        >
          <RefreshCwIcon size={16} />
          <span>Analyze Another Crop</span>
        </button>
      </div>

      {/* Top Grid: Image + Main Diagnostic Card */}
      <div className="results-grid-top">
        {/* Left: Uploaded Image Inspection Card */}
        <div className="card result-image-card">
          <div className="result-image-wrapper">
            {userImage ? (
              <img src={userImage} alt="Uploaded Leaf Diagnosis" />
            ) : (
              <div style={{ color: '#A0AEC0', textAlign: 'center', padding: '1rem' }}>
                <LeafIcon size={48} />
                <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Sample Leaf View</div>
              </div>
            )}
          </div>

          <div className="result-image-meta">
            <div className="result-meta-row">
              <span>Target Crop:</span>
              <strong>{crop}</strong>
            </div>
            <div className="result-meta-row">
              <span>Field Location:</span>
              <strong>{location}</strong>
            </div>
            <div className="result-meta-row">
              <span>Pathogen Status:</span>
              <strong style={{ color: isHealthy ? 'var(--color-forest-primary)' : 'var(--risk-high-text)' }}>
                {isHealthy ? 'Healthy Leaf' : 'Pathogen Detected'}
              </strong>
            </div>
          </div>
        </div>

        {/* Right: Pathogen & Confidence Card */}
        <div className="card diagnosis-card">
          <div>
            <div className="diagnosis-header">
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Pathological Identification
                </span>
                <h2 className="pathogen-name">{diseaseName}</h2>
                <div className="scientific-name">{scientificName}</div>
              </div>

              {/* Future Disease Risk Badge */}
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.3rem', fontWeight: 600 }}>
                  Future Disease Risk
                </div>
                <RiskBadge level={riskLevel} score={riskScore} />
              </div>
            </div>

            {/* Confidence Bar */}
            <div className="confidence-bar-container">
              <div className="confidence-label-row">
                <span style={{ color: 'var(--color-text-secondary)' }}>Model Visual Confidence</span>
                <span style={{ color: 'var(--color-forest-dark)' }}>{confidence}%</span>
              </div>
              <div className="confidence-progress-bg">
                <div 
                  className="confidence-progress-fill" 
                  style={{ width: `${confidence}%` }}
                ></div>
              </div>
            </div>

            {/* Risk Summary Statement */}
            <div style={{ 
              backgroundColor: riskNormalized === 'high' ? 'var(--risk-high-bg)' : riskNormalized === 'moderate' ? 'var(--risk-mod-bg)' : 'var(--risk-low-bg)', 
              color: riskNormalized === 'high' ? 'var(--risk-high-text)' : riskNormalized === 'moderate' ? 'var(--risk-mod-text)' : 'var(--risk-low-text)',
              border: `1px solid ${riskNormalized === 'high' ? 'var(--risk-high-border)' : riskNormalized === 'moderate' ? 'var(--risk-mod-border)' : 'var(--risk-low-border)'}`,
              borderRadius: 'var(--radius-md)', 
              padding: '0.9rem 1.1rem',
              fontSize: '0.875rem' 
            }}>
              <strong>Early Warning Analysis:</strong> {riskSummary}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            <InfoIcon size={14} />
            <span>Early Warning formula: F(Visual Lesions × Canopy Humidity × Consecutive Leaf Wetness Hours)</span>
          </div>
        </div>
      </div>

      {/* Middle Section: Micro-Climatic Indicators Grid */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Micro-Climatic Canopy Sensors</h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              Real-time atmospheric telemetry correlated with fungal incubation kinetics
            </span>
          </div>
          <span className="badge badge-sage">Telemetry Live</span>
        </div>

        <div className="metrics-grid">
          {/* Temperature */}
          <MetricCard
            label="Canopy Temperature"
            value={microClimate.temperature !== undefined ? `${microClimate.temperature}` : '21.0'}
            unit="°C"
            icon={<ThermometerIcon size={18} />}
            status={microClimate.temperatureStatus || 'Normal Range'}
            statusType={riskNormalized === 'high' ? 'warning' : 'neutral'}
          />

          {/* Humidity */}
          <MetricCard
            label="Relative Humidity (RH)"
            value={microClimate.humidity !== undefined ? `${microClimate.humidity}` : '88'}
            unit="% RH"
            icon={<DropletsIcon size={18} />}
            status={microClimate.humidityStatus || 'Elevated Moisture'}
            statusType={riskNormalized === 'high' ? 'danger' : riskNormalized === 'moderate' ? 'warning' : 'success'}
          />

          {/* Rainfall Forecast */}
          <MetricCard
            label="Rainfall Forecast (48h)"
            value={microClimate.rainfallForecast !== undefined ? `${microClimate.rainfallForecast}` : '12'}
            unit="mm"
            icon={<CloudRainIcon size={18} />}
            status={microClimate.rainfallProbability ? `${microClimate.rainfallProbability}% Probability` : 'Moderate chance'}
            statusType={microClimate.rainfallProbability > 70 ? 'danger' : 'neutral'}
          />

          {/* Leaf Wetness Hours */}
          <MetricCard
            label="Leaf Wetness Duration"
            value={microClimate.leafWetnessHours !== undefined ? `${microClimate.leafWetnessHours}` : '6.5'}
            unit="hours"
            icon={<LeafIcon size={18} />}
            status={microClimate.leafWetnessHours > 6 ? 'Critical Fungal Window' : 'Safe Foliar State'}
            statusType={microClimate.leafWetnessHours > 6 ? 'danger' : 'success'}
          />
        </div>
      </div>

      {/* Bottom Section: Preventive Recommendations */}
      <section className="recommendations-section">
        <div style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Actionable Preventive Recommendations</h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: 0 }}>
            Implement these targeted cultural, biological, and chemical interventions to arrest pathogen transmission.
          </p>
        </div>

        <div className="recommendations-grid">
          {recommendations.map((rec, index) => (
            <div key={index} className="rec-card">
              <div className="rec-icon">
                <CheckCircleIcon size={20} />
              </div>
              <div className="rec-content">
                <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--color-forest-light)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {rec.category || 'Advisory'}
                </span>
                <h4>{rec.title}</h4>
                <p>{rec.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Scenario Switcher for Hackathon Judges & Evaluation */}
      <div className="scenario-switcher-card">
        <div>
          <strong style={{ fontSize: '0.9rem', color: 'var(--color-forest-dark)', display: 'block' }}>
            🧪 Hackathon Judge Demo Switcher:
          </strong>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
            Switch between different mock disease and micro-climate profiles:
          </span>
        </div>

        <div className="switcher-pills">
          <button
            className={`switcher-pill ${currentResult.id === 'tomato_late_blight' ? 'active' : ''}`}
            onClick={() => handleScenarioChange('tomato_late_blight')}
          >
            🍅 Tomato Late Blight (High)
          </button>
          <button
            className={`switcher-pill ${currentResult.id === 'potato_late_blight' ? 'active' : ''}`}
            onClick={() => handleScenarioChange('potato_late_blight')}
          >
            🥔 Potato Late Blight (High)
          </button>
          <button
            className={`switcher-pill ${currentResult.id === 'tomato_early_blight' ? 'active' : ''}`}
            onClick={() => handleScenarioChange('tomato_early_blight')}
          >
            🍅 Tomato Early Blight (Moderate)
          </button>
          <button
            className={`switcher-pill ${currentResult.id === 'healthy_crop' ? 'active' : ''}`}
            onClick={() => handleScenarioChange('healthy_crop')}
          >
            🌿 Healthy Foliage (Low)
          </button>
        </div>
      </div>
    </div>
  );
}
