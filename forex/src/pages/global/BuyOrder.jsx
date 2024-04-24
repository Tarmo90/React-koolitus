import React, { useEffect, useState } from 'react';
import '../../css/Order.css';
import subscribeData from '../../data/Subscribe.json';

function BuyOrder() {
  const [standardSubscription, setStandardSubscription] = useState(null);
  const [selectedBillingCycle, setSelectedBillingCycle] = useState('monthly'); // vaikeväärtusena valime kuumakse

  useEffect(() => {
    const loadSubscriptions = async () => {
      const standard = subscribeData.find(sub => sub.type === 'standard');
      setStandardSubscription(standard);
    };
  
    loadSubscriptions();
  }, []); // Tühjad sõltuvused tähendavad, et see hook käivitub ainult komponendi esmakordsel renderdamisel
  
  const handleBillingCycleChange = (cycle) => {
    setSelectedBillingCycle(cycle);
  };

  return (
    <div className="order-container"> {/* Ümbritsev <div> ühise klassinimega */}
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

      <div className='radio'> {/* Alumised <input> elemendid */}
        <label>
          <input
            type='checkbox'
            name='monthly'
            checked={selectedBillingCycle === 'monthly'}
            onChange={() => handleBillingCycleChange('monthly')}
          />
          Kuumakse
        </label>
        <label>
          <input
            type='checkbox'
            name='yearly'
            checked={selectedBillingCycle === 'yearly'}
            onChange={() => handleBillingCycleChange('yearly')}
          />
          Aastamakse
        </label>
      </div>
    </div>
  );
}

export default BuyOrder;
