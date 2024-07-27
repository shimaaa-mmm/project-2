import React from 'react';
import './index.scss'; 

const LatestNews = () => {
  const newsItems = [
    {
      id: 1,
      imgSrc: '/public/images/end-1.webp',
      date: '12 Jun, 2019',
      category: 'Hosting tips',
      title: 'Commitment to dedicated Support',
      description: 'Firmament morning sixth subdue darkness',
    },
    {
      id: 2,
      imgSrc: '/public/images/end-2.webp',
      date: '12 Jun, 2019',
      category: 'Hosting tips',
      title: 'Commitment to dedicated Support',
      description: 'Firmament morning sixth subdue darkness',
    },
    {
      id: 3,
      imgSrc: '/public/images/end-3.webp',
      date: '12 Jun, 2019',
      category: 'Hosting tips',
      title: 'Commitment to dedicated Support',
      description: 'Firmament morning sixth subdue darkness',
    },
  ];

  return (
    <div className="latest_new_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-100">
              <h3>Latest News</h3>
              <p>
                Your domain control panel is designed for ease-of-use and <br />
                allows for all aspects of your domains.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {newsItems.map((item) => (
            <div key={item.id} className="col-xl-4 col-md-6 col-lg-4">
              <div className="single_news">
                <div className="thumb">
                  <a href="#">
                    <img src={item.imgSrc} alt={item.title} />
                  </a>
                </div>
                <div className="news_content">
                  <div className="news_meta">
                    <a href="#">
                      {item.date} in <span>{item.category}</span>
                    </a>
                  </div>
                  <h3>
                    <a href="#">{item.title}</a>
                  </h3>
                  <p className="news_info">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
