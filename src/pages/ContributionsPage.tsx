import React from 'react';
import { Heart, BookOpen, Users } from 'lucide-react';

const ContributionsPage: React.FC = () => {
  return (
    <div className="page-container contributions-page">
      <div className="contributions-hero">
        <h1>Our Contributions</h1>
        <p>Making a positive impact, together.</p>
      </div>

      <div className="contributions-grid">
        <div className="contribution-card">
          <div className="contribution-icon">
            <Heart size={40} />
          </div>
          <h3>Charity Initiatives</h3>
          <p>
            We are proud to support various charitable causes both in the UK and in our homeland of Nepal. From local food drives to fundraising for educational resources in Baglung, our community is committed to giving back. We believe in the power of collective action to create meaningful change.
          </p>
        </div>

        <div className="contribution-card">
          <div className="contribution-icon">
            <BookOpen size={40} />
          </div>
          <h3>Cultural Preservation</h3>
          <p>
            Keeping our heritage alive is at the heart of what we do. We organize regular events to celebrate major Nepali festivals like Dashain and Tihar, host language workshops for the younger generation, and share traditional music and stories. These activities strengthen our identity and connect us to our roots.
          </p>
        </div>

        <div className="contribution-card">
          <div className="contribution-icon">
            <Users size={40} />
          </div>
          <h3>Community Support</h3>
          <p>
            We provide a strong support network for all members of the Gaire family in the UK. This includes mentorship programs for students and young professionals, assistance for newcomers to help them settle in, and social gatherings that foster a sense of belonging and togetherness. We are more than a community; we are a family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContributionsPage;