import React, { useEffect, useState } from 'react';
import '../css/Order.css'; 
import subscribeData from '../data/Subscribe.json'; 
import { Link } from 'react-router-dom'; 

function StandardOrder() {
  const [standardSubscription, setStandardSubscription] = useState(null); 
  const [selectedBillingCycle, setSelectedBillingCycle] = useState('monthly'); 

  
  useEffect(() => {
      const loadSubscriptions = async () => {
      const standard = subscribeData.find(sub => sub.type === 'standard');
      setStandardSubscription(standard); 
    };
    loadSubscriptions();
  }, []); 

 
  const handleBillingCycleChange = (cycle) => {
    setSelectedBillingCycle(cycle); 
  };

  // Arvuta hind vastavalt valitud arveldustsüklile
  const price = standardSubscription ? 
    (selectedBillingCycle === 'monthly' ? 
      standardSubscription.pricePerMonth.replace(/[^0-9.]/g, "") : 
      standardSubscription.pricePerYear.replace(/[^0-9.]/g, "")) 
    : '';

  return (
    <div className="order-container">
      {standardSubscription && (
        <div className="order">
          <h3>{standardSubscription.title}</h3>
          {selectedBillingCycle === 'monthly' ? (
            <div>
              <h4><strong>{standardSubscription.pricePerMonth}</strong></h4>
              <p>Valitud: Kuumakse</p>
            </div>
          ) : (
            <div>
              <h4><strong>{standardSubscription.pricePerYear}</strong></h4>
              <p>Valitud: Aastamakse</p>
            </div>
          )}
        </div>
      )}

      <div className='radio-container'>
        <label className='label' htmlFor="monthly">
          Kuumakse
          <input className='radio'
            type='radio'
            id='monthly'
            value='monthly'
            checked={selectedBillingCycle === 'monthly'}
            onChange={() => handleBillingCycleChange('monthly')}
          />
        </label>

        <label className='label' htmlFor="yearly">
          Aastamakse
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
          <button className='pay_button'>maksma</button>
        </Link>
    </div>
  );
}

export default StandardOrder;
