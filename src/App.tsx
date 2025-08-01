import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import FamilyTreePage from './pages/FamilyTreePage';
import LeadershipPage from './pages/LeadershipPage';
import ContributionsPage from './pages/ContributionsPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import Footer from './components/Footer';
import './styles/app.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/family-tree" element={<FamilyTreePage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/contributions" element={<ContributionsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
