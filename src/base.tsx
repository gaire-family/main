import React, { useState, useEffect, useRef } from 'react';
import {
  Home,
  Users,
  User,
  Briefcase,
  Calendar,
  Image,
  Info,
  FileText,
  Menu,
  X,
  Heart,
  TreePine,
  Sparkles,
} from 'lucide-react';

// React Router simulation (since we can't import it)
const Router: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>{children}</>
);
const Routes: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>{children}</>
);
const Route: React.FC<{ path: string; element: React.ReactNode }> = () => null;
const Link: React.FC<{
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ children, className, onClick }) => (
  <a
    href="#"
    className={className}
    onClick={(e) => {
      e.preventDefault();
      onClick?.();
    }}
  >
    {children}
  </a>
);
const useNavigate = () => (path: string) => {};
const useLocation = () => ({ pathname: '/' });

// TypeScript Interfaces
interface FamilyMember {
  id: string;
  name: string;
  generation: number;
  parentId?: string;
  spouseId?: string;
  spouseName?: string;
  location?: string;
  occupation?: string;
  birthYear?: number;
  children?: string[];
  x?: number;
  y?: number;
}

// Enhanced Family Data
const familyData: FamilyMember[] = [
  {
    id: '1',
    name: 'Bhim Bahadur Gaire',
    generation: 1,
    spouseName: 'Maya Devi Gaire',
    birthYear: 1940,
    children: ['2', '3', '4'],
    location: 'Baglung, Nepal (Origin)',
  },
  {
    id: '2',
    name: 'Ram Prasad Gaire',
    generation: 2,
    parentId: '1',
    spouseName: 'Kamala Gaire',
    location: 'London, UK',
    occupation: 'Civil Engineer',
    birthYear: 1965,
    children: ['5', '6', '7'],
  },
  {
    id: '3',
    name: 'Shyam Kumar Gaire',
    generation: 2,
    parentId: '1',
    spouseName: 'Radha Gaire',
    location: 'Manchester, UK',
    occupation: 'Medical Doctor',
    birthYear: 1968,
    children: ['8', '9'],
  },
  {
    id: '4',
    name: 'Hari Prasad Gaire',
    generation: 2,
    parentId: '1',
    spouseName: 'Sunita Gaire',
    location: 'Birmingham, UK',
    occupation: 'Business Owner',
    birthYear: 1970,
    children: ['10'],
  },
  {
    id: '5',
    name: 'Gita Gaire',
    generation: 3,
    parentId: '2',
    location: 'London, UK',
    occupation: 'Teacher',
    birthYear: 1990,
  },
  {
    id: '6',
    name: 'Sita Gaire',
    generation: 3,
    parentId: '2',
    spouseName: 'Rajan Sharma',
    location: 'Birmingham, UK',
    occupation: 'NHS Nurse',
    birthYear: 1992,
    children: ['11', '12'],
  },
  {
    id: '7',
    name: 'Arjun Gaire',
    generation: 3,
    parentId: '2',
    location: 'London, UK',
    occupation: 'Software Engineer',
    birthYear: 1995,
  },
  {
    id: '8',
    name: 'Anita Gaire',
    generation: 3,
    parentId: '3',
    spouseName: 'David Smith',
    location: 'Manchester, UK',
    occupation: 'Architect',
    birthYear: 1993,
  },
  {
    id: '9',
    name: 'Bikash Gaire',
    generation: 3,
    parentId: '3',
    spouseName: 'Priya Thapa',
    location: 'Leeds, UK',
    occupation: 'Restaurant Owner',
    birthYear: 1996,
    children: ['13'],
  },
  {
    id: '10',
    name: 'Manish Gaire',
    generation: 3,
    parentId: '4',
    location: 'Birmingham, UK',
    occupation: 'Medical Student',
    birthYear: 1998,
  },
  {
    id: '11',
    name: 'Aarav Sharma-Gaire',
    generation: 4,
    parentId: '6',
    location: 'Birmingham, UK',
    birthYear: 2020,
  },
  {
    id: '12',
    name: 'Aanya Sharma-Gaire',
    generation: 4,
    parentId: '6',
    location: 'Birmingham, UK',
    birthYear: 2022,
  },
  {
    id: '13',
    name: 'Nirvan Gaire',
    generation: 4,
    parentId: '9',
    location: 'Leeds, UK',
    birthYear: 2023,
  },
];

