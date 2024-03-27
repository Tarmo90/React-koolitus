import React, { useState, useEffect, useRef } from 'react';
import { Button, Table } from 'react-bootstrap';
import validator from 'validator'; 

function Employees() {
  
  const [employees, setEmployees] = useState([]); 
  const [message, updateMessage] = useState(''); 

  
  const idRef = useRef();
  const first_nameRef = useRef(); 
  const last_nameRef = useRef(); 
  const emailRef = useRef(); 
  const avatarRef = useRef(); 

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => setEmployees(data.data))
  }, []);
  
  const deleteEmployee = (index) => {
    // Uute töötajate massiivi loomine, kus kustutatakse töötaja, kelle indeks on antud
    const newEmployees = employees.filter(index, 1);
    setEmployees(newEmployees);
  };
  
  function addEmployee()  {
    
    const isValidID = (id) => {
      return /^\d+$/.test(id); // Kontrollib, kas ID koosneb ainult numbrite hulgast
    };

    const isValidFirstName = (first_name) => {
      return /^[A-Za-z]+$/.test(first_name); // Kontrollib, kas nimi koosneb ainult tähtedest
    };
    
    const isValidLastName = (last_name) => {
      return /^[A-Za-z]+$/.test(last_name); // Kontrollib, kas nimi koosneb ainult tähtedest
    };

    
    const isValidEmail = (email) => {
      return validator.isEmail(email); // Kasutab validator teeki e-posti aadressi kontrollimiseks
    };

    
    const isValidAvatar = (avatar) => {
      return avatar.trim() !== ''; // Kontrollib, kas avatar on määratud (mitte tühi string)
    };

    // Andmete valideerimine enne uue töötaja lisamist
    const id = idRef.current.value;
    const firstname = first_nameRef.current.value;
    const lastname = last_nameRef.current.value;
    const email = emailRef.current.value;
    const avatar = avatarRef.current.value;

    // Kontrollime tingimusi enne uue töötaja lisamist
    if (!isValidID(id)) {
      updateMessage('ID peab sisaldama ainult numbreid!');
      return;
    }
    if (!isValidFirstName(firstname)) {
      updateMessage('Nimi peab sisaldama ainult tähti!');
      return;
    }

    if (!isValidLastName(lastname)) {
      updateMessage('Nimi peab sisaldama ainult tähti!');
      return;
    }
    if (!isValidEmail(email)) {
      updateMessage('Palun sisestage kehtiv e-posti aadress!');
      return;
    }
    if (!isValidAvatar(avatar)) {
      updateMessage('Palun sisestage avatar URL!');
      return;
    }

    // Kui kõik kontrollid on läbitud, lisame uue töötaja
    const newEmployee = {
      id: idRef.current.value,
      first_name: first_nameRef.current.value,
      last_name: last_nameRef.current.value,
      email: emailRef.current.value,
      avatar: avatarRef.current.value,
    };
    const newEmployees = [...employees, newEmployee];
    setEmployees(newEmployees);
    updateMessage('Employee added');
  };

  return (
    <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
            <th scope="col">Avatar</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td className='first-column'>{employee.id}</td>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.email}</td>
              <td><img src={employee.avatar} alt="Avatar" style={{ width: '50px', height: '50px' }} /></td>
              <td><Button type="button" variant="danger" onClick={() => deleteEmployee(index)}>Delete</Button></td>
            </tr>
          ))}
          <tr className="input-row">
            <td><input type="number" ref={idRef} placeholder="ID" className="form-control" /></td>
            <td><input type="text" ref={first_nameRef} placeholder="First Name" className="form-control" /></td>
            <td><input type="text" ref={last_nameRef} placeholder="Last Name" className="form-control" /></td>
            <td><input type="email" ref={emailRef} placeholder="Email" className="form-control" /></td>
            <td><input type="url" ref={avatarRef} placeholder="Avatar url" className="form-control" /></td>
            <td></td>
            <td><Button type="submit" variant="success" onClick={addEmployee}>Add</Button></td>
          </tr>
        </tbody>
      </Table>
      <div>{message}</div>
    </div>
  );
}

export default Employees;
