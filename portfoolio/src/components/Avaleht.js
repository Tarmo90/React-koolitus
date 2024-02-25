import { Link } from 'react-router-dom';


function Avaleht() {
  return (
    <div className="background">
      <img className="headerImg" src='ilm.jpg' alt='Header' />
      <div className='main-link-list'>
        <p className="headerText">"Tere tulemast meie digitaalsesse oaasi! Ole valmis avastama uusi maailmu ja kogema põnevaid seiklusi.
          <br />Siin leiad kõike alates loomingulistest projektidest kuni tehniliste näpunäideteni.
          <br /> Laske oma loovusel lennata ja inspireeruge meie platvormi avastamisest!
          <br /> Tule koos meiega teekonnale, kus ainus piir on teie kujutlusvõime!"</p> {/* Tekst enne joont */}

        <div className="separator"></div> {/* Väikese joone lisamine */}
        
        <div className='main-link'>
          <Link to='/Courses'>
            <img className="pilt1" src='react.jpg' alt='Foto' />
          </Link>
          <h1>Courses</h1>
        </div>
        <div className='main-link'>
          <Link to='/Hobbies'>
            <img className="pilt2" src='pc.jpg' alt='Foto' />
          </Link>
          <h1>Hobbies</h1>
        </div>
        <div className='main-link'>
          <Link to='/Work'>
            <img className="pilt3" src='program.jpg' alt='Foto' />
          </Link>
          <h1>Work</h1>
        </div>
      </div>

      {/* Ühine konteiner Facebooki ja Instagrami ikoonidele ja nuppudele */}
<div className='social-media-container'>

  {/* Facebooki ikoon ja nupp */}
  <div className='social-media-button'>
    <a className='social-media-link' href='https://www.facebook.com/'>
      <img className="social-media-icon" src="/facebook.png" alt="Facebook Icon" />
    </a>
  </div>
  
  {/* Instagrami ikoon ja nupp */}
  <div className='social-media-button'>
    <a className='social-media-link' href='https://www.instagram.com/'>
      <img className="social-media-icon" src="/instagram.png" alt="Instagram Icon" />
    </a>
  </div>
</div>

    </div>
  );
}

export default Avaleht;




