import React, { useState } from 'react';
import { FaRegCheckCircle, FaShieldAlt, FaThumbsUp, FaShieldVirus } from 'react-icons/fa';
import './index.scss';

const features = [
  {
    icon: <FaRegCheckCircle style={{ color: '#1E90FF' }} />,
    title: 'Free Domain for 1st Year',
    description: 'Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving.',
  },
  {
    icon: <FaShieldAlt style={{ color: '#8A2BE2' }} />,
    title: 'Free SSL Certificate',
    description: 'Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving.',
  },
  {
    icon: <FaThumbsUp style={{ color: '#FF69B4' }} />,
    title: '30-Day Money-Back Guarantee',
    description: 'Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving.',
  },
  {
    icon: <FaShieldVirus style={{ color: '#FFD700' }} />,
    title: 'Spam Protection',
    description: 'Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving.',
  },
];

const advancedFeatures = [...features]; // Copy features array to advancedFeatures

const CoreFeatures = () => {
  const [activeTab, setActiveTab] = useState('features');

  return (
    <div className="container">
      <div className="core-features">
        <div className="features-header">
          <h2 className='core'>Core Features</h2>
          <nav className="features-nav">
            <a
              href="#"
              className={activeTab === 'features' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor behavior
                setActiveTab('features');
              }}
            >
              Features
            </a>
            <a
              href="#"
              className={activeTab === 'advanced-features' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor behavior
                setActiveTab('advanced-features');
              }}
            >
              Advanced Features
            </a>
          </nav>
        </div>
        <div className="features-container">
          {(activeTab === 'features' ? features : advancedFeatures).map((feature, index) => (
            <div className="feature-item" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-text">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
