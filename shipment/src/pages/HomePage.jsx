import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import shipmentsFromFile from '../data/shipment.json';

function HomePage() {
  const [shipments, setShipments] = useState(shipmentsFromFile);

  //  useEffect(() => {
  //   fetch('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0')
  //     .then(res => res.json())
  //     .then(data => setShipments(data))
  // }, []);

  const deleteShipment = (index) => {
    const updatedShipments = shipments.filter((_, i) => i !== index);
    setShipments(updatedShipments);
    localStorage.setItem('shipments', JSON.stringify(updatedShipments));
  };

  return (
    <div>
      <table >
        <thead>
          <tr className='custom-table-head'>
            <th>Order No</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Tracking No</th>
            <th>Status</th>
            <th>Consignee</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className='custom-table-body'>
          {shipments.map((shipment, index) => (
            <tr key={index}>
              <td>{shipment.orderNo}</td>
              <td>{shipment.date}</td>
              <td>{shipment.customer}</td>
              <td>{shipment.trackingNo}</td>
              <td>{shipment.status}</td>
              <td>{shipment.consignee}</td>
              <td>
                <div className='container-detail'>
                  <Link to={'yks-detail/' + index}>
                    <Button>
                      <img className='button-detail' src="/file.png" alt="" />
                    </Button>
                  </Link>
                </div>
              </td>
              <td>
                <div className='container-delete' onClick={() => deleteShipment(index)}>
                  <img className='button-delete' src="/delete.png" alt="" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
