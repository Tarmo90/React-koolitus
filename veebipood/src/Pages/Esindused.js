import React, { useState } from "react"; // Impordime React'i ja useState'i haagi
import { Link } from "react-router-dom"; // Impordime Link komponendi react-router-dom'ist
import tallinnadKeskused from '../data/tallinn.json'; // Impordime tallinna keskuste andmed

function Esindused() {
  const [linn, muudaLinn] = useState("Tallinn"); // Seisundi deklareerimine valitud linna jaoks


  // Renderdamine -> HTMLi väljakuvamine
  // Re-renderdamine -> HTMLi uuendus    useState-i funktsioon setBLABLA
  const [keskused, setKeskused] = useState(tallinnadKeskused); // Seisundi deklareerimine keskuste andmete jaoks, vaikimisi Tallinna jaoks

  // Funktsioon orginaalsete keskuste taastamiseks
  const orginaali = () => {
    setKeskused(tallinnadKeskused);
  };

  // Funktsioon keskuste sorteerimiseks A-Z järjekorras
  const sorteeriAZ = () => {
    keskused.sort((a, b) => a.localeCompare(b));
    setKeskused(keskused.slice());
  };

  // Funktsioon keskuste sorteerimiseks Z-A järjekorras
  const sorteeriZA = () => {
    keskused.sort((a, b) => b.localeCompare(a));
    setKeskused(keskused.slice());
  };

  // Funktsioon keskuste sorteerimiseks tähemärkide arvu järgi kasvavas järjekorras
  const sorteeriTahedKasvavalt = () => {
    keskused.sort((a, b) => a.length - b.length);
    setKeskused(keskused.slice());
  };

  // Funktsioon keskuste sorteerimiseks tähemärkide arvu järgi kahanevas järjekorras
  const sorteeriTahedKahanevalt = () => {
    keskused.sort((a, b) => b.length - a.length);
    setKeskused(keskused.slice());
  };

  // Funktsioon keskuste sorteerimiseks kolmanda tähemärgi järgi A-Z järjekorras
  const sorteeriKolmasTahtAZ = () => {
    keskused.sort((a, b) => a[2].localeCompare(b[2]));
    setKeskused(keskused.slice());
  };

  // Funktsioon keskuste filtreerimiseks, et jätta alles need, mis lõppevad "e"-ga
  const filtreeriEgaL6ppeavad = () => {
    const vastus = keskused.filter(keskus => keskus.endsWith('e'));
    setKeskused(vastus);
  };

  // Funktsioon keskuste filtreerimiseks, et jätta alles need, mis koosnevad 9 tähemärgist
  const filtreeri9T2helised = () => {
    const vastus = keskused.filter(keskus => keskus.length === 9);
    setKeskused(vastus);
  };

  // Funktsioon keskuste filtreerimiseks, et jätta alles need, mis koosnevad vähemalt 7 tähemärgist
  const filtreeriVah7T2helised = () => {
    const vastus = keskused.filter(keskus => keskus.length >= 7);
    setKeskused(vastus);
  };

  // Funktsioon keskuste filtreerimiseks, et jätta alles need, mis sisaldavad "is" lühendit
  const filtreeriIsSisaldavad = () => {
    const vastus = keskused.filter(keskus => keskus.includes('is'));
    setKeskused(vastus);
  };

  // Funktsioon keskuste filtreerimiseks, et jätta alles need, mille kolmas tähemärk on "i"
  const filtreeriKelKolmasT2htI = () => {
    const vastus = keskused.filter(keskus => keskus[2] === 'i');
    setKeskused(vastus);
  };

// Esindused t2hem2rkide kokkuliitmine
  const arvutaKokku = () => {
    let summa = 0;
    keskused.forEach(esindus => summa = summa + esindus.length)
    return summa;
  }


  
  return (
    <div>
      <div>Esindused</div> 
      {/* Lingid erinevate linnade vahel, millele klikkimisel muudetakse aktiivne linna seisund */}
      <span className={linn === "Tallinn" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Tallinn")}>Tallinn (7)</span>
      <span className={linn === "Tartu" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Tartu")}>Tartu (2)</span>
      <span className={linn === "Narva" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Narva")}>Narva (1)</span>
      <span className={linn === "Pärnu" ? "linn-aktiivne" : "linn"} onClick={() => muudaLinn("Pärnu")}>Pärnu (1)</span>
      <br /><br />

      <div>Aktiivne linn on: {linn}</div> {/* Näitab aktiivset linna */}

      <ul>
        {keskused.map((tootaja, index) => (
          <div key={index}>{tootaja}</div>
        ))}
      </ul>

      <div>Kokku on keskuste peale {arvutaKokku()} t2hem2rki</div>
      <div>Kokku on {keskused.length} keskust.</div>

      {/* Kui valitud linn on Tallinn, kuvatakse järgmised elemendid */}
      { linn === "Tallinn" &&
        <div>
          <button onClick={orginaali}>Orginaali</button><br /> {/* Nupp originaalsete keskuste taastamiseks */}
          <button onClick={sorteeriAZ}>Sorteeri A-Z</button> {/* Nupp keskuste sorteerimiseks A-Z järjekorras */}
          <button onClick={sorteeriZA}>Sorteeri Z-A</button> {/* Nupp keskuste sorteerimiseks Z-A järjekorras */}
          <button onClick={sorteeriTahedKasvavalt}>Sorteeri t2hed kasvavalt</button> {/* Nupp keskuste sorteerimiseks tähemärkide arvu järgi kasvavas järjekorras */}
          <button onClick={sorteeriTahedKahanevalt}>Sorteeri t2hed kahanevalt</button> {/* Nupp keskuste sorteerimiseks tähemärkide arvu järgi kahanevas järjekorras */}
          <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas t2ht A-Z</button> {/* Nupp keskuste sorteerimiseks kolmanda tähemärgi järgi A-Z järjekorras */}
          <br />
          <button onClick={filtreeriEgaL6ppeavad}>J2ta alles 'e'ga l6ppevad</button> {/* Nupp keskuste filtreerimiseks, et jätta alles need, mis lõppevad "e"-ga */}
          <button onClick={filtreeri9T2helised}>J2ta alles 9 t2helised</button> {/* Nupp keskuste filtreerimiseks, et jätta alles need, mis koosnevad 9 tähemärgist */}
          <button onClick={filtreeriVah7T2helised}>J2ta alles v2hemalt 7 t2helised</button> {/* Nupp keskuste filtreerimiseks, et jätta alles need, mis koosnevad vähemalt 7 tähemärgist */}
          <button onClick={filtreeriIsSisaldavad}>J2ta alles kes sisaldavad 'is' lyhendit</button> {/* Nupp keskuste filtreerimiseks, et jätta alles need, mis sisaldavad "is" lühendit */}
          <button onClick={filtreeriKelKolmasT2htI}>J2ta alles kellel on kolmas t2ht 'i'</button> {/* Nupp keskuste filtreerimiseks, et jätta alles need, mille kolmas tähemärk on "i" */}
        </div>}

      {/* Kui valitud linn on Tartu, kuvatakse järgmised elemendid */}
      {linn === "Tartu" &&
        <div>
        <div>Järveotsa</div>
        <div>Raatuse</div>
      </div>}

      {/* Kui valitud linn on Narva, kuvatakse järgmised elemendid */}
      {linn === "Narva" &&
        <div> 
        <div>Fama</div>
      </div>}

      {/* Kui valitud linn on Pärnu, kuvatakse järgmised elemendid */}
      {linn === "Pärnu" &&
        <div>
        <div>Port Artur 2</div>
      </div>}
      <Link to='/'>
        <button>Tagasi</button>
      </Link> {/* Tagasi lingile */}
    </div>
  );
}

export default Esindused; // Ekspordib komponendi
