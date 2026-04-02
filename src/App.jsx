import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import AwardLevelsPage from './pages/AwardLevelsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ParticipantPortal from './pages/ParticipantPortal';
import FacilitatorPortal from './pages/FacilitatorPortal';
import ImpactStories from './pages/ImpactStories';
import EventsRecognition from './pages/EventsRecognition';
import Resources from './pages/Resources';
import GetInvolved from './pages/GetInvolved';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AwardPage from './pages/AwardPage';
import Leaderboard from './pages/Leaderboard';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/award-levels" element={<AwardLevelsPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/participant" element={<ParticipantPortal />} />
              <Route path="/facilitator" element={<FacilitatorPortal />} />
              <Route path="/impact-stories" element={<ImpactStories />} />
              <Route path="/events" element={<EventsRecognition />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/award/:level" element={<AwardPage />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;