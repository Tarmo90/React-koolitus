import React from 'react';
import '../../css/Courses.css'
import { Link } from 'react-router-dom';

function Courses() {
  

  return (
    <div>
      <div className='course_txt'>Tere tulemast kursusele</div>
      <div className="main-link-list">
        <div className="separator"></div>
        
        {/* Esimene link koos pildi ja tekstiga */}
        <div className="main-link">
          <Link to="/courses">
            <div className="img-container">
              <img className="pilt1" src="images/Courses.jpg" alt="Foto" />
            </div>
            <div className="text-container">
              <h1>Courses</h1>
            </div>
          </Link>
        </div>

        {/* Teine link koos pildi ja tekstiga */}
        <div className="main-link">
          <Link to="/strategies">
            <div className="img-container">
              <img className="pilt2" src="images/Strategies.jpg" alt="Foto" />
            </div>
            <div className="text-container">
              <h1>Strategies</h1>
            </div>
          </Link>
        </div>

        {/* Kolmas link koos pildi, teksti ja "Meist" elemendiga */}
        <div className="main-link">
          <Link to="/chart">
            <div className="img-container">
            <img className="pilt3" src="images/Chart.jpg" alt="Foto" />
            </div>
            <div className="text-container">
              <h1>Chart</h1>
              
            </div>
          </Link>
        </div>
      </div>

      
      <iframe className='video' width="360" height="215" 
        src="https://www.youtube.com/embed/U2Wltnv-doo?si=GYssur7ZWD8MAMgA" 
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      />
      
    </div>
  );
}

export default Courses;


