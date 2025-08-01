import React from 'react';
import { MapPin, Target, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="page-container about-page">
      <div className="about-hero-new">
        <div className="hero-content-new">
          <h1>Our Story</h1>
          <p className="subtitle-new">From the Himalayan foothills to the heart of the UK</p>
        </div>
      </div>

      <div className="about-content-new">
        <section className="about-section-new">
          <div className="section-text">
            <h2>Our Journey</h2>
            <p>
              The story of Gairepariwar UK begins in the beautiful hills of Baglung, Nepal. Our ancestors cultivated the land, built strong family bonds, and created a legacy of resilience and community. In the late 20th century, members of our family began a new chapter, migrating to the United Kingdom in pursuit of new opportunities and a brighter future. This journey, filled with both challenges and triumphs, has shaped who we are today: a vibrant community that honors its past while embracing the future.
            </p>
          </div>
          <div className="section-visual">
            <MapPin size={60} className="section-icon-new" />
          </div>
        </section>

        <section className="about-section-new reverse">
          <div className="section-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to preserve our rich cultural heritage, foster strong community bonds, and support our members across the United Kingdom. We are dedicated to creating a network of support that empowers every generation, celebrates our shared identity, and contributes positively to the wider British society. We strive to be a home away from home, connecting Gaire family members through social, cultural, and charitable activities.
            </p>
          </div>
          <div className="section-visual">
            <Target size={60} className="section-icon-new" />
          </div>
        </section>

        <section className="about-section-new">
          <div className="section-text">
            <h2>Meet the Founders</h2>
            <p>
              The foundation of our community was laid by our respected elders, led by the vision of Bhim Bahadur Gaire. Their wisdom, courage, and unwavering commitment to family values are the bedrock upon which Gairepariwar UK is built. We honor their legacy by continuing to uphold the principles of unity, mutual respect, and collective progress. Their pioneering spirit inspires us to build a thriving future for generations to come.
            </p>
          </div>
          <div className="section-visual">
            <Users size={60} className="section-icon-new" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
