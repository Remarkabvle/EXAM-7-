import React from 'react';
import './LatestNews.scss';

const LatestNews = () => {
  const newsItems = [
    {
      date: '01 Jan, 2016',
      title: 'Fashion Industry',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: 'https://via.placeholder.com/50', // Placeholder image
    },
    {
      date: '01 Jan, 2016',
      title: 'Best Design Tools',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: 'https://via.placeholder.com/50', // Placeholder image
    },
    {
      date: '01 Jan, 2016',
      title: 'HR Community',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: 'https://via.placeholder.com/50', // Placeholder image
    },
  ];

  return (
    <div className="latest-news-container container">
      <h2 className="section-title">LATEST NEWS</h2>
      <div className="news-items">
        {newsItems.map((item, index) => (
          <div className="news-item" key={index}>
            <img src={item.image} alt={item.title} className="news-image" />
            <div className="news-content">
              <p className="news-date">{item.date}</p>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
