import React, { useState } from 'react';

function Meist() {
  const [message, m22raMessage] = useState('Vali m6ni tegevus');

  return (
    <div>
      <div>{message}</div>

      <button onClick={() => m22raMessage('Selleks saada meile e-mail jobs@htmal-cssTransition.com')}>Kandideeri toole</button><br />
      <button onClick={() => m22raMessage('Meil on 10 tootajat, kelle info ilmub veebilehele l2hiajal')}>Vaata meie tootajaid</button><br />
      <button onClick={() => m22raMessage('Yhenduse v6tmiseks mine lehele Kontakt')}>V6ta meiega Yhentust</button><br />
    </div>
  );
}

export default Meist;
