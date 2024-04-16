import React, { useState } from 'react';
import data from '../data/Tabel.json';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';

function List() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Muuda lehekülgede suurust siin
  const [selectedRow, setSelectedRow] = useState(-1); // Uus state valitud rea hoidmiseks
  const [pageNumbers, setPageNumbers] = useState([]); // Lisatud

  
  const [dataList, setDataList] = useState(data.list.slice())

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

  const [sortFirstName, setSortFirstName] = useState('default');

  const sortName = () => {
    if (sortFirstName === 'default') {
      setSortFirstName('asc');
      dataList.sort((a, b) => a.firstname.localeCompare(b.firstname))
      setDataList(dataList.slice());
      return;
    }
    if (sortFirstName === 'asc') {
      setSortFirstName('desc');
      dataList.sort((a, b) => b.firstname.localeCompare(a.firstname))
      setDataList(dataList.slice());
      return;
    }
    if (sortFirstName === 'desc') {
      setSortFirstName('default');
      setDataList(data.list.slice());
      return;
    }
  }

 const getBirthDate = (personalCode) => {
  const birthDay = personalCode.toString().slice(5,7)
  return birthDay + '.12.2022'
 }

  return (
    <div className="table_title">
      <h2>Nimekiri</h2>
      <div className="table_container">
        <div className="table_wrapper">
          <table>
            <thead>
              <tr className="table_header">
                <th onClick={sortName}>Eesnimi</th>
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
                    <td>{getBirthDate(item.personal_code)}</td>
                    <td>{item.phone}</td>
                  </tr>
                  {selectedRow === index && ( 
                    <tr>
                      <td colSpan="5">
                        
                        <div className='raw_border'>
                          <img className='raw_img' src={item.image.small} alt="" />
                          <span className='raw_info' dangerouslySetInnerHTML={{__html:(item.body.length > 50 ? item.body.substring(0, 500) + '...' : item.body)}} >
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
