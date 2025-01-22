import React from 'react';
import im1 from '../images/p1.png'; 
import im2 from '../images/p2.png'; 
import im3 from '../images/p3.png'; 
import im4 from '../images/p4.png'; 

function Portfolio() {
  return (
    <section className="portfolio">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Portfolio</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={im2}
                alt="Portfolio 1"
                className="portfolio-img"
              />
            </div>
            <h2 className="experience-sub-title portfolio-title">Portfolio One</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 portfolio-btn"
                onClick={() => window.open('https://github.com/hatbsh-kw/Coffee-Shop-Website-Design-Using-HTML---CSS---JavaScript.git', '_blank')}
              >
                Github
              </button>
            </div>
          </div>
  <div className="details-container color-container">
            <div className="article-container">
              <img
                src={im4}
                alt="Portfolio 1"
                className="portfolio-img"
              />
            </div>
            <h2 className="experience-sub-title portfolio-title">Portfolio One</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 portfolio-btn"
                onClick={() => window.open('https://github.com/hatbsh-kw/Real-estate-website-by-REACTJS.git', '_blank')}
              >
                Github
              </button>
            </div>
          </div>


          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={im3}
                alt="Portfolio 2"
                className="portfolio-img"
              />
            </div>
            <h2 className="experience-sub-title portfolio-title">Portfolio Two</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 portfolio-btn"
                onClick={() => window.open('https://github.com/hatbsh-kw/GymWebsiteByReactjs.git', '_blank')}
              >
                Github
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={im1}
                alt="Portfolio 3"
                className="portfolio-img"
              />
            </div>
            <h2 className="experience-sub-title portfolio-title">Portfolio Three</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 portfolio-btn"
                onClick={() => window.open('https://github.com/hatbsh-kw/portfolio.git', '_blank')}
              >
                Github
              </button>
            </div>
          
           </div>
        
        
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
