import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TreePine, User, Briefcase } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-bg">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-nepali">गैरे परिवार</span>
            <span className="title-english">Gairepariwar UK</span>
          </h1>
          <p className="hero-subtitle">
            Preserving our heritage from Baglung, Thana • Building our future in
            the UK
          </p>
          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => navigate('/family-tree')}
            >
              Explore Family Tree
            </button>
            <button
              className="btn-secondary"
              onClick={() => navigate('/about')}
            >
              Learn Our Story
            </button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Discover Our Community</h2>
          <div className="features-grid">
            <div
              className="feature-card"
              onClick={() => navigate('/family-tree')}
            >
              <div className="feature-icon">
                <TreePine size={40} />
              </div>
              <h3>Interactive Family Tree</h3>
              <p>
                Explore our family connections with a beautiful visual tree
                showing all generations and relationships
              </p>
            </div>
            <div
              className="feature-card"
              onClick={() => navigate('/leadership')}
            >
              <div className="feature-icon">
                <User size={40} />
              </div>
              <h3>Community Leadership</h3>
              <p>
                Meet our presidents and leaders who guide our community with
                wisdom and dedication
              </p>
            </div>
            <div
              className="feature-card"
              onClick={() => navigate('/contributions')}
            >
              <div className="feature-icon">
                <Briefcase size={40} />
              </div>
              <h3>Our Impact</h3>
              <p>
                See how we're making a difference through charitable work and
                cultural preservation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
