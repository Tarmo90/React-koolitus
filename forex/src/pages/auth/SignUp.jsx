import React, { useContext, useRef, useState } from 'react';
import '../../css/SignUp.css';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const {setLoggedIn} = useContext(AuthContext)
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState('')
  const navigate = useNavigate();
  const authKey = 'AIzaSyD0KZWeTRlRZb5aZm1pcJ_pfTvoJc62ffs';
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + authKey

 const signup = () => {
  const body = {
    "email": emailRef.current.value,
    "password": passwordRef.current.value,
    "returnSecureToken": true
    }
    const headers = {
      "Content-Type": "application/json"
    }
    fetch(url, {"method": "POST", "body": JSON.stringify(body), "headers": headers})
      .then(res => res.json())
      .then(json => {
        console.log(json);
        if (json.error === undefined) {
          setLoggedIn(true);
          navigate("/homepage");
          sessionStorage.setItem("token", json.idToken);
        } else {
          setMessage(json.error.message);
        }
      })
  }
 
  return (
    <div className="signup-container background">
      <div className="signup-content text-color">
        {message}
        <h2>Register</h2><br />
          <label>
            <div>First Name</div>
            <input ref={firstNameRef} type="text" 
            />
          </label><br />
          <label>
           <div> Last Name</div>
            <input ref={lastNameRef} type="text" 
            />
          </label><br />
          <label>
            <div>Email</div>
            <input ref={emailRef} type="email" 
            />
          </label><br />
          <label>
            <div>Password (Min 10 characters)</div>
            <input ref={passwordRef} type="password" 
            />
          </label><br />
          <button onClick={signup}>Register</button>
        
      </div>
    </div>
  );
}

export default SignUp;
