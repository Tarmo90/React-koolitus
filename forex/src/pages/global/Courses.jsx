import React from 'react';
import '../../css/Courses.css'

function Courses() {
  

  return (
    <div className="background">
      <div className='course_txt'>Tere tulemast kursusele</div>
      
      <iframe className='video' width="560" height="315" 
        src="https://www.youtube.com/embed/U2Wltnv-doo?si=GYssur7ZWD8MAMgA" 
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      />
      
    </div>
  );
}

export default Courses;


