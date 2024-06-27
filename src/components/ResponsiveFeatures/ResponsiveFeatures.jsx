import React from 'react';
import './ResponsiveFeatures.scss';
import { FaShippingFast, FaDollarSign, FaHeadset } from 'react-icons/fa';

const ResponsiveFeatures = () => {
  const features = [
    {
      icon: <FaShippingFast size={50} color="#FF6F61" />,
      title: 'FREE SHIPPING',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: <FaDollarSign size={50} color="#FF6F61" />,
      title: '100% REFUND',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: <FaHeadset size={50} color="#FF6F61" />,
      title: 'SUPPORT 24/7',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ];

  return (
    <div className="features-container container">
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          {feature.icon}
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ResponsiveFeatures;
