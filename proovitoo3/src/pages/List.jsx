import React, { useState } from 'react';
import data from '../data/Tabel.json';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';

function List() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Muuda lehekülgede suurust siin
  const [selectedRow, setSelectedRow] = useState(null); // Uus state valitud rea hoidmiseks
  const [pageNumbers, setPageNumbers] = useState([]); // Lisatud

  
  const dataList = Object.values(data.list);

  const totalPages = Math.ceil(dataList.length / itemsPerPage);
  
  const generatePageNumbers = () => {
    const totalPageNumbers = Math.min(totalPages, 5);
    const numbers = [];
    for (let i = 1; i <= totalPageNumbers; i++) {
      numbers.push(i);
    }
    setPageNumbers(numbers);
  };

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    generatePageNumbers();
  };

  useState(() => {
    generatePageNumbers();
  }, []);

  // Funktsioon rea valimiseks
  const selectRow = (index) => {
    if (selectedRow === index) {
      setSelectedRow(null); // Kui sama rida uuesti klõpsatakse, tühjendame valitud rea
    } else {
      setSelectedRow(index); // Valime uue rea
    }
  };

  return (
    <div className="table_title">
      <h2>Nimekiri</h2>
      <div className="table_container">
        <div className="table_wrapper">
          <table>
            <thead>
              <tr className="table_header">
                <th>Eesnimi</th>
                <th>Perekonnanimi</th>
                <th>Sugu</th>
                <th>Sünnikuupäev</th>
                <th>Telefon</th>
              </tr>
            </thead>
            <tbody>
              {dataList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, index) => (
                <React.Fragment key={index}>
                  <tr onClick={() => selectRow(index)}>
                    <td>{item.firstname}</td>
                    <td>{item.surname}</td>
                    <td>{item.sex}</td>
                    <td>{new Date(item.date).toLocaleDateString()}</td>
                    <td>{item.phone}</td>
                  </tr>
                  {selectedRow === index && ( // Kui rida on valitud, näita täiendavat teavet
                    <tr>
                      <td colSpan="5">
                        {/* Siin saad lisada täiendava teabe või pildi */}
                        <div className='raw_border'>
                          <img className='raw_img' src={item.image.small} alt="" />
                          <span className='raw_info' >
                          {item.body.length > 50 ? item.body.substring(0, 500) + '...' : item.body}
                          </span>
                          <br />
                          <Link to={"/details/" + ((currentPage - 1) * itemsPerPage + index)}>
                          <button>LOE ROHKEM</button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>

         {/* Paginatsioon */}
          <div className='pagination'>
          <Pagination>
            <Pagination.Prev onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1} />
            {pageNumbers.map(pageNumber => 
              <Pagination.Item 
                key={pageNumber} 
                onClick={() => changePage(pageNumber)} 
                active={pageNumber === currentPage}
              >
                {pageNumber}
              </Pagination.Item>
            )}
            <Pagination.Next onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages} />
          </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
