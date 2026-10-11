import React, { useState, useRef } from 'react';
import { 
  UploadIcon, 
  MapPinIcon, 
  LeafIcon, 
  AlertTriangleIcon, 
  ArrowRightIcon, 
  XIcon, 
  CheckCircleIcon,
  SparklesIcon
} from '../components/Icons';
import { SAMPLE_LEAF_IMAGES } from '../data/mockResults';

/**
 * Page 2: Crop Analysis
 * Requirements:
 * - Crop selection dropdown (Tomato and Potato)
 * - Image upload with preview
 * - Location input
 * - Analyse Crop button
 * - Validate missing fields
 */
export default function AnalysisPage({ onAnalysisComplete }) {
  const [crop, setCrop] = useState('');
  const [location, setLocation] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageName, setImageName] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedScenarioKey, setSelectedScenarioKey] = useState(null);

  // Validation errors
  const [errors, setErrors] = useState({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState('');

  const fileInputRef = useRef(null);

  // Preset location suggestions for quick farmer selection
  const locationPresets = [
    'Nashik Valley, MH (Humid Subtropical)',
    'Salinas Farm Zone #4 (Coastal Fog)',
    'Punjab North Agro-Cluster',
    'Greenhouse Canopy Beta-1'
  ];

  // Handle file selection
  const processFile = (file) => {
    if (!file) return;

    // Check if image
    if (!file.type.startsWith('image/')) {
      setErrors((prev) => ({ ...prev, image: 'Please select a valid image file (PNG, JPG, JPEG, WebP).' }));
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
      setImageFile(file);
      setImageName(file.name);
      setSelectedScenarioKey(null); // Custom image uploaded
      setErrors((prev) => ({ ...prev, image: null }));
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  // Remove preview
  const handleRemoveImage = (e) => {
    e.stopPropagation();
    setImageFile(null);
    setImagePreview(null);
    setImageName('');
    setSelectedScenarioKey(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Use a demo sample leaf (great for hackathon evaluation)
  const handlePickSample = (sampleType) => {
    if (sampleType === 'tomato_blight') {
      setImagePreview(SAMPLE_LEAF_IMAGES.tomato_blight);
      setImageName('Demo_Tomato_Blight_Leaf.svg');
      setCrop('Tomato');
      setSelectedScenarioKey('tomato_late_blight');
      if (!location) setLocation('Nashik Valley, MH (Humid Subtropical)');
    } else if (sampleType === 'potato_blight') {
      setImagePreview(SAMPLE_LEAF_IMAGES.potato_blight);
      setImageName('Demo_Potato_Blight_Leaf.svg');
      setCrop('Potato');
      setSelectedScenarioKey('potato_late_blight');
      if (!location) setLocation('Punjab North Agro-Cluster');
    } else if (sampleType === 'healthy') {
      setImagePreview(SAMPLE_LEAF_IMAGES.healthy_leaf);
      setImageName('Demo_Healthy_Canopy.svg');
      if (!crop) setCrop('Tomato');
      setSelectedScenarioKey('healthy_crop');
      if (!location) setLocation('Greenhouse Canopy Beta-1');
    }
    setErrors((prev) => ({ ...prev, image: null, crop: null }));
  };

  // Validate and submit
  const handleAnalyze = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!crop.trim()) {
      newErrors.crop = 'Please select a crop (Tomato or Potato).';
    }
    if (!imagePreview) {
      newErrors.image = 'Please upload a photo of the affected or healthy crop leaf.';
    }
    if (!location.trim()) {
      newErrors.location = 'Please provide the farm or field location for micro-climate analysis.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsAnalyzing(true);

    // Simulate multi-step analysis sequence for realistic agro-tech feel
    setAnalysisStep('1/3: Analyzing foliar lesions with Computer Vision...');
    await new Promise((r) => setTimeout(r, 600));

    setAnalysisStep('2/3: Querying micro-climatic humidity & rain forecast telemetry...');
    await new Promise((r) => setTimeout(r, 650));

    setAnalysisStep('3/3: Synthesizing early disease warning advisory...');
    await new Promise((r) => setTimeout(r, 600));

    setIsAnalyzing(false);

    // Pass data to results page
    onAnalysisComplete({
      crop,
      location,
      imagePreview,
      imageName: imageName || 'leaf_scan.jpg',
      preferredScenario: selectedScenarioKey
    });
  };

  return (
    <div className="page-wrapper">
      <div className="section-header" style={{ marginBottom: '2rem' }}>
        <span className="badge badge-sage" style={{ marginBottom: '0.5rem' }}>
          Diagnostic Pipeline
        </span>
        <h1 className="section-title">New Crop Diagnostic Scan</h1>
        <p className="section-subtitle">
          Select your crop, upload a leaf sample, and specify your location to run computer vision and micro-climate risk modeling.
        </p>
      </div>

      <div className="analysis-layout">
        {/* Main Analysis Form */}
        <div className="card">
          <form onSubmit={handleAnalyze}>
            {/* Validation Alert if there are errors */}
            {Object.keys(errors).length > 0 && (
              <div className="error-alert">
                <AlertTriangleIcon size={20} />
                <div>
                  <strong>Please complete all required fields:</strong>
                  <ul>
                    {errors.crop && <li>{errors.crop}</li>}
                    {errors.image && <li>{errors.image}</li>}
                    {errors.location && <li>{errors.location}</li>}
                  </ul>
                </div>
              </div>
            )}

            {/* 1. Crop Selection Dropdown */}
            <div className="form-group">
              <label className="form-label" htmlFor="crop-select">
                1. Select Target Crop <span className="required">*</span>
              </label>
              <span className="form-sublabel">
                Currently trained for high-risk Solanaceae crops.
              </span>
              <div className="select-wrapper">
                <select
                  id="crop-select"
                  className={`form-select ${errors.crop ? 'error' : ''}`}
                  value={crop}
                  onChange={(e) => {
                    setCrop(e.target.value);
                    if (e.target.value) setErrors((prev) => ({ ...prev, crop: null }));
                  }}
                >
                  <option value="">-- Choose Crop (Tomato or Potato) --</option>
                  <option value="Tomato">🍅 Tomato (Solanum lycopersicum)</option>
                  <option value="Potato">🥔 Potato (Solanum tuberosum)</option>
                </select>
              </div>
            </div>

            {/* 2. Image Upload with Preview */}
            <div className="form-group">
              <label className="form-label">
                2. Leaf Photograph Upload <span className="required">*</span>
              </label>
              <span className="form-sublabel">
                Capture a clear top or bottom photo of a leaf under good natural lighting.
              </span>

              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleFileChange}
              />

              {!imagePreview ? (
                <div
                  className={`dropzone ${isDragOver ? 'drag-active' : ''} ${errors.image ? 'error' : ''}`}
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="dropzone-icon">
                    <UploadIcon size={26} />
                  </div>
                  <div className="dropzone-title">Click to upload leaf photo or drag &amp; drop</div>
                  <div className="dropzone-hint">Supports PNG, JPG, JPEG, WebP (Max 10MB)</div>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ pointerEvents: 'none' }}
                  >
                    Browse Device Photo
                  </button>
                </div>
              ) : (
                <div>
                  <div className="preview-box">
                    <img src={imagePreview} alt="Leaf Preview" />
                  </div>
                  <div className="preview-actions">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircleIcon size={18} className="text-sage" />
                      <span className="preview-filename">{imageName}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        type="button"
                        className="btn btn-outline"
                        style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                        onClick={() => fileInputRef.current?.click()}
                      >
                        Change Image
                      </button>
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={handleRemoveImage}
                      >
                        <XIcon size={16} />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Demo Sample Leaves for Quick Testing */}
              <div className="sample-leaves-tray">
                <div className="sample-leaves-title">
                  💡 No sample leaf on your device? Try a demo photo:
                </div>
                <div className="sample-leaf-buttons">
                  <button
                    type="button"
                    className="sample-leaf-btn"
                    onClick={() => handlePickSample('tomato_blight')}
                  >
                    🍅 Tomato Blight Sample
                  </button>
                  <button
                    type="button"
                    className="sample-leaf-btn"
                    onClick={() => handlePickSample('potato_blight')}
                  >
                    🥔 Potato Blight Sample
                  </button>
                  <button
                    type="button"
                    className="sample-leaf-btn"
                    onClick={() => handlePickSample('healthy')}
                  >
                    🌿 Healthy Leaf Sample
                  </button>
                </div>
              </div>
            </div>

            {/* 3. Location Input */}
            <div className="form-group">
              <label className="form-label" htmlFor="location-input">
                3. Farm or Field Location <span className="required">*</span>
              </label>
              <span className="form-sublabel">
                Required to fetch local micro-climatic humidity, temperature, and rainfall forecast.
              </span>
              <div style={{ position: 'relative' }}>
                <input
                  id="location-input"
                  type="text"
                  className={`form-input ${errors.location ? 'error' : ''}`}
                  placeholder="e.g. Nashik Valley, Maharashtra or Greenhouse #2"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    if (e.target.value) setErrors((prev) => ({ ...prev, location: null }));
                  }}
                />
              </div>

              {/* Location Quick Presets */}
              <div className="preset-pills">
                {locationPresets.map((preset) => (
                  <button
                    type="button"
                    key={preset}
                    className="preset-pill"
                    onClick={() => {
                      setLocation(preset);
                      setErrors((prev) => ({ ...prev, location: null }));
                    }}
                  >
                    <MapPinIcon size={12} />
                    <span>{preset}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Analyse Crop Button */}
            <div style={{ marginTop: '2rem' }}>
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span className="spinner" style={{ width: '20px', height: '20px', borderWidth: '2.5px', margin: 0 }}></span>
                    <span>Processing Early Warning Model...</span>
                  </span>
                ) : (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <SparklesIcon size={18} />
                    <span>Analyse Crop</span>
                    <ArrowRightIcon size={18} />
                  </span>
                )}
              </button>
            </div>
          </form>

          {isAnalyzing && (
            <div style={{ marginTop: '1.25rem', textAlign: 'center', fontSize: '0.875rem', color: 'var(--color-forest-primary)', fontWeight: 600 }}>
              {analysisStep}
            </div>
          )}
        </div>

        {/* Right Info Guidance Panel */}
        <div className="analysis-info-panel">
          <div className="card card-cream">
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <LeafIcon size={18} />
              <span>Inspection Best Practices</span>
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
              For the highest early detection confidence, follow these foliar scouting guidelines:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div className="info-step-card">
                <div className="info-step-num">1</div>
                <div className="info-step-text">
                  <h4>Check Lower Foliage First</h4>
                  <p>Blight fungal spores splash from soil and damp ground to lower canopy leaves first.</p>
                </div>
              </div>

              <div className="info-step-card">
                <div className="info-step-num">2</div>
                <div className="info-step-text">
                  <h4>Inspect Under Morning Light</h4>
                  <p>Avoid excessive camera flash. Natural diffuse daylight reveals faint water-soaked margins.</p>
                </div>
              </div>

              <div className="info-step-card">
                <div className="info-step-num">3</div>
                <div className="info-step-text">
                  <h4>Micro-Climate Correlation</h4>
                  <p>Our algorithm pairs image features with atmospheric vapor pressure to calculate risk score.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card" style={{ backgroundColor: 'var(--color-sage-tint)', border: '1px solid var(--color-sage-soft)' }}>
            <span className="badge badge-demo" style={{ marginBottom: '0.5rem' }}>Demo Architecture</span>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--color-forest-dark)', marginBottom: '0.4rem' }}>
              Teammate Integration Ready
            </h4>
            <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', margin: 0 }}>
              This form automatically packages <code>crop</code>, <code>image</code>, and <code>location</code> into a clean handler ready for your backend REST API.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
