import React from 'react';

import Linksbar from '../components/Linksbar';
import './Home.css';

const Home = () => {
  return (
    <>
      <section className="home-section" id="home">
        <div className="rainbow-strip">
          {Array.from({ length: 25 }).map((_, i) => (
            <span
              key={i}
              className="rainbow"
              style={{
                animationDuration: `${45 - (45 / 25 / 2) * i}s`,
                animationDelay: `-${(i / 25) * 45}s`,
              }}
            />
          ))}
        </div>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="home-container">


          <div className="home-content">
            <div className="left-section">
              <div className="text-section">
                <h1>Hi, I'm PremChand</h1>
                <p>I'm a passionate developer specializing in web development, creating user-friendly and innovative solutions.</p>
              </div>
              <div className="text-section">
                <h2>About Me</h2>
                <p>With expertise in React, Vite, and modern JavaScript, I build responsive and dynamic applications to solve real-world problems.</p>
              </div>
              <div className="resume-button-container">
  <button className="resume-button" onClick={() => window.open('/resume.pdf', '_blank')}>
    Get Resume
  </button>
</div>

            </div>


            <div className="right-section">

              <img src="public\devimage.jpg" alt="Your Profile" className="profile-photo" />
              <div className="text-section">
                <h2>Connect With Me</h2>
                <div className='linksbar'><Linksbar /></div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;