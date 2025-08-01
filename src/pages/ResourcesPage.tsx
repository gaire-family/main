import React from 'react';
import { FileText, Link, UserPlus } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  return (
    <div className="page-container resources-page">
      <div className="resources-hero">
        <h1>Resources</h1>
        <p>A central hub for important documents and useful links.</p>
      </div>

      <div className="resources-grid">
        <a href="#" className="resource-card">
          <div className="resource-icon">
            <FileText size={40} />
          </div>
          <h3>Community Bylaws</h3>
          <p>
            Read the official rules and regulations that govern our community.
          </p>
          <span className="resource-link">View Document</span>
        </a>

        <a href="#" className="resource-card">
          <div className="resource-icon">
            <UserPlus size={40} />
          </div>
          <h3>Membership Form</h3>
          <p>
            Join our community by filling out the official membership
            application.
          </p>
          <span className="resource-link">Download Form</span>
        </a>

        <a
          href="https://www.nepalembassy.org.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="resource-card"
        >
          <div className="resource-icon">
            <Link size={40} />
          </div>
          <h3>Embassy of Nepal, London</h3>
          <p>
            Visit the official website for consular services and information.
          </p>
          <span className="resource-link">Visit Site</span>
        </a>
      </div>
    </div>
  );
};

export default ResourcesPage;
