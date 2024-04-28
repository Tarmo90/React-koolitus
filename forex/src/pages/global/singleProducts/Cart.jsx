import React, { useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom';

function Cart() {
  const { price } = useParams();

  const pay = useCallback(() => {
    console.log("Pay function called")
    const paymentUrl = "https://igw-demo.every-pay.com/api/v4/payments/oneoff"
    const paymentData = {
      "api_username": "92ddcfab96e34a5f",
      "account_name": "EUR3D1",
      "amount": decodeURIComponent(price),
      "order_reference": Math.random() * 9999999,
      "nonce": "a9b7" + new Date() + Math.random() * 9999999,
      "timestamp": new Date(),
      "customer_url": "https://fx-kauplemine.web.app"
      }
      const paymentHeaders = {
        "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
        "Content-Type": "application/json"
      }
      fetch(paymentUrl, {
        "method": "POST", 
        "body": JSON.stringify(paymentData), 
        "headers":paymentHeaders
      }).then(res => res.json())
        .then(json => window.location.href = json.payment_link)
  }, [price]);

  useEffect(() => {
    pay();
  }, [pay]);

  return (
    <div></div>
  )
}

export default Cart
