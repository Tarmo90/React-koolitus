import React, { useState, useEffect } from 'react';
import '../../css/Local.css';
import '../../css/LocalSubscribe.css';
import subscribeData from '../../data/Subscribe.json';
import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';


function Local() {
  // const { t, } = useTranslation();

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
  <h2>Do you want to learn how to trade successfully on the foreign exchange market (Forex)?</h2>
  <p>Our website offers comprehensive courses and effective strategies to help you acquire the necessary skills and knowledge for successful navigation in the Forex market.</p>
  <br>
  <p>As experienced traders, we understand the importance of proper education and practical knowledge for trading on the Forex market. Therefore, we have created this platform to assist both beginners and advanced traders alike. Our courses cover various topics ranging from fundamentals to more complex strategies, including technical analysis, risk management, fundamental analysis, and much more.</p>
  <br>
  <h3>Why choose our courses?</h3>
  <ul>
    <li>Interactive learning environment where you can learn at your own pace.</li>
    <li>Practical examples and real-time trading simulations.</li>
    <li>Advanced strategies and tools for understanding and analyzing the market.</li>
    <li>Strong focus on practical skills and application of trading knowledge.</li>
  </ul>
  <br>
  <p>Whether you are a complete beginner or seeking advanced knowledge, we offer courses to help you develop your Forex trading skills and achieve success in financial markets.</p>
  <br>
  <p>Start today and change your approach to Forex trading! Enroll in courses and discover new opportunities in financial markets.</p>
  `;
 
  return (
    <div>
      <h1 className='heading'>Welcome to the website of Forex trading courses and strategies!</h1>
      <div className='text-content' onClick={handleClick}>
        {isOpen ? (
          <div dangerouslySetInnerHTML={{ __html: formattedContent }} />
        ) : (
          <p>
           Would you like to learn how to trade successfully on the foreign exchange market (Forex)?<br />
          Click here to read the full text...
          </p>
        )}
      </div>
      <div className='subscribe_cont'>
        {standardSubscription && (
          <div className='subscribe'>
            <h3>{standardSubscription.title}</h3>
            <h4><strong>{standardSubscription.pricePerMonth}</strong></h4>
            <h6><strong>{standardSubscription.pricePerYear}</strong></h6>
            <br />
            <h5>{standardSubscription.description}</h5>
            <Link to={"/standard_order"}>
              <button className='sub_button'>Order Standard</button>
            </Link>
            <br /><br />
            <ul>
              {standardSubscription.benefits.map((sentence, id) => (
                <li key={id}>{sentence}</li>
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
            <Link to={"/premium_order"}>
              <button className='sub_button'>Order Premium</button>
            </Link>
            <br/><br />
            <ul>
              {premiumSubscription.benefits.map((sentence, index) => (
                <li key={index}>{sentence}</li>
              ))}
            </ul>
            <p><em>{premiumSubscription.note}</em></p>
          </div>
        )}
      </div>
      
      <div className="social-media-container">
        <div className="social-media-button">
            <a className="social-media-link" href="https://www.facebook.com/">
              <img className="social-media-icon" src="icons/face.png" alt="Facebook Icon" />
            </a>
          </div>
          <div className="social-media-button">
            <a className="social-media-link" href="https://www.instagram.com/">
              <img className="social-media-icon" src="icons/insta.png" alt="Instagram Icon" />
            </a>
        </div>
        <div className="social-media-button">
            <a className="social-media-link" href="https://twitter.com/home">
              <img className="social-media-icon" src="icons/twitter.png" alt="Instagram Icon" />
            </a>
        </div>
      </div> 
    </div>
  );
}

export default Local;
