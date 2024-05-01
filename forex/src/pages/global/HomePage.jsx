import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/HomePage.css'
import { useTranslation } from 'react-i18next';


function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="main-link-list">
        <div className="separator"></div>
        <div className="main-link">
          <Link to="/courses">
            <div className="img-container">
              <img className="pilt1" src="images/Courses.jpg" alt="Foto" />
            </div>
            <div className="text-container">
              <h1>{t("courses")}</h1>
            </div>
          </Link>
        </div>

        <div className="main-link">
          <Link to="/strategies">
            <div className="img-container">
              <img className="pilt2" src="images/Strategies.jpg" alt="Foto" />
            </div>
            <div className="text-container">
              <h1>{t("strategies")}</h1>
            </div>
          </Link>
        </div>

        <div className="main-link">
          <Link to="/chart">
            <div className="img-container">
            <img className="pilt3" src="images/Chart.jpg" alt="Foto" />
            </div>
            <div className="text-container">
              <h1>{t("chart")}</h1>
            </div>
          </Link>
        </div>

        <div className="main-link">
          <Link to="/News">
            <div className="img-container">
            <img className="pilt3" src="images/News.jpg" alt="Foto" />
            </div>
            <div className="text-container">
              <h1>{t("news")}</h1>
            </div>
          </Link>
        </div>

        <div className="main-link">
          <Link to="/Test">
            <div className="img-container">
            <img className="pilt3" src="images/Test.jpg" alt="Foto" />
            </div>
            <div className="text-container">
              <h1>{t("test")}</h1>
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
