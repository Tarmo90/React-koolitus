import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/HomePage.css'


function HomePage() {
  return (
    <div>
      <div className="main-link-list">
        <div className="separator"></div>
        
        {/* Esimene link koos pildi ja tekstiga */}
        <div className="main-link">
          <Link to="/courses">
            <div className="img-container">
              <img className="pilt1" src="react.jpg" alt="Foto" />
            </div>
            <div className="text-container">
              <h1>Courses</h1>
            </div>
          </Link>
        </div>

        {/* Teine link koos pildi ja tekstiga */}
        <div className="main-link">
          <Link to="/hobbies">
            <div className="img-container">
              <img className="pilt2" src="pc.jpg" alt="Foto" />
            </div>
            <div className="text-container">
              <h1>Hobbies</h1>
            </div>
          </Link>
        </div>

        {/* Kolmas link koos pildi, teksti ja "Meist" elemendiga */}
        <div className="main-link">
          <Link to="/chart">
            <div className="img-container">
              <img className="pilt3" src="program.jpg" alt="Foto" />
            </div>
            <div className="text-container">
              <h1>Chart</h1>
              
            </div>
          </Link>
        </div>
      </div>

      {/* Sotsiaalmeedia ikoonid */}
      <div className="social-media-container">
        <div className="social-media-button">
          {/* <a className="social-media-link" href="https://www.facebook.com/">
            <img className="social-media-icon" src="/facebook.png" alt="Facebook Icon" />
          </a>
        </div>
        <div className="social-media-button">
          <a className="social-media-link" href="https://www.instagram.com/">
            <img className="social-media-icon" src="/instagram.png" alt="Instagram Icon" />
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
