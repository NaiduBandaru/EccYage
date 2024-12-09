import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import { HomePage } from './pages/HomePage';
import { SchedulePage } from './pages/SchedulePage';
import { TrackPage } from './pages/TrackPage';
import { CommunityPage } from './pages/CommunityPage';
import { RewardsPage } from './pages/RewardsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/track" element={<TrackPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;