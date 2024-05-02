import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/HomePage.css'
import { useTranslation } from 'react-i18next';


function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="main-link-list">
        <div className="main-link">
          <Link to="/courses">
            <div className="img-container">
              <img src="images/Courses.jpg" alt="Foto" />
            </div>
            <div>
              <h1>{t("courses")}</h1>
            </div>
          </Link>
        </div>

        <div className="main-link">
          <Link to="/strategies">
            <div className="img-container">
              <img src="images/Strategies.jpg" alt="Foto" />
            </div>
            <div>
              <h1>{t("strategies")}</h1>
            </div>
          </Link>
        </div>

        <div className="main-link">
          <Link to="/chart">
            <div className="img-container">
            <img src="images/Chart.jpg" alt="Foto" />
            </div>
            <div>
              <h1>{t("chart")}</h1>
            </div>
          </Link>
        </div>

        <div className="main-link">
          <Link to="/News">
            <div className="img-container">
            <img src="images/News.jpg" alt="Foto" />
            </div>
            <div>
              <h1>{t("news")}</h1>
            </div>
          </Link>
        </div>

        <div className="main-link">
          <Link to="/Test">
            <div className="img-container">
            <img  src="images/Test.jpg" alt="Foto" />
            </div>
            <div>
              <h1>{t("test")}</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
