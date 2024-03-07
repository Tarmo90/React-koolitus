import React, { useState } from 'react';

function Months() {
  const [months, m22raMonths] = useState(["March", "Jan", "Feb", "Dec", "Oct"]);

  function kustutaMonths(index) {
    months.splice(index, 1);
    m22raMonths(months.slice());
  }

  return (
    <div>
      Months:
      <br /><br />
      <div>{months.length} tk</div>
      {months.length === 0 && 
      <div>No words</div>}
      {months.map((element, index) => (
        <div key={index}>
          <span>{element}</span>
          <button onClick={() => kustutaMonths(index)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default Months;