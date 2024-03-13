import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import keskusedFailist from '../data/tallinn.json'; 

function HaldaEsindused() {
  const [keskused, setKeskused] = useState(keskusedFailist);

  const kustutaEsindus = (index) => {
    keskusedFailist.splice(index, 1);
    setKeskused(keskusedFailist.slice());
  }
  
  return (
    <div>
      <h2>Keskuste nimekiri</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nimi</th>
            <th>Eemalda</th>
            <th>Muuda</th> {/* Lisatud muutmise nupp */}
          </tr>
        </thead>
        <tbody>
          {keskused.map((keskus, index) => 
            <tr key={index}>
              <td>{keskus}</td>
              <td><button onClick={() => kustutaEsindus(index)}>x</button></td>
              <td>
                <Link to={'/muuda-esindus/' + index}>
                  <button>Muuda</button>
                </Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaEsindused;
