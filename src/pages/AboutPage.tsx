import React, { useState } from 'react';
import {
  MapPin,
  Users,
  Calendar,
  Home,
  Briefcase,
  Heart,
  BookOpen,
  Globe,
  Mountain,
  Scroll,
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('origin');

  return (
    <div className="about-page">
      <style>{`
        .about-page {
          min-height: 100vh;
          background: #f8f9fa;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          height: 500px;
          overflow: hidden;
          background: linear-gradient(135deg, #c8102e 0%, #003893 100%);
        }

        .hero-backdrop {
          position: absolute;
          inset: 0;
          opacity: 0.2;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .hero-content {
          position: relative;
          height: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 30px;
          opacity: 0.95;
        }

        .origin-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.2);
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 1.1rem;
          backdrop-filter: blur(10px);
        }

        /* Timeline Tabs */
        .timeline-container {
          max-width: 1200px;
          margin: -50px auto 60px;
          padding: 0 24px;
          position: relative;
          z-index: 10;
        }

        .timeline-tabs {
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          padding: 20px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .timeline-tab {
          padding: 12px 24px;
          border: none;
          background: #f0f0f0;
          color: #666;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .timeline-tab:hover {
          background: #e0e0e0;
        }

        .timeline-tab.active {
          background: #c8102e;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(200, 16, 46, 0.3);
        }

        /* Content Sections */
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .content-section {
          background: white;
          border-radius: 16px;
          padding: 60px;
          margin-bottom: 40px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          animation: fadeIn 0.6s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
        }

        .section-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #c8102e 0%, #003893 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .section-title {
          font-size: 2.5rem;
          color: #1a1a1a;
          margin: 0;
        }

        .highlight-box {
          background: #f8f9fa;
          border-left: 4px solid #c8102e;
          padding: 20px;
          margin: 20px 0;
          border-radius: 8px;
        }

        .highlight-box h4 {
          color: #c8102e;
          margin-bottom: 10px;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin: 40px 0;
        }

        .stat-card {
          background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid #eee;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #c8102e;
          margin-bottom: 10px;
        }

        .stat-label {
          color: #666;
          font-size: 1.1rem;
        }

        /* Family Tree Visual */
        .tree-visual {
          text-align: center;
          margin: 40px 0;
          padding: 40px;
          background: #f8f9fa;
          border-radius: 12px;
        }

        .tree-branch {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 20px 0;
          position: relative;
        }

        .tree-node {
          background: white;
          padding: 15px 25px;
          border-radius: 50px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          margin: 0 20px;
          position: relative;
        }

        .tree-node.primary {
          background: #c8102e;
          color: white;
          font-weight: bold;
        }

        .arrow {
          color: #c8102e;
          font-size: 24px;
        }

        /* UK Map */
        .uk-presence {
          margin: 40px 0;
        }

        .location-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .location-card {
          background: white;
          padding: 25px;
          border-radius: 12px;
          border: 2px solid #f0f0f0;
          transition: all 0.3s ease;
        }

        .location-card:hover {
          border-color: #c8102e;
          transform: translateX(5px);
        }

        .location-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 10px;
        }

        .location-details {
          color: #666;
          line-height: 1.6;
        }

        /* Timeline */
        .history-timeline {
          position: relative;
          padding: 40px 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #ddd;
          transform: translateX(-50%);
        }

        .timeline-item {
          display: flex;
          margin-bottom: 60px;
          position: relative;
        }

        .timeline-item:nth-child(odd) {
          flex-direction: row-reverse;
        }

        .timeline-content {
          flex: 1;
          padding: 0 40px;
        }

        .timeline-marker {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          background: #c8102e;
          border-radius: 50%;
          border: 4px solid white;
          box-shadow: 0 0 0 4px #f0f0f0;
        }

        .timeline-date {
          font-size: 1.5rem;
          font-weight: 700;
          color: #c8102e;
          margin-bottom: 10px;
        }

        .timeline-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .timeline-description {
          color: #666;
          line-height: 1.6;
        }

        /* Community Features */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin: 40px 0;
        }

        .feature-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          background: linear-gradient(135deg, #c8102e 0%, #003893 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .content-section {
            padding: 30px;
          }

          .timeline-tabs {
            flex-direction: column;
          }

          .timeline-tab {
            width: 100%;
            justify-content: center;
          }

          .timeline-line {
            left: 20px;
          }

          .timeline-item,
          .timeline-item:nth-child(odd) {
            flex-direction: column;
            padding-left: 50px;
          }

          .timeline-marker {
            left: 20px;
          }

          .timeline-content {
            padding: 0;
          }
        }
      `}</style>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-backdrop"></div>
        <div className="hero-content">
          <h1 className="hero-title">गैरे परिवार UK</h1>
          <p className="hero-subtitle">
            From Thana's terraces to Britain's cities
          </p>
          <div className="origin-badge">
            <Mountain size={24} />
            <span>Est. Late 1600s • Thana, Galkot, Baglung</span>
          </div>
        </div>
      </section>
      {/* Timeline Tabs */}
      <div className="timeline-container">
        <div className="timeline-tabs">
          <button
            className={`timeline-tab ${activeTab === 'origin' ? 'active' : ''}`}
            onClick={() => setActiveTab('origin')}
          >
            <Scroll size={20} />
            Our Origin
          </button>
          <button
            className={`timeline-tab ${
              activeTab === 'journey' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('journey')}
          >
            <Globe size={20} />
            Migration Journey
          </button>
          <button
            className={`timeline-tab ${activeTab === 'uk' ? 'active' : ''}`}
            onClick={() => setActiveTab('uk')}
          >
            <Home size={20} />
            UK Presence
          </button>
          <button
            className={`timeline-tab ${
              activeTab === 'mission' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('mission')}
          >
            <Heart size={20} />
            Our Mission
          </button>
        </div>
      </div>
      {/* Content Sections */}
      <div className="content-container">
        {activeTab === 'origin' && (
          <div className="content-section">
            <div className="section-header">
              <div className="section-icon">
                <Mountain size={30} />
              </div>
              <h2 className="section-title">
                The Birth of Gaire: From Bhattarai to Hillside Dwellers
              </h2>
            </div>

            <p
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                marginBottom: '30px',
              }}
            >
              Our story begins in the late 1600s when the small Malla-era
              principality of Galkot needed Sanskrit-literate priests and
              record-keepers. A handful of Bahun families of the Bhattarai stock
              were invited to settle on the ridge now known as Thana, perched at
              1,578 meters overlooking the Daram Khola valley.
            </p>

            <div className="highlight-box">
              <h4>The Name "Gaire"</h4>
              <p>
                The nickname "Gaire" (गैरे) meaning "hillside/terrace dweller"
                gradually replaced "Bhattarai" for our branch, similar to how
                "Tiwari → Timilsina" evolved elsewhere. Today, we are known as
                Vasishtha-gotriya Bhattarai (Gaire), with Thana recognized as
                "गैरेहरुको उद्गम स्थल" - the birthplace of all Gaires.
              </p>
            </div>

            <div className="tree-visual">
              <h3 style={{ marginBottom: '30px', color: '#c8102e' }}>
                Our Lineage Evolution
              </h3>
              <div className="tree-branch">
                <div className="tree-node">Bhattarai Brahmins</div>
                <span className="arrow">→</span>
                <div className="tree-node">Invited to Galkot (1600s)</div>
                <span className="arrow">→</span>
                <div className="tree-node primary">Gaire of Thana</div>
              </div>
            </div>

            <div className="history-timeline">
              <div className="timeline-line"></div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-date">1600s - 1700s</div>
                  <div className="timeline-title">The Founding Era</div>
                  <div className="timeline-description">
                    Bhattarai Brahmin families invited to serve as priests and
                    record-keepers in Galkot principality. Settlement
                    established on Thana ridge.
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-date">1920 - 1940</div>
                  <div className="timeline-title">
                    First Documentary Evidence
                  </div>
                  <div className="timeline-description">
                    "मुखिया काशीराम गैरे (ठाना)" - Headman Kashi Ram Gaire of
                    Thana listed among 50 revenue collectors reporting to the
                    local Malla court.
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-date">1960s - 1980s</div>
                  <div className="timeline-title">
                    The Great Migration Begins
                  </div>
                  <div className="timeline-description">
                    Men from Thana join seasonal flows to India, and after 1970,
                    to Japan and the Gulf. The foundation for international
                    migration is laid.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'journey' && (
          <div className="content-section">
            <div className="section-header">
              <div className="section-icon">
                <Globe size={30} />
              </div>
              <h2 className="section-title">
                From Himalayan Terraces to Global Horizons
              </h2>
            </div>

            <p
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                marginBottom: '40px',
              }}
            >
              The migration story of the Gaire family reflects the broader
              narrative of Nepal's diaspora - a journey driven by aspiration,
              opportunity, and the enduring strength of family bonds.
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">16,000+</div>
                <div className="stat-label">Gaires in Nepal</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">600+</div>
                <div className="stat-label">In India</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">60-70</div>
                <div className="stat-label">In the UK</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">36</div>
                <div className="stat-label">Countries Worldwide</div>
              </div>
            </div>

            <div className="highlight-box">
              <h4>Ward 3, Thana - A Village Transformed</h4>
              <p>
                A 2024 study reveals that Ward 3 (Thana's ward) now sends the
                single biggest share of overseas workers (487) in Galkot
                municipality. While this has brought prosperity, it has also
                left many terraced fields untended - a bittersweet reminder of
                change.
              </p>
            </div>

            <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
              Migration Waves
            </h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <Calendar size={40} />
                </div>
                <h4>1960s - 1980s</h4>
                <p>
                  Seasonal migration to India for work, establishing networks
                  and remittance patterns
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Briefcase size={40} />
                </div>
                <h4>1970s - 1990s</h4>
                <p>
                  Expansion to Japan and Gulf countries, primarily in
                  construction and service sectors
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <BookOpen size={40} />
                </div>
                <h4>Late 1990s - Present</h4>
                <p>
                  Student visas to UK, healthcare recruitment, and skilled
                  worker programs
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'uk' && (
          <div className="content-section">
            <div className="section-header">
              <div className="section-icon">
                <Home size={30} />
              </div>
              <h2 className="section-title">
                Gaire Families in the United Kingdom
              </h2>
            </div>

            <p
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                marginBottom: '40px',
              }}
            >
              From isolated arrivals in the late 1990s to a growing community of
              60-70 individuals today, Gaire families have established roots
              across the UK while maintaining strong connections to Thana.
            </p>

            <div className="uk-presence">
              <h3>Where We've Settled</h3>
              <div className="location-grid">
                <div className="location-card">
                  <div className="location-name">
                    <MapPin
                      size={20}
                      style={{
                        display: 'inline',
                        marginRight: '8px',
                        color: '#c8102e',
                      }}
                    />
                    Aldershot / Farnborough
                  </div>
                  <div className="location-details">
                    The heart of the Nepali community around former Gurkha
                    bases. Many Gaire families have settled here, drawn by the
                    established Nepali infrastructure and community support.
                  </div>
                </div>
                <div className="location-card">
                  <div className="location-name">
                    <MapPin
                      size={20}
                      style={{
                        display: 'inline',
                        marginRight: '8px',
                        color: '#c8102e',
                      }}
                    />
                    Greater London
                  </div>
                  <div className="location-details">
                    Concentrated in Stratford-Ilford, Wembley & Greenwich areas.
                    Home to students and professionals working in the capital's
                    diverse economy.
                  </div>
                </div>
                <div className="location-card">
                  <div className="location-name">
                    <MapPin
                      size={20}
                      style={{
                        display: 'inline',
                        marginRight: '8px',
                        color: '#c8102e',
                      }}
                    />
                    Manchester / Stockport
                  </div>
                  <div className="location-details">
                    A growing community centered around NHS hospital placements
                    and the city's thriving tech sector.
                  </div>
                </div>
              </div>
            </div>

            <div className="highlight-box" style={{ marginTop: '40px' }}>
              <h4>How We Contribute</h4>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '15px',
                  marginTop: '15px',
                }}
              >
                <div>• NHS nursing & care home workers</div>
                <div>• MSc/PhD students in IT & engineering</div>
                <div>• Software QA and DevOps professionals</div>
                <div>• Community volunteers and activists</div>
              </div>
            </div>

            <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
              Community Connections
            </h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <Users size={40} />
                </div>
                <h4>NRNA-UK Gandaki Chapter</h4>
                <p>
                  Maintains a Viber group "Baglung-Galkot Family" connecting all
                  families
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Heart size={40} />
                </div>
                <h4>UK Pashupatinath Temple</h4>
                <p>
                  Regular volunteers like Sabita Gaire help maintain our
                  spiritual connections
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Globe size={40} />
                </div>
                <h4>Digital Networks</h4>
                <p>"Nepalese in the UK ❤️" Facebook group with 110k+ members</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'mission' && (
          <div className="content-section">
            <div className="section-header">
              <div className="section-icon">
                <Heart size={30} />
              </div>
              <h2 className="section-title">Our Mission & Vision</h2>
            </div>

            <p
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                marginBottom: '40px',
              }}
            >
              Gairepariwar UK exists to preserve our heritage, strengthen our
              bonds, and build a prosperous future for all Gaire families in the
              United Kingdom.
            </p>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <Scroll size={40} />
                </div>
                <h4>Preserve Our Heritage</h4>
                <p>
                  Document and share our 300+ year history from Thana. Maintain
                  our Vasishtha-gotriya identity and pass on our stories to
                  future generations.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Users size={40} />
                </div>
                <h4>Strengthen Community</h4>
                <p>
                  Connect the 60-70 Gaire individuals across the UK. Create
                  support networks for new arrivals and celebrate our
                  achievements together.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Heart size={40} />
                </div>
                <h4>Give Back</h4>
                <p>
                  Support development in Thana village. Contribute to both
                  British society and our ancestral homeland through charitable
                  initiatives.
                </p>
              </div>
            </div>

            <div className="highlight-box" style={{ marginTop: '40px' }}>
              <h4>Looking Forward</h4>
              <p>
                As we build Gairepariwar UK, we honor the vision of our
                ancestors who first settled on Thana's terraces. From Headman
                Kashiram Gaire to today's NHS nurses and tech professionals,
                each generation adds a new chapter to our story. Together, we're
                creating a legacy that bridges continents while keeping our
                roots firmly planted in the soil of Thana.
              </p>
            </div>

            <div
              style={{
                textAlign: 'center',
                marginTop: '50px',
                padding: '40px',
                background: '#f8f9fa',
                borderRadius: '12px',
              }}
            >
              <h3 style={{ color: '#c8102e', marginBottom: '20px' }}>
                Join Our Journey
              </h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
                Whether you're a Gaire by birth or marriage, a friend of the
                family, or simply interested in our story, you're welcome to be
                part of Gairepariwar UK.
              </p>
              <button
                style={{
                  background: '#c8102e',
                  color: 'white',
                  border: 'none',
                  padding: '15px 40px',
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                Connect With Us
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
