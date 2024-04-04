import React, { useState } from 'react';
import data from '../data/Tabel.json';

function List() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Leia hetkelehe andmed
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.list.slice(indexOfFirstItem, indexOfLastItem);

  // veeru pealkiri
  const tableHeader = () => {
    return (
      <tr className="table-header">
        <th>Eesnimi</th>
        <th>Perekonnanimi</th>
        <th>Sugu</th>
        <th>Sünnikuupäev</th>
        <th>Telefon</th>
      </tr>
    );
  };

  // tabeli read
  const tableRows = () => {
    return currentItems.map((item, index) => {
      const { firstname, surname, sex, date, phone } = item;
      return (
        <tr key={index}>
          <td>{firstname}</td>
          <td>{surname}</td>
          <td>{sex}</td>
          <td>{new Date(date).toLocaleDateString()}</td>
          <td>{phone}</td>
        </tr>
      );
    });
  };

  // j2rgmine leht
  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  // eelmine leht
  const prevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  return (
    <div className="table-title">
      <h2>Nimekiri</h2>
      <div className="table-container">
        <div className="table-wrapper">
          <table>
            <thead>
              {tableHeader()}
            </thead>
            <tbody>
              {tableRows()}
            </tbody>
          </table>
        </div>
      </div>
      <div className="buttons">
        <button onClick={prevPage} disabled={currentPage === 1}>Eelmine</button>
        <button onClick={nextPage} disabled={indexOfLastItem >= data.list.length}>Järgmine</button>
      </div>
    </div>
  );
}

export default List;
