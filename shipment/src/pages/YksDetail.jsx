import React, { useRef } from 'react';
import shipmentsFromFile from '../data/shipment.json';
import { useParams } from 'react-router-dom';

function YksDetail() {
  const { index } = useParams();
  const leitud = shipmentsFromFile[index];
  const orderNoRef = useRef();
  const dateRef = useRef();
  const customerRef = useRef();
  const trackingNoRef = useRef();
  const consigneeRef = useRef();
  const statusRef = useRef();

  if (leitud === undefined) {
    return <div>Ei leitud</div>;
  }

  return (
    <div className="container">
      <div className='inner-container'>
      <table className='custom-table' >
        <thead>
          <th className='details'>SHIPMENT DETAILS</th>
          <tr>
            <th>orderNo</th>
            <th>date</th>
          </tr>
          <tr>
            <td ref={orderNoRef}>{leitud.orderNo}</td>
            <td ref={dateRef}>{leitud.date}</td>
          </tr>
          <tr>
            <th>customer</th>
            <th>trackingNo</th>
          </tr>
          <tr>
            <td ref={customerRef}>{leitud.customer}</td>
            <td ref={trackingNoRef}>{leitud.trackingNo}</td>
          </tr>
          <tr>
            <th>consignee</th>
            <th>status</th>
          </tr>
          <tr>
            <td ref={consigneeRef}>{leitud.consignee}</td>
            <td ref={statusRef}>{leitud.status}</td>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
      </div>
  );
}

export default YksDetail;
