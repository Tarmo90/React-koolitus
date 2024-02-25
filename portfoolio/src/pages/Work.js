import React from 'react';
import { Link } from 'react-router-dom';

function Work() {
  return (
    <div className="background">
      <Link to='/' >
        <button className='nupp'>Tagasi</button>
      </Link>

      <div>Tere tulemast kursusele</div>
    </div>
  );
}

export default Work;
