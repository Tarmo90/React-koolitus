import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import books from '../data/Books.json';

function Books() {
  const [raamatud, setRaamatud] = useState(books);


  const orginaali = () => {
    setRaamatud(books);
  };

  const sorteeriAZ = () => {
    const sortedBooks = [...raamatud].sort((a, b) => a.localeCompare(b));
    setRaamatud(sortedBooks);
  };

  const sorteeriZA = () => {
    const sortedBooks = [...raamatud].sort((a, b) => b.localeCompare(a));
    setRaamatud(sortedBooks);
  };

  const sorteeriS6napikkus = () => {
    const sortedBooks = [...raamatud].sort((a, b) => a.length - b.length);
    setRaamatud(sortedBooks);
  };
  
  const sorteeriTeineTahtAZ = () => {
    const sortedBooks = [...raamatud].sort((a, b) => a.charAt(1).localeCompare(b.charAt(1)));
    setRaamatud(sortedBooks);
  };
  
  const sorteeriSõnadeArv = () => {
    const sortedBooks = [...raamatud].sort((a, b) => {
      const wordsA = a.split(' ').length;
      const wordsB = b.split(' ').length;
      return wordsA - wordsB;
    });
    setRaamatud(sortedBooks);
  };

  const sorteeriEelviimaneTahtAZ = () => {
    const sortedBooks = [...raamatud].sort((a, b) => {
      const lastCharA = a.charAt(a.length - 2);
      const lastCharB = b.charAt(b.length - 2);
      return lastCharA.localeCompare(lastCharB);
    });
    setRaamatud(sortedBooks);
  };
  
  const filtreeriThegaAlgavad = () => {
    const filteredBooks = raamatud.filter(raamat => raamat.startsWith("The"));
    setRaamatud(filteredBooks);
  };

  const filtreeriAndKeskel = () => {
    const filteredBooks = raamatud.filter(raamat => raamat.includes(" and "));
    setRaamatud(filteredBooks);
  };

  const filtreeriRohkemKui10 = () => {
    const filteredBooks = raamatud.filter(raamat => raamat.length > 10);
    setRaamatud(filteredBooks);
  };

  const filtreeriVahemKui7 = () => {
    const filteredBooks = raamatud.filter(raamat => raamat.length < 7);
    setRaamatud(filteredBooks);
  };

  const filtreeriKolmVoiRohkem = () => {
    const filteredBooks = raamatud.filter(raamat => raamat.split(" ").length >= 3);
    setRaamatud(filteredBooks);
  };

  const filtreeriEelviimaneT2htC = () => {
    const filteredBooks = raamatud.filter(raamat => raamat.slice(-2, -1) === "c");
    setRaamatud(filteredBooks);
  };
  return (
    <div>
      <Link to="/">
        <button>Tagasi</button>
      </Link>
      <br /><br />
      <div>Raamatud:</div>
      <br />
      {raamatud.map(raamat => <div key={raamat}>{raamat} </div>)}

      <button onClick={orginaali}>Originaali</button><br /> {/* Nupp originaalsete keskuste taastamiseks */}
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button> {/* Nupp keskuste sorteerimiseks A-Z järjekorras */}
      <button onClick={sorteeriZA}>Sorteeri Z-A</button> {/* Nupp keskuste sorteerimiseks Z-A järjekorras */}
      <button onClick={sorteeriS6napikkus}>Sorteeri s6na pikkus</button> {/* Nupp keskuste sorteerimiseks Z-A järjekorras */}
      <button onClick={sorteeriTeineTahtAZ}>Sorteeri teine t2ht</button> {/* Nupp keskuste sorteerimiseks Z-A järjekorras */}
      <button onClick={sorteeriSõnadeArv}>Sorteeri s6nade arv</button> {/* Nupp keskuste sorteerimiseks Z-A järjekorras */}
      <button onClick={sorteeriEelviimaneTahtAZ}>Sorteeri eelvimane t2ht</button> {/* Nupp keskuste sorteerimiseks Z-A järjekorras */}
      <br /><br />
      <button onClick={filtreeriThegaAlgavad}>J2ta alles The-ga algavad</button> {/* Nupp keskuste filtreerimiseks, et jätta alles need, mis lõppevad "e"-ga */}
      <button onClick={filtreeriAndKeskel}>J2ta alles And keskel</button> {/* Nupp keskuste filtreerimiseks, et jätta alles need, mis lõppevad "e"-ga */}
      <button onClick={filtreeriRohkemKui10}>J2ta alles rohkem kui 10 t2hega</button> {/* Nupp keskuste filtreerimiseks, et jätta alles need, mis lõppevad "e"-ga */}
      <button onClick={filtreeriVahemKui7}>J2ta alles v2hemalt 7 t2helised</button> {/* Nupp keskuste filtreerimiseks, et jätta alles need, mis lõppevad "e"-ga */}
      <button onClick={filtreeriKolmVoiRohkem}>J2ta alles 3 s6naga v6i rohkem</button> {/* Nupp keskuste filtreerimiseks, et jätta alles need, mis lõppevad "e"-ga */}
      <button onClick={filtreeriEelviimaneT2htC}>J2ta alles c-ga eelvimane t2ht</button> {/* Nupp keskuste filtreerimiseks, et jätta alles need, mis lõppevad "e"-ga */}





    </div>
  );
}

export default Books;
