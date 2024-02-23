import React, { useState } from "react";
import { Link } from "react-router-dom";

function Seaded() {
    const [keel, uuendaKeel] = useState("est");

  return (
    <div>
      <div>Seaded</div>
      <div className={keel === "est" ? "sinine" : null}>Keel: {keel}</div>
      { keel === "est" && <div>Leht on eesti keelne</div>}
      { keel === "eng" && <div>This page is written in english</div>}
      { keel === "rus" && <div>Cтpaницa на русском языке</div>}
      <div>
        <button onClick={() => uuendaKeel("est")}>Est</button>
        <button onClick={() => uuendaKeel("eng")}>Eng</button>
        <button onClick={() => uuendaKeel("rus")}>Rus</button>
      </div>
      <Link to='/avaleht'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default Seaded;