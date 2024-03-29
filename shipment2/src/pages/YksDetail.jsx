import React, { useRef } from "react";
import shipmentsFromFile from "../fail/Shipments.json";
import { useParams } from "react-router-dom";

function YksDetail() {
  const { index } = useParams();
  const leitud = shipmentsFromFile[index];
  const orderNoRef = useRef();
  const dateRef = useRef();
  const customerRef = useRef();
  const trackingNoRef = useRef();
  const consigneeRef = useRef();
  const statusRef = useRef();

  const change = () => {
    shipmentsFromFile[index] = {
      orderNo: orderNoRef.current.value,
      date: dateRef.current.value,
      customer: customerRef.current.value,
      trackingNo: trackingNoRef.current.value,
      status: statusRef.current.value,
      consignee: consigneeRef.current.value,
    };
  };

  return (
    <div className="container">
      <div className="inner-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th colSpan="2" className="details">
                SHIPMENT DETAILS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>orderNo</th>
              <th>date</th>
            </tr>
            <tr>
              <td>
                <input ref={orderNoRef} defaultValue={leitud.orderNo} type="text" />
              </td>
              <td>
                <input ref={dateRef} defaultValue={leitud.date} type="text" />
              </td>
            </tr>
            <tr>
              <th>customer</th>
              <th>trackingNo</th>
            </tr>
            <tr>
              <td>
                <input ref={customerRef} defaultValue={leitud.customer} type="text" />
              </td>
              <td>
                <input ref={trackingNoRef} defaultValue={leitud.trackingNo} type="text" />
              </td>
            </tr>
            <tr>
              <th>consignee</th>
              <th>status</th>
            </tr>
            <tr>
              <td>
                <input ref={consigneeRef} defaultValue={leitud.consignee} type="text" />
              </td>
              <td>
                <input ref={statusRef} defaultValue={leitud.status} type="text" />
              </td>
            </tr>
            <br />
            <button className="change-button" onClick={change}>
              Change
            </button>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default YksDetail;
