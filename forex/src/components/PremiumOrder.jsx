import React, { useEffect, useState } from 'react';
import '../css/Order.css'; 
import subscribeData from '../data/Subscribe.json';
import { Link } from 'react-router-dom';

function PremiumOrder() {
  const [premiumSubscription, setPremiumSubscription] = useState(null);
  const [selectedBillingCycle, setSelectedBillingCycle] = useState('monthly');

  useEffect(() => {
      const loadSubscriptions = async () => {
      const premium = subscribeData.find(sub => sub.type === 'premium');
      setPremiumSubscription(premium);
    };
    loadSubscriptions();
  }, []);

  const handleBillingCycleChange = (cycle) => {
    setSelectedBillingCycle(cycle);
  };

  const price = premiumSubscription ? 
  (selectedBillingCycle === 'monthly' ? 
  premiumSubscription.pricePerMonth.replace(/[^0-9.]/g, "") : 
  premiumSubscription.pricePerYear.replace(/[^0-9.]/g, "")) 
  : '';

  return (
    <div className="order-container">
      {premiumSubscription && (
        <div className="order">
          <h3>{premiumSubscription.title}</h3>
          {selectedBillingCycle === 'monthly' ? (
            <div>
              <h4><strong>{premiumSubscription.pricePerMonth}</strong></h4>
              <p>Selected: monthly payment</p>
            </div>
          ) : (
            <div>
              <h4><strong>{premiumSubscription.pricePerYear}</strong></h4>
              <p>Selected: Annual payment</p>
            </div>
          )}
        </div>
      )}

      <div className='radio-container'>
        <label className='order_1' htmlFor="monthly">
        Monthly
          <input className='radio'
            type='radio'
            id='monthly'
            value='monthly'
            checked={selectedBillingCycle === 'monthly'}
            onChange={() => handleBillingCycleChange('monthly')}
          />
        </label>

        <label className='order_1' htmlFor="yearly">
        Annual
          <input className='radio'
            type='radio'
            id='yearly'
            value='yearly'
            checked={selectedBillingCycle === 'yearly'}
            onChange={() => handleBillingCycleChange('yearly')}
          />
        </label>
      </div>
      <Link to={`/cart/${encodeURIComponent(price)}`}>
          <button className='pay_button'>Pay</button>
        </Link>
    </div>
  );
}

export default PremiumOrder;
