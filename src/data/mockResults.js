/**
 * ============================================================================
 * CropGuard AI - Mock Results & Simulated Telemetry Data
 * ============================================================================
 * NOTE FOR TEAMMATES & BACKEND INTEGRATORS:
 * This file houses pre-configured DEMO SCENARIOS used for frontend presentation
 * until the backend disease classification model (PyTorch/TensorFlow/FastAPI)
 * and weather service (OpenWeather/Meteo API) are plugged in.
 *
 * HOW TO INTEGRATE YOUR REAL BACKEND:
 * 1. Open `analyzeCropWithBackend()` at the bottom of this file.
 * 2. Replace the simulated setTimeout with an actual fetch / axios POST request:
 *      const response = await fetch('http://localhost:8000/api/predict', {
 *        method: 'POST',
 *        body: formData // contains crop, image, location
 *      });
 *      return await response.json();
 * 3. Ensure your API response matches the structure of `MOCK_SCENARIOS`.
 * ============================================================================
 */

// Sample Leaf Data URIs (clean SVG leaf illustrations for instant testing)
export const SAMPLE_LEAF_IMAGES = {
  tomato_blight: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="100%" height="100%" fill="%232D3748"/><path d="M200,30 C270,70 330,160 270,250 C230,220 200,270 200,270 C200,270 170,220 130,250 C70,160 130,70 200,30 Z" fill="%2348BB78"/><circle cx="180" cy="110" r="22" fill="%23744210" opacity="0.85"/><circle cx="230" cy="150" r="28" fill="%23744210" opacity="0.85"/><circle cx="160" cy="190" r="18" fill="%23975A16" opacity="0.9"/><path d="M200,50 L200,250" stroke="%23276749" stroke-width="4"/><path d="M200,100 L160,80" stroke="%23276749" stroke-width="2"/><path d="M200,140 L240,120" stroke="%23276749" stroke-width="2"/><path d="M200,180 L160,160" stroke="%23276749" stroke-width="2"/><text x="200" y="285" fill="%23EDF2F7" font-size="14" font-family="sans-serif" text-anchor="middle">DEMO SAMPLE: Tomato Leaf with Late Blight Lesions</text></svg>`,

  potato_blight: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="100%" height="100%" fill="%232D3748"/><path d="M200,40 C280,80 320,180 260,250 C220,230 200,260 200,260 C200,260 180,230 140,250 C80,180 120,80 200,40 Z" fill="%2338A169"/><circle cx="170" cy="130" r="25" fill="%235F370E" opacity="0.85"/><circle cx="230" cy="120" r="18" fill="%235F370E" opacity="0.8"/><circle cx="210" cy="190" r="26" fill="%237B341E" opacity="0.85"/><path d="M200,60 L200,240" stroke="%2322543D" stroke-width="4"/><path d="M200,110 L150,90" stroke="%2322543D" stroke-width="2"/><path d="M200,150 L250,130" stroke="%2322543D" stroke-width="2"/><text x="200" y="285" fill="%23EDF2F7" font-size="14" font-family="sans-serif" text-anchor="middle">DEMO SAMPLE: Potato Leaf with Blight Spots</text></svg>`,

  healthy_leaf: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="100%" height="100%" fill="%231A202C"/><path d="M200,30 C270,70 330,160 270,250 C230,220 200,270 200,270 C200,270 170,220 130,250 C70,160 130,70 200,30 Z" fill="%2348BB78"/><path d="M200,50 L200,250" stroke="%232F855A" stroke-width="4"/><path d="M200,100 L150,80" stroke="%232F855A" stroke-width="2"/><path d="M200,130 L250,110" stroke="%232F855A" stroke-width="2"/><path d="M200,160 L150,140" stroke="%232F855A" stroke-width="2"/><path d="M200,190 L240,180" stroke="%232F855A" stroke-width="2"/><text x="200" y="285" fill="%23EDF2F7" font-size="14" font-family="sans-serif" text-anchor="middle">DEMO SAMPLE: Healthy Green Leaf (Vibrant & Clear)</text></svg>`
};

/**
 * Pre-defined mock scenarios showcasing different disease states & micro-climate profiles
 */
export const MOCK_SCENARIOS = {
  // Scenario 1: Tomato Late Blight (High Risk)
  tomato_late_blight: {
    id: 'tomato_late_blight',
    crop: 'Tomato',
    diseaseName: 'Late Blight',
    scientificName: 'Phytophthora infestans',
    confidence: 94.6,
    isHealthy: false,
    riskLevel: 'High', // 'Low' | 'Moderate' | 'High'
    riskScore: 88, // out of 100
    riskSummary: 'High outbreak probability within 48 hours due to combined high humidity and extended leaf moisture.',
    microClimate: {
      temperature: 18.5,
      temperatureUnit: '°C',
      temperatureStatus: 'Optimal for Sporulation (15–22°C)',
      humidity: 92,
      humidityUnit: '% RH',
      humidityStatus: 'Critical High (>85%)',
      rainfallForecast: 18.0,
      rainfallUnit: 'mm',
      rainfallProbability: 85,
      dewPoint: 17.2,
      leafWetnessHours: 8.5
    },
    recommendations: [
      {
        category: 'Immediate Action',
        title: 'Foliar Sanitation',
        description: 'Prune visibly water-soaked lower leaves and dispose in sealed bags away from the plot. Do not compost.'
      },
      {
        category: 'Chemical / Bio Spray',
        title: 'Preventive Fungicide Application',
        description: 'Apply copper hydroxide or systemic Mancozeb before the upcoming rain event to protect uninfected foliage.'
      },
      {
        category: 'Canopy & Airflow',
        title: 'Improve Ventilation',
        description: 'Increase staking and thin lower sucker branches to accelerate sunlight penetration and foliar drying.'
      },
      {
        category: 'Water Management',
        title: 'Cease Overhead Irrigation',
        description: 'Shift exclusively to root-zone drip irrigation during morning hours to prevent nighttime leaf wetness.'
      }
    ]
  },

  // Scenario 2: Potato Late Blight (High Risk)
  potato_late_blight: {
    id: 'potato_late_blight',
    crop: 'Potato',
    diseaseName: 'Potato Late Blight',
    scientificName: 'Phytophthora infestans',
    confidence: 96.2,
    isHealthy: false,
    riskLevel: 'High',
    riskScore: 92,
    riskSummary: 'Dangerous micro-climatic window detected. Spore washdown risks secondary tuber infection.',
    microClimate: {
      temperature: 16.8,
      temperatureUnit: '°C',
      temperatureStatus: 'High Fungal Vector (15–20°C)',
      humidity: 95,
      humidityUnit: '% RH',
      humidityStatus: 'Extreme Moisture Zone (>90%)',
      rainfallForecast: 24.5,
      rainfallUnit: 'mm',
      rainfallProbability: 90,
      dewPoint: 16.0,
      leafWetnessHours: 10.0
    },
    recommendations: [
      {
        category: 'Tuber Protection',
        title: 'Reinforce Soil Ridges',
        description: 'Build up soil around potato hills (earthing up) to stop rainwashed zoospore spores from reaching developing tubers.'
      },
      {
        category: 'Targeted Spray',
        title: 'Systemic Oomycete Treatment',
        description: 'Apply Dimethomorph or Metalaxyl + Chlorothalonil within 12 hours prior to precipitation onset.'
      },
      {
        category: 'Harvest Advisory',
        title: 'Hold Field Work',
        description: 'Do not harvest damp potatoes; wait for clear weather to prevent post-harvest bacterial soft rot.'
      }
    ]
  },

  // Scenario 3: Tomato Early Blight (Moderate Risk)
  tomato_early_blight: {
    id: 'tomato_early_blight',
    crop: 'Tomato',
    diseaseName: 'Early Blight (Target Spot)',
    scientificName: 'Alternaria solani',
    confidence: 88.4,
    isHealthy: false,
    riskLevel: 'Moderate',
    riskScore: 58,
    riskSummary: 'Moderate disease progression observed. Warm temperatures with intermittent leaf dew require monitoring.',
    microClimate: {
      temperature: 25.2,
      temperatureUnit: '°C',
      temperatureStatus: 'Warm Alternaria Range (24–29°C)',
      humidity: 74,
      humidityUnit: '% RH',
      humidityStatus: 'Moderate Moisture',
      rainfallForecast: 4.2,
      rainfallUnit: 'mm',
      rainfallProbability: 40,
      dewPoint: 20.1,
      leafWetnessHours: 4.5
    },
    recommendations: [
      {
        category: 'Soil Barrier',
        title: 'Apply Organic Straw Mulch',
        description: 'Cover bare soil beneath plants to prevent fungal spores from splashing onto lower leaves during rainfall.'
      },
      {
        category: 'Biological Treatment',
        title: 'Bacillus subtilis Bio-fungicide',
        description: 'Spray bio-fungicidal solutions on affected foliage in late afternoon to outcompete pathogenic spores.'
      },
      {
        category: 'Plant Nutrition',
        title: 'Potassium & Calcium Boost',
        description: 'Ensure adequate foliar potassium levels to thicken cell walls and resist fungal hyphae penetration.'
      }
    ]
  },

  // Scenario 4: Potato Early Blight (Moderate Risk)
  potato_early_blight: {
    id: 'potato_early_blight',
    crop: 'Potato',
    diseaseName: 'Early Blight',
    scientificName: 'Alternaria alternata / solani',
    confidence: 90.1,
    isHealthy: false,
    riskLevel: 'Moderate',
    riskScore: 62,
    riskSummary: 'Concentric ring lesions detected. Moderately favorable micro-climate conditions over next 72 hours.',
    microClimate: {
      temperature: 23.8,
      temperatureUnit: '°C',
      temperatureStatus: 'Favorable Warmth',
      humidity: 71,
      humidityUnit: '% RH',
      humidityStatus: 'Moderate',
      rainfallForecast: 6.0,
      rainfallUnit: 'mm',
      rainfallProbability: 45,
      dewPoint: 18.2,
      leafWetnessHours: 5.0
    },
    recommendations: [
      {
        category: 'Leaf Inspection',
        title: 'Daily Canopy Checks',
        description: 'Scout lowest leaves for expanding brown concentric "bullseye" rings.'
      },
      {
        category: 'Spraying Routine',
        title: 'Azoxystrobin / Mancozeb Spray',
        description: 'Initiate preventive application if nighttime temperatures remain above 20°C with fog.'
      }
    ]
  },

  // Scenario 5: Healthy Crop (Low Risk)
  healthy_crop: {
    id: 'healthy_crop',
    crop: 'Tomato / Potato',
    diseaseName: 'Healthy Crop Foliage',
    scientificName: 'No Pathogen Detected',
    confidence: 97.5,
    isHealthy: true,
    riskLevel: 'Low',
    riskScore: 18,
    riskSummary: 'Foliage exhibits vigorous chlorophyll density with no necrotic lesions. Micro-climate is well within safe thresholds.',
    microClimate: {
      temperature: 22.0,
      temperatureUnit: '°C',
      temperatureStatus: 'Optimal Crop Growth (20–24°C)',
      humidity: 52,
      humidityUnit: '% RH',
      humidityStatus: 'Low Fungal Danger Zone (<65%)',
      rainfallForecast: 0.0,
      rainfallUnit: 'mm',
      rainfallProbability: 10,
      dewPoint: 11.5,
      leafWetnessHours: 1.0
    },
    recommendations: [
      {
        category: 'Maintain Routine',
        title: 'Standard Drip Irrigation',
        description: 'Continue normal water schedule. Soil moisture is optimal for root absorption.'
      },
      {
        category: 'Preventive Vigilance',
        title: 'Post-Rain Micro-Climate Alert',
        description: 'No action required now. Re-scan leaves if local humidity spikes above 80% following future storm fronts.'
      },
      {
        category: 'Soil Health',
        title: 'Maintain Soil Microbial Balance',
        description: 'Periodic application of compost tea or beneficial mycorrhizae keeps natural plant immunity strong.'
      }
    ]
  }
};

/**
 * Simulated analysis function.
 * Teammates can replace this function with an API call to FastAPI, Flask, or Node!
 *
 * @param {Object} input - { crop: 'Tomato'|'Potato', location: string, imagePreview: string }
 * @returns {Promise<Object>} Formatted analysis result
 */
export async function simulateAnalysis({ crop, location, imagePreview, preferredScenario }) {
  // Simulate network latency (800ms) for realistic UX
  await new Promise((resolve) => setTimeout(resolve, 850));

  let chosenScenario;

  if (preferredScenario && MOCK_SCENARIOS[preferredScenario]) {
    chosenScenario = MOCK_SCENARIOS[preferredScenario];
  } else if (crop === 'Potato') {
    chosenScenario = MOCK_SCENARIOS.potato_late_blight;
  } else {
    // Default to Tomato Late Blight
    chosenScenario = MOCK_SCENARIOS.tomato_late_blight;
  }

  return {
    ...chosenScenario,
    crop: crop || chosenScenario.crop,
    location: location || 'Field Location Not Specified',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    date: new Date().toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }),
    userImage: imagePreview || SAMPLE_LEAF_IMAGES.tomato_blight,
    isDemoData: true // Clearly flagged as demo data
  };
}
