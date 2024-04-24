import React, { useEffect, useState } from 'react';
import '../../css/Order.css';
import subscribeData from '../../data/Subscribe.json';

function BuyOrder() {
  const [standardSubscription, setStandardSubscription] = useState(null);
  const [selectedBillingCycle, setSelectedBillingCycle] = useState('monthly'); // vaikeväärtusena valime kuumakse

  useEffect(() => {
    loadSubscriptions();
  }, []);

  const loadSubscriptions = () => {
    const standard = subscribeData.find(sub => sub.type === 'standard');
    setStandardSubscription(standard);
  };

  const handleBillingCycleChange = (cycle) => {
    setSelectedBillingCycle(cycle);
  };

  return (
    <div className='order'>
      {standardSubscription && (
        <div>
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
          <div>
            <label>
              <input
                type='radio'
                value='monthly'
                checked={selectedBillingCycle === 'monthly'}
                onChange={() => handleBillingCycleChange('monthly')}
              />
              Kuumakse
            </label>
            <label>
              <input
                type='radio'
                value='yearly'
                checked={selectedBillingCycle === 'yearly'}
                onChange={() => handleBillingCycleChange('yearly')}
              />
              Aastamakse
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default BuyOrder;
