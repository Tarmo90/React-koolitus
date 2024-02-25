import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Courses() {
  const [kursus, uuendaKursus] = useState('Valimata');

  return (
    <div className="background">
      <Link to='/' >
        <button className='nupp'>Tagasi</button>
      </Link>
      
      <div className="nupp-container"></div>

      <button 
        className={kursus === 'udemy' ? 'aktiivne-nupp' : 'pole-valitud-nupp'}
        onClick={() => uuendaKursus('udemy')}
      >
        Udemy
      </button>
      <button 
        className={kursus === 'coursera' ? 'aktiivne-nupp' : 'pole-valitud-nupp'}
        onClick={() => uuendaKursus('coursera')}
      >
        Coursera
      </button>
      <button 
        className={kursus === 'codecademy' ? 'aktiivne-nupp' : 'pole-valitud-nupp'}
        onClick={() => uuendaKursus('codecademy')}
      >
        Codecademy
      </button>
      <button 
        className={kursus === 'udacity' ? 'aktiivne-nupp' : 'pole-valitud-nupp'}
        onClick={() => uuendaKursus('udacity')}
      >
        Udacity
      </button>
      {kursus === 'udemy' && <div>Siin on kirjeldus(loend) Udemy.com läbitud kursustest</div>}
      {kursus === 'coursera' && <div>Siin on kirjeldus(loend) Coursera.com läbitud kursustest</div>}
      {kursus === 'codecademy' && <div>Siin on kirjeldus(loend) Codecademy.com läbitud kursustest</div>}
      {kursus === 'udacity' && <div>Siin on kirjeldus(loend) Udacity.com läbitud kursustest</div>}

      <iframe className='video' width="560" height="315" 
        src="https://www.youtube.com/embed/U2Wltnv-doo?si=GYssur7ZWD8MAMgA" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      />
      <div className='course-txt'>Tere tulemast kursusele</div>
    </div>
  );
}

export default Courses;


