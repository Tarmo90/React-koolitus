import React, { useState, useEffect } from 'react';
import '../../css/Local.css';
import '../../css/LocalSubscribe.css';
import subscribeData from '../../data/Subscribe.json';
import { Link } from 'react-router-dom';

function Local() {
  const [isOpen, setIsOpen] = useState(false);
  const [standardSubscription, setStandardSubscription] = useState(null);
  const [premiumSubscription, setPremiumSubscription] = useState(null);

  useEffect(() => {
    loadSubscriptions();
  }, []);

  const loadSubscriptions = () => {
    const standard = subscribeData.find(sub => sub.type === 'standard');
    const premium = subscribeData.find(sub => sub.type === 'premium');
    setStandardSubscription(standard);
    setPremiumSubscription(premium);
  };

  const handleClick = () => {
    setIsOpen(!isOpen); 
  };

  const formattedContent = `
    <p>
      Kas soovid õppida, kuidas edukalt kaubelda valuutaturul (Forex)? Meie veebileht pakub põhjalikke kursusi ja tõhusaid strateegiaid, mis aitavad sul omandada vajalikud oskused ja teadmised Forex turul edukaks navigeerimiseks.<br><br>
      Kogenud kauplejatena mõistame, kui oluline on õige haridus ja praktilised teadmised Forex turul kauplemiseks. Seetõttu oleme loonud selle platvormi, et aidata nii algajaid kui ka edasijõudnud kauplejaid. Meie kursused käsitlevad erinevaid teemasid alates põhialustest kuni keerukamate strateegiateni, sealhulgas tehniline analüüs, riskijuhtimine, fundamentaalne analüüs ja palju muud.<br><br>
      Miks valida meie kursused?<br>
      - Interaktiivne õpikeskkond, kus saate õppida enda tempos.<br>
      - Praktilised näited ja reaalajas kauplemise simulatsioonid.<br>
      - Täiustatud strateegiad ja tööriistad turu mõistmiseks ja analüüsimiseks.<br>
      - Tugev fookus praktilistel oskustel ja kaubanduslike teadmiste rakendamisel.<br><br>
      Olenemata sellest, kas olete täiesti algaja või otsite täiustatud teadmisi, pakume kursusi, mis aitavad teil oma Forex kauplemise oskusi arendada ja saavutada edu finantsturgudel.<br><br>
      Alustage juba täna ja muutke oma lähenemisviisi Forex kauplemisele! Registreeru kursustele ja avasta uusi võimalusi finantsturgudel.
    </p>
  `;

  return (
    <div>
      <h1 className='heading'>Tere tulemast Forex kauplemise kursuste ja strateegiate veebilehele!</h1>
      <div className='text-content' onClick={handleClick}>
        {isOpen ? (
          <div dangerouslySetInnerHTML={{ __html: formattedContent }} />
        ) : (
          <p>
            Kas soovid õppida, kuidas edukalt kaubelda valuutaturul (Forex)?
            Klõpsake siia, et lugeda täielikku teksti...
          </p>
        )}
      </div>
      <div>
        {standardSubscription && (
          <div className='subscribe'>
            <h3>{standardSubscription.title}</h3>
            <h4><strong>{standardSubscription.pricePerMonth}</strong></h4>
            <h6><strong>{standardSubscription.pricePerYear}</strong></h6>
            <br />
            <h5>{standardSubscription.description}</h5>
            <Link to={"/buy_order"}>
              <button className='sub_button'>Telli Standardne</button>
            </Link>
            <br /><br />
            <ul>
              {standardSubscription.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <p><em>{standardSubscription.note}</em></p>
          </div>
        )}

        {premiumSubscription && (
          <div className='subscribe2'>
            <h3>{premiumSubscription.title}</h3>
            <h4><strong>{premiumSubscription.pricePerMonth}</strong></h4>
            <h6><strong>{premiumSubscription.pricePerYear}</strong></h6>
            <br />
            <h5>{premiumSubscription.description}</h5>
            <Link to={"/buy_order"}>
              <button className='sub_button'>Telli Premium</button>
            </Link>
            <br/><br />
            <ul>
              {premiumSubscription.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <p><em>{premiumSubscription.note}</em></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Local;
