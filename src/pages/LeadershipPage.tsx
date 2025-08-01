import React from 'react';
import { leadershipData, type Leader } from '../data/leadershipData';
import { User, Calendar, MessageSquare } from 'lucide-react';

const LeadershipCard: React.FC<{ leader: Leader }> = ({ leader }) => {
  return (
    <div className="leader-card">
      <div className="leader-image-wrapper">
        <img src={leader.imageUrl} alt={leader.name} className="leader-image" />
      </div>
      <div className="leader-info">
        <h3 className="leader-name">{leader.name}</h3>
        <p className="leader-title">{leader.title}</p>
        <div className="leader-meta">
          <span>
            <Calendar size={14} /> {leader.tenure}
          </span>
        </div>
        <blockquote className="leader-quote">
          <MessageSquare size={16} className="quote-icon" />
          {leader.quote}
        </blockquote>
      </div>
    </div>
  );
};

const LeadershipPage: React.FC = () => {
  return (
    <div className="page-container leadership-page">
      <div className="leadership-hero">
        <h1>Community Leadership</h1>
        <p>Meet the dedicated individuals guiding our community.</p>
      </div>
      <div className="leadership-grid">
        {leadershipData.map((leader) => (
          <LeadershipCard key={leader.id} leader={leader} />
        ))}
      </div>
    </div>
  );
};

export default LeadershipPage;
