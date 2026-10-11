import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoBanner from './components/DemoBanner';
import HomePage from './pages/HomePage';
import AnalysisPage from './pages/AnalysisPage';
import ResultsPage from './pages/ResultsPage';
import AboutPage from './pages/AboutPage';
import { simulateAnalysis, MOCK_SCENARIOS } from './data/mockResults';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [showIntegrationModal, setShowIntegrationModal] = useState(false);

  // Smooth scroll to top on page navigation
  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Called when user submits the analysis form on AnalysisPage
  const handleAnalysisComplete = async ({ crop, location, imagePreview, imageName, preferredScenario }) => {
    try {
      const result = await simulateAnalysis({
        crop,
        location,
        imagePreview,
        preferredScenario
      });
      setAnalysisResult(result);
      navigateTo('results');
    } catch (err) {
      console.error('Error during analysis simulation:', err);
    }
  };

  // Switch demo scenarios from within results page
  const handleSelectScenario = (scenarioKey) => {
    const scenario = MOCK_SCENARIOS[scenarioKey];
    if (scenario) {
      setAnalysisResult((prev) => ({
        ...scenario,
        location: prev?.location || 'Nashik Valley, MH',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: 'Today',
        userImage: prev?.userImage || null,
        isDemoData: true
      }));
    }
  };

  return (
    <div className="app-container">
      {/* Top Demo Banner for hackathon clarity */}
      <DemoBanner onLearnMore={() => setShowIntegrationModal(true)} />

      {/* Main Navbar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Page Routing */}
      <main className="main-content">
        {currentPage === 'home' && (
          <HomePage
            onStartAnalysis={() => navigateTo('analysis')}
            onLearnMore={() => navigateTo('about')}
          />
        )}

        {currentPage === 'analysis' && (
          <AnalysisPage
            onAnalysisComplete={handleAnalysisComplete}
          />
        )}

        {currentPage === 'results' && (
          <ResultsPage
            analysisData={analysisResult}
            onAnalyzeAnother={() => navigateTo('analysis')}
            onSelectScenario={handleSelectScenario}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onStartAnalysis={() => navigateTo('analysis')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Teammate Integration Guide Modal */}
      {showIntegrationModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(20, 54, 39, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            zIndex: 999
          }}
          onClick={() => setShowIntegrationModal(false)}
        >
          <div 
            className="card"
            style={{ maxWidth: '600px', width: '100%', maxHeight: '90vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.75rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--color-forest-dark)' }}>
                🛠️ Teammate Backend Integration Guide
              </h3>
              <button 
                onClick={() => setShowIntegrationModal(false)}
                className="btn btn-outline"
                style={{ padding: '0.25rem 0.6rem', fontSize: '0.85rem' }}
              >
                ✕ Close
              </button>
            </div>

            <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              <p>
                <strong>Where is the mock data located?</strong><br />
                All mock responses and simulated predictions are isolated in:
                <br />
                <code>src/data/mockResults.js</code>
              </p>

              <p style={{ marginTop: '0.85rem' }}>
                <strong>How to connect your real API:</strong><br />
                When your backend teammate has their FastAPI, Flask, or Express server running:
              </p>

              <pre style={{ backgroundColor: '#1E293B', color: '#E2E8F0', padding: '0.85rem', borderRadius: '8px', fontSize: '0.8rem', overflowX: 'auto', marginTop: '0.5rem' }}>
{`// Inside src/data/mockResults.js:
export async function simulateAnalysis({ crop, location, imagePreview }) {
  const formData = new FormData();
  formData.append('crop', crop);
  formData.append('location', location);
  formData.append('image', imagePreview);

  const res = await fetch('http://localhost:8000/api/predict', {
    method: 'POST',
    body: formData
  });
  return await res.json();
}`}
              </pre>

              <p style={{ marginTop: '0.85rem' }}>
                This separation keeps frontend and backend decoupled, letting each team member work independently during the 6-hour hackathon!
              </p>
            </div>

            <div style={{ marginTop: '1.25rem', textAlign: 'right' }}>
              <button 
                className="btn btn-primary"
                onClick={() => setShowIntegrationModal(false)}
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
