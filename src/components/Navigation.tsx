import React, { useState, useEffect } from 'react';
import {
  Home,
  User,
  Briefcase,
  Calendar,
  Image,
  Info,
  FileText,
  Menu,
  X,
  TreePine,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
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
        <NavLink to="/" className="logo-link">
          <div className="logo-wrapper">
            <div className="logo-circle">
              <TreePine size={30} />
            </div>
            <div className="logo-text">
              <h1>गैरे परिवार</h1>
              <p>Gairepariwar UK</p>
            </div>
          </div>
        </NavLink>

        <div className="nav-links desktop">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className="nav-link">
              {item.label}
            </NavLink>
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
            <NavLink
              key={item.path}
              to={item.path}
              className="mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
