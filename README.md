# CropGuard AI — Micro-Climatic Crop Disease Early Warning System
*Built by Team CodeNova for the 6-Hour Engineering Hackathon*

---

## 🌿 Problem Statement
**Micro-Climatic Crop Disease Early Warning System.**  
Traditional agricultural disease detection only identifies infections *after* leaves exhibit necrotic spots and irreversible crop defoliation has occurred.  
**CropGuard AI** solves this by correlating **computer vision leaf symptoms** with **micro-climatic canopy telemetry** (temperature, relative humidity, and rainfall forecasts) to alert farmers **24 to 48 hours before fungal spores germinate and spread**.

---

## 🎨 Design System
- **Colors:** Forest Green (`#1B4332`), Sage Green (`#52B788`, `#E8F5E9`), Soft Cream (`#FBFBF7`, `#FAF9F5`), and Crisp White.
- **Components:** Rounded cards (`border-radius: 16px/20px`), clean agro-tech typography, simple inline SVG icons, and a 100% responsive, mobile-friendly layout.

---

## 📂 Project Structure (What Each File Does)

```
c:\Users\503\Desktop\codenova\
├── index.html                   # Main HTML entry point for the Vite application
├── package.json                 # Project dependencies (React 18, Vite) and scripts
├── vite.config.js               # Vite build and development server configuration
├── standalone-preview.html      # Zero-install single-file browser preview (instant double-click test)
├── README.md                    # This beginner guide & documentation
│
└── src/
    ├── main.jsx                 # Mounts the React application into index.html
    ├── App.jsx                  # Main application router and state management
    ├── index.css                # Global design system, agricultural color tokens, and responsive styles
    │
    ├── data/
    │   └── mockResults.js       # [IMPORTANT FOR TEAMMATES] Simulated DEMO scenarios & backend integration guide
    │
    ├── components/
    │   ├── Navbar.jsx           # Responsive sticky header with logo and navigation links
    │   ├── Footer.jsx           # Clean footer with team credentials and hackathon badges
    │   ├── DemoBanner.jsx       # Prominent banner indicating DEMO DATA until backend is connected
    │   ├── RiskBadge.jsx        # Color-coded badge for Low, Moderate, and High disease risk
    │   ├── MetricCard.jsx       # Card displaying micro-climatic stats (temperature, humidity, rain)
    │   └── Icons.jsx            # Lightweight, dependency-free inline SVG icons (Leaf, Thermometer, etc.)
    │
    └── pages/
        ├── HomePage.jsx         # Title, tagline 'Predict Before It Spreads', features, and live simulation
        ├── AnalysisPage.jsx     # Crop dropdown (Tomato & Potato), image upload with preview, location input, and validation
        ├── ResultsPage.jsx      # Uploaded image, disease identification, confidence, weather indicators, risk badge, recommendations
        └── AboutPage.jsx        # Explains the 3-step pipeline & the "Smith Period" micro-climatic science
```

---

## 🚀 How to Run the Website

### Option 1: Using Node.js & Vite (Standard Development Server)

1. Open a terminal (PowerShell or Command Prompt) in this project folder:
   ```bash
   cd c:\Users\503\Desktop\codenova
   ```

2. If Node.js is installed on your computer, install the project dependencies:
   ```bash
   npm install
   ```

3. Start the local Vite development server:
   ```bash
   npm run dev
   ```

4. Vite will display a local URL (usually `http://localhost:3000` or `http://localhost:5173`). Open that URL in your browser to test the full website!

---

### Option 2: Instant Zero-Install Browser Preview (Fail-Safe for Hackathons)

If Node.js is not yet installed on your machine during the hackathon:
1. Simply double-click the file **`standalone-preview.html`** in your file explorer, OR
2. Open your terminal in this directory and run Python's built-in web server:
   ```powershell
   python -m http.server 3000
   ```
   Then open `http://localhost:3000/standalone-preview.html` in Chrome or Edge.  
   The entire application runs smoothly with full interactivity!

---

## 🛠️ How Backend Teammates Connect Their Real API

To keep teammates from overwriting each other's code during the 6-hour hackathon, all mock data is isolated in a single file:
👉 **`src/data/mockResults.js`**

When your teammate finishes building the machine learning model (e.g. FastAPI / Flask / Node backend):
1. Open `src/data/mockResults.js`.
2. Locate the function `simulateAnalysis({ crop, location, imagePreview })`.
3. Replace the `setTimeout` simulation with your real API request:

```javascript
export async function simulateAnalysis({ crop, location, imagePreview }) {
  const formData = new FormData();
  formData.append('crop', crop);
  formData.append('location', location);
  formData.append('image', imagePreview);

  // Call your backend API endpoint:
  const response = await fetch('http://localhost:8000/api/predict', {
    method: 'POST',
    body: formData
  });

  return await response.json();
}
```

The frontend will automatically render your real AI predictions, confidence score, weather metrics, and recommendations without modifying any UI components!

---

## 📱 Features Checklist Completed
- [x] **Homepage:** Title, tagline *"Predict Before It Spreads"*, introduction, value pillars, and Start Analysis button.
- [x] **Crop Analysis:** Target crop selection (Tomato & Potato), image upload with live preview & removal, location input with presets, and missing-field validation.
- [x] **Results Dashboard:** Shows uploaded image preview, pathogen identification, model confidence bar, micro-climatic indicators (temperature, humidity, rainfall forecast, leaf wetness), future disease risk badge (Low / Moderate / High), and actionable preventive recommendations.
- [x] **About Page:** Details how CropGuard AI works, including the 3-pillar pipeline and the *Smith Period* agro-climatic principle.
- [x] **Clearly Labelled DEMO DATA:** Highlighted banner and indicators on all pages.
- [x] **Hackathon Scenario Switcher:** Interactive switcher on the Results page allows judges to toggle between High Risk Blight, Moderate Risk Leaf Spot, and Healthy Crop profiles instantly.
- [x] **Mobile Friendly:** Fully responsive navigation drawer and responsive flex/grid layouts.
- [x] **Preserved Teammate Files:** Existing files like `codenova.py` were left completely untouched.

---
*Created for Team CodeNova • 6-Hour Engineering Hackathon*