// Navigation Component
const Navigation: React.FC<{
  currentPath: string;
  onNavigate: (path: string) => void;
}> = ({ currentPath, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/family-tree', label: 'Family Tree', icon: TreePine },
    { path: '/leadership', label: 'Leadership', icon: User },
    { path: '/contributions', label: 'Our Work', icon: Briefcase },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/gallery', label: 'Gallery', icon: Image },
    { path: '/about', label: 'About', icon: Info },
    { path: '/resources', label: 'Resources', icon: FileText },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo-link" onClick={() => onNavigate('/')}>
          <div className="logo-wrapper">
            <div className="logo-circle">
              <TreePine size={30} />
            </div>
            <div className="logo-text">
              <h1>गैरे परिवार</h1>
              <p>Gairepariwar UK</p>
            </div>
          </div>
        </Link>

        <div className="nav-links desktop">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${
                currentPath === item.path ? 'active' : ''
              }`}
              onClick={() => onNavigate(item.path)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-link ${
                currentPath === item.path ? 'active' : ''
              }`}
              onClick={() => {
                onNavigate(item.path);
                setMobileOpen(false);
              }}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

// Creative Family Tree Component
const FamilyTreePage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Calculate tree layout
  const calculateTreeLayout = () => {
    const layout = [...familyData];
    const generations = Array.from(
      new Set(layout.map((m) => m.generation))
    ).sort();

    generations.forEach((gen, genIndex) => {
      const membersInGen = layout.filter((m) => m.generation === gen);
      const yPosition = 200 + genIndex * 280;

      // Calculate x positions to spread branches
      membersInGen.forEach((member, index) => {
        const spacing = gen === 1 ? 0 : gen === 2 ? 400 : 250;
        const totalWidth = (membersInGen.length - 1) * spacing;
        const startX = 800 - totalWidth / 2;
        member.x = startX + index * spacing;
        member.y = yPosition;
      });
    });

    return layout;
  };

  const treeLayout = calculateTreeLayout();

  const drawTreeBranch = (parent: FamilyMember, child: FamilyMember) => {
    if (!parent.x || !parent.y || !child.x || !child.y) return null;

    const controlPoint1Y = parent.y + 100;
    const controlPoint2Y = child.y - 100;

    return (
      <g key={`branch-${parent.id}-${child.id}`}>
        {/* Tree branch path */}
        <path
          d={`M ${parent.x} ${parent.y + 60} 
              C ${parent.x} ${controlPoint1Y}, 
                ${child.x} ${controlPoint2Y}, 
                ${child.x} ${child.y - 60}`}
          stroke="url(#woodGradient)"
          strokeWidth="8"
          fill="none"
          className="tree-branch"
        />
        {/* Decorative leaves */}
        <circle
          cx={parent.x}
          cy={parent.y + 100}
          r="4"
          fill="#228B22"
          opacity="0.6"
        />
        <circle
          cx={child.x}
          cy={child.y - 100}
          r="4"
          fill="#228B22"
          opacity="0.6"
        />
      </g>
    );
  };

  const getMemberById = (id: string) => treeLayout.find((m) => m.id === id);

  return (
    <div className="family-tree-page">
      <div className="tree-hero">
        <h1>Our Family Tree</h1>
        <p>From the roots in Baglung to branches across the UK</p>
        <div className="tree-stats">
          <div className="stat-item">
            <Sparkles size={20} />
            <span>{familyData.length} Members</span>
          </div>
          <div className="stat-item">
            <TreePine size={20} />
            <span>4 Generations</span>
          </div>
          <div className="stat-item">
            <Home size={20} />
            <span>6 UK Cities</span>
          </div>
        </div>
      </div>

      <div className="tree-container">
        <svg
          ref={svgRef}
          width="1600"
          height="1200"
          viewBox="0 0 1600 1200"
          className="family-tree-svg"
        >
          <defs>
            {/* Wood texture gradient */}
            <linearGradient id="woodGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: '#8B4513', stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: '#A0522D', stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: '#8B4513', stopOpacity: 1 }}
              />
            </linearGradient>

            {/* Leaf pattern */}
            <pattern
              id="leafPattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="25" cy="25" r="20" fill="#228B22" opacity="0.1" />
              <circle cx="75" cy="75" r="15" fill="#32CD32" opacity="0.1" />
              <circle cx="75" cy="25" r="18" fill="#228B22" opacity="0.1" />
              <circle cx="25" cy="75" r="22" fill="#32CD32" opacity="0.1" />
            </pattern>
          </defs>

          {/* Background decoration */}
          <rect width="1600" height="1200" fill="url(#leafPattern)" />

          {/* Tree trunk base */}
          <rect
            x="780"
            y="150"
            width="40"
            height="1000"
            fill="url(#woodGradient)"
            opacity="0.3"
            rx="20"
          />

          {/* Draw branches */}
          <g className="branches">
            {treeLayout.map((member) => {
              if (member.children) {
                return member.children.map((childId) => {
                  const child = getMemberById(childId);
                  if (child) return drawTreeBranch(member, child);
                  return null;
                });
              }
              return null;
            })}
          </g>

          {/* Draw family members */}
          <g className="members">
            {treeLayout.map((member) => {
              if (!member.x || !member.y) return null;
              const isSelected = selectedMember === member.id;
              const isHovered = hoveredMember === member.id;

              return (
                <g
                  key={member.id}
                  className={`member-node ${isSelected ? 'selected' : ''} ${
                    isHovered ? 'hovered' : ''
                  }`}
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                  onClick={() =>
                    setSelectedMember(isSelected ? null : member.id)
                  }
                  style={{ cursor: 'pointer' }}
                >
                  {/* Glow effect */}
                  {(isSelected || isHovered) && (
                    <circle
                      cx={member.x}
                      cy={member.y}
                      r="80"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="2"
                      opacity="0.5"
                      className="glow-effect"
                    />
                  )}

                  {/* Member card background */}
                  <rect
                    x={member.x - 120}
                    y={member.y - 60}
                    width="240"
                    height="120"
                    rx="15"
                    fill="white"
                    stroke={isSelected ? '#c8102e' : '#ddd'}
                    strokeWidth={isSelected ? '3' : '2'}
                    filter="url(#shadow)"
                    className="member-card-bg"
                  />

                  {/* Generation badge */}
                  <circle
                    cx={member.x - 100}
                    cy={member.y - 40}
                    r="15"
                    fill="#c8102e"
                  />
                  <text
                    x={member.x - 100}
                    y={member.y - 35}
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    G{member.generation}
                  </text>

                  {/* Member name */}
                  <text
                    x={member.x}
                    y={member.y - 20}
                    textAnchor="middle"
                    className="member-name"
                    fontSize="16"
                    fontWeight="bold"
                    fill="#1a1a1a"
                  >
                    {member.name}
                  </text>

                  {/* Spouse in brackets */}
                  {member.spouseName && (
                    <text
                      x={member.x}
                      y={member.y}
                      textAnchor="middle"
                      fontSize="14"
                      fill="#c8102e"
                      fontStyle="italic"
                    >
                      [ ♥ {member.spouseName} ]
                    </text>
                  )}

                  {/* Birth year */}
                  <text
                    x={member.x}
                    y={member.y + 20}
                    textAnchor="middle"
                    fontSize="12"
                    fill="#666"
                  >
                    b. {member.birthYear}
                  </text>

                  {/* Location */}
                  <text
                    x={member.x}
                    y={member.y + 40}
                    textAnchor="middle"
                    fontSize="11"
                    fill="#003893"
                  >
                    📍 {member.location}
                  </text>
                </g>
              );
            })}
          </g>

          {/* Shadow filter */}
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="2" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.2" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Selected member details panel */}
        {selectedMember && (
          <div className="member-details-panel">
            {(() => {
              const member = getMemberById(selectedMember);
              if (!member) return null;

              return (
                <>
                  <h3>{member.name}</h3>
                  <div className="detail-grid">
                    {member.spouseName && (
                      <div className="detail-item">
                        <Heart size={16} />
                        <span>
                          Married to: <strong>{member.spouseName}</strong>
                        </span>
                      </div>
                    )}
                    {member.occupation && (
                      <div className="detail-item">
                        <Briefcase size={16} />
                        <span>{member.occupation}</span>
                      </div>
                    )}
                    <div className="detail-item">
                      <Home size={16} />
                      <span>{member.location}</span>
                    </div>
                    <div className="detail-item">
                      <Calendar size={16} />
                      <span>Born: {member.birthYear}</span>
                    </div>
                    {member.children && (
                      <div className="detail-item">
                        <Users size={16} />
                        <span>{member.children.length} children</span>
                      </div>
                    )}
                  </div>
                  <button
                    className="close-details"
                    onClick={() => setSelectedMember(null)}
                  >
                    Close Details
                  </button>
                </>
              );
            })()}
          </div>
        )}
      </div>

      {/* Tree Legend */}
      <div className="tree-legend">
        <h3>Family Tree Guide</h3>
        <div className="legend-items">
          <div className="legend-item">
            <div
              className="legend-color"
              style={{ background: '#c8102e' }}
            ></div>
            <span>Generation Number</span>
          </div>
          <div className="legend-item">
            <span style={{ color: '#c8102e' }}>[ ♥ Name ]</span>
            <span>Spouse</span>
          </div>
          <div className="legend-item">
            <span>📍</span>
            <span>Current Location</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Home Page
const HomePage: React.FC<{ onNavigate: (path: string) => void }> = ({
  onNavigate,
}) => {
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
              onClick={() => onNavigate('/family-tree')}
            >
              Explore Family Tree
            </button>
            <button
              className="btn-secondary"
              onClick={() => onNavigate('/about')}
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
              onClick={() => onNavigate('/family-tree')}
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
              onClick={() => onNavigate('/leadership')}
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
              onClick={() => onNavigate('/contributions')}
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

// Other page components (simplified)
const LeadershipPage = () => (
  <div className="page-container">
    <h1>Community Leadership</h1>
    <p>Our presidents and their contributions - Coming soon!</p>
  </div>
);

const ContributionsPage = () => (
  <div className="page-container">
    <h1>Our Contributions</h1>
    <p>Community impact and achievements - Coming soon!</p>
  </div>
);

const EventsPage = () => (
  <div className="page-container">
    <h1>Events Calendar</h1>
    <p>Upcoming community gatherings - Coming soon!</p>
  </div>
);

const GalleryPage = () => (
  <div className="page-container">
    <h1>Photo Gallery</h1>
    <p>Memories from our events - Coming soon!</p>
  </div>
);

const AboutPage = () => (
  <div className="page-container">
    <h1>About Gairepariwar</h1>
    <p>Our story from Nepal to UK - Coming soon!</p>
  </div>
);

const ResourcesPage = () => (
  <div className="page-container">
    <h1>Resources</h1>
    <p>Important documents and links - Coming soon!</p>
  </div>
);

// Main App Component
export default function App() {
  const [currentPath, setCurrentPath] = useState('/');

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={setCurrentPath} />;
      case '/family-tree':
        return <FamilyTreePage />;
      case '/leadership':
        return <LeadershipPage />;
      case '/contributions':
        return <ContributionsPage />;
      case '/events':
        return <EventsPage />;
      case '/gallery':
        return <GalleryPage />;
      case '/about':
        return <AboutPage />;
      case '/resources':
        return <ResourcesPage />;
      default:
        return <HomePage onNavigate={setCurrentPath} />;
    }
  };

  return (
    <Router>
      <div className="app">
        <style jsx>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          :root {
            --primary: #c8102e;
            --secondary: #003893;
            --gold: #ffd700;
            --wood: #8b4513;
            --leaf: #228b22;
            --text: #1a1a1a;
            --text-light: #666;
            --bg: #f8f9fa;
            --white: #ffffff;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              sans-serif;
            color: var(--text);
            background: var(--bg);
          }

          /* Navigation Styles */
          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
            z-index: 1000;
            transition: all 0.3s ease;
          }

          .navbar.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }

          .nav-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 72px;
          }

          .logo-link {
            text-decoration: none;
          }

          .logo-wrapper {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .logo-circle {
            width: 48px;
            height: 48px;
            background: linear-gradient(
              135deg,
              var(--primary) 0%,
              var(--secondary) 100%
            );
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            box-shadow: 0 4px 12px rgba(200, 16, 46, 0.2);
            transition: transform 0.3s ease;
          }

          .logo-link:hover .logo-circle {
            transform: scale(1.05);
          }

          .logo-text h1 {
            font-size: 1.25rem;
            color: var(--text);
            font-weight: 700;
          }

          .logo-text p {
            font-size: 0.75rem;
            color: var(--text-light);
          }

          .nav-links {
            display: flex;
            gap: 4px;
          }

          .nav-link {
            text-decoration: none;
            color: var(--text);
            padding: 10px 20px;
            border-radius: 24px;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
          }

          .nav-link:hover {
            color: var(--primary);
            background: rgba(200, 16, 46, 0.05);
          }

          .nav-link.active {
            color: white;
            background: var(--primary);
          }

          .mobile-toggle {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            color: var(--text);
          }

          .mobile-menu {
            position: absolute;
            top: 72px;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }

          .mobile-menu.open {
            max-height: 400px;
          }

          .mobile-link {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px 24px;
            text-decoration: none;
            color: var(--text);
            transition: all 0.3s ease;
          }

          .mobile-link:hover {
            background: var(--bg);
          }

          .mobile-link.active {
            background: var(--primary);
            color: white;
          }

          @media (max-width: 768px) {
            .nav-links.desktop {
              display: none;
            }
            .mobile-toggle {
              display: block;
            }
          }

          /* Container */
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
          }

          /* Home Page Styles */
          .home-page {
            padding-top: 72px;
          }

          .hero {
            position: relative;
            min-height: 600px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }

          .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
              135deg,
              var(--primary) 0%,
              var(--secondary) 100%
            );
            opacity: 0.95;
          }

          .floating-shapes {
            position: absolute;
            width: 100%;
            height: 100%;
          }

          .shape {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            animation: float 20s infinite ease-in-out;
          }

          .shape-1 {
            width: 300px;
            height: 300px;
            top: 10%;
            left: 10%;
            animation-delay: 0s;
          }

          .shape-2 {
            width: 200px;
            height: 200px;
            top: 60%;
            right: 10%;
            animation-delay: 5s;
          }

          .shape-3 {
            width: 150px;
            height: 150px;
            bottom: 10%;
            left: 50%;
            animation-delay: 10s;
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0) translateX(0);
            }
            25% {
              transform: translateY(-20px) translateX(10px);
            }
            50% {
              transform: translateY(10px) translateX(-10px);
            }
            75% {
              transform: translateY(-10px) translateX(20px);
            }
          }

          .hero-content {
            position: relative;
            text-align: center;
            color: white;
            z-index: 1;
            max-width: 800px;
            padding: 0 24px;
          }

          .hero-title {
            margin-bottom: 24px;
            animation: fadeInUp 1s ease;
          }

          .title-nepali {
            display: block;
            font-size: 4rem;
            font-weight: 700;
            text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
            margin-bottom: 8px;
          }

          .title-english {
            display: block;
            font-size: 2.5rem;
            font-weight: 300;
            opacity: 0.95;
          }

          .hero-subtitle {
            font-size: 1.25rem;
            margin-bottom: 40px;
            opacity: 0.9;
            animation: fadeInUp 1s ease 0.2s both;
          }

          .hero-actions {
            display: flex;
            gap: 16px;
            justify-content: center;
            animation: fadeInUp 1s ease 0.4s both;
          }

          .btn-primary,
          .btn-secondary {
            padding: 14px 32px;
            border: none;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .btn-primary {
            background: white;
            color: var(--primary);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          }

          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 30px rgba(0, 0, 0, 0.3);
          }

          .btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
          }

          .btn-secondary:hover {
            background: white;
            color: var(--primary);
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Features Section */
          .features {
            padding: 80px 0;
          }

          .features h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 48px;
            color: var(--text);
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 32px;
          }

          .feature-card {
            background: white;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            cursor: pointer;
            text-align: center;
          }

          .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
          }

          .feature-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 24px;
            background: linear-gradient(
              135deg,
              var(--primary) 0%,
              var(--secondary) 100%
            );
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }

          .feature-card h3 {
            margin-bottom: 16px;
            font-size: 1.5rem;
            color: var(--text);
          }

          .feature-card p {
            color: var(--text-light);
            line-height: 1.6;
          }

          /* Family Tree Page */
          .family-tree-page {
            padding-top: 72px;
            min-height: 100vh;
            background: var(--bg);
          }

          .tree-hero {
            text-align: center;
            padding: 60px 24px 40px;
            background: linear-gradient(
              135deg,
              var(--primary) 0%,
              var(--secondary) 100%
            );
            color: white;
          }

          .tree-hero h1 {
            font-size: 3rem;
            margin-bottom: 16px;
          }

          .tree-hero p {
            font-size: 1.25rem;
            opacity: 0.9;
            margin-bottom: 32px;
          }

          .tree-stats {
            display: flex;
            gap: 32px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .stat-item {
            display: flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 255, 255, 0.2);
            padding: 12px 24px;
            border-radius: 50px;
            backdrop-filter: blur(10px);
          }

          .tree-container {
            position: relative;
            padding: 40px 20px;
            overflow-x: auto;
          }

          .family-tree-svg {
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            margin: 0 auto;
            display: block;
          }

          .tree-branch {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawBranch 3s ease forwards;
          }

          @keyframes drawBranch {
            to {
              stroke-dashoffset: 0;
            }
          }

          .member-node {
            animation: nodeAppear 0.5s ease forwards;
            opacity: 0;
          }

          .member-node:nth-child(1) {
            animation-delay: 0.1s;
          }
          .member-node:nth-child(2) {
            animation-delay: 0.2s;
          }
          .member-node:nth-child(3) {
            animation-delay: 0.3s;
          }
          .member-node:nth-child(4) {
            animation-delay: 0.4s;
          }
          .member-node:nth-child(5) {
            animation-delay: 0.5s;
          }
          .member-node:nth-child(6) {
            animation-delay: 0.6s;
          }
          .member-node:nth-child(7) {
            animation-delay: 0.7s;
          }
          .member-node:nth-child(8) {
            animation-delay: 0.8s;
          }
          .member-node:nth-child(9) {
            animation-delay: 0.9s;
          }
          .member-node:nth-child(10) {
            animation-delay: 1s;
          }
          .member-node:nth-child(11) {
            animation-delay: 1.1s;
          }
          .member-node:nth-child(12) {
            animation-delay: 1.2s;
          }
          .member-node:nth-child(13) {
            animation-delay: 1.3s;
          }

          @keyframes nodeAppear {
            to {
              opacity: 1;
            }
          }

          .member-card-bg {
            transition: all 0.3s ease;
          }

          .member-node.hovered .member-card-bg {
            fill: #fffbf0;
            stroke-width: 3;
          }

          .glow-effect {
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0%,
            100% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 0.6;
              transform: scale(1.05);
            }
          }

          .member-name {
            fill: var(--text);
            font-weight: 600;
          }

          .member-details-panel {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: white;
            padding: 32px;
            border-radius: 16px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
            max-width: 400px;
            width: 90%;
            animation: slideUp 0.3s ease;
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }

          .member-details-panel h3 {
            color: var(--primary);
            margin-bottom: 20px;
            font-size: 1.5rem;
          }

          .detail-grid {
            display: grid;
            gap: 12px;
            margin-bottom: 24px;
          }

          .detail-item {
            display: flex;
            align-items: center;
            gap: 12px;
            color: var(--text);
          }

          .detail-item svg {
            color: var(--primary);
          }

          .close-details {
            width: 100%;
            padding: 12px;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .close-details:hover {
            background: var(--secondary);
          }

          .tree-legend {
            max-width: 600px;
            margin: 40px auto;
            background: white;
            padding: 32px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          }

          .tree-legend h3 {
            margin-bottom: 20px;
            color: var(--text);
          }

          .legend-items {
            display: grid;
            gap: 16px;
          }

          .legend-item {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .legend-color {
            width: 24px;
            height: 24px;
            border-radius: 50%;
          }

          /* Page Container */
          .page-container {
            padding: 120px 24px 60px;
            min-height: calc(100vh - 72px);
            max-width: 1200px;
            margin: 0 auto;
          }

          .page-container h1 {
            font-size: 2.5rem;
            color: var(--text);
            margin-bottom: 24px;
          }

          /* Responsive */
          @media (max-width: 768px) {
            .title-nepali {
              font-size: 3rem;
            }
            .title-english {
              font-size: 2rem;
            }
            .hero-actions {
              flex-direction: column;
              width: 100%;
              max-width: 300px;
              margin: 0 auto;
            }
            .tree-hero h1 {
              font-size: 2rem;
            }
            .family-tree-svg {
              min-width: 1200px;
            }
          }
        `}</style>

        <Navigation currentPath={currentPath} onNavigate={setCurrentPath} />
        {renderPage()}
      </div>
    </Router>
  );
}
