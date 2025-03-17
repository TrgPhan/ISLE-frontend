import React from 'react';
import Navbar from './components/navbar';
import './global.css';

export default function Home() {
  const features = [
    {
      title: 'Communication',
      content: "Body text for whatever you'd like to add more to the subheading."
    },
    {
      title: 'Entertaining',
      content: "Body text for whatever you'd like to add more to the subheading."
    },
    {
      title: 'Educating',
      content: "Body text for whatever you'd like to add more to the subheading."
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <h1>
          Hello, UETERS! This is ISLE, an advanced platform that uses AI to accurately
          recognize hand signs, making communication more accessible and inclusive.
        </h1>
        <button className="cta-button">Start Now</button>
      </section>

      {/* Features Section */}
      <section className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.content}</p>
          </div>
        ))}
      </section>
    </>
  );
};
