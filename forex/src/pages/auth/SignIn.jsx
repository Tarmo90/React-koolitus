import React, { useContext, useRef, useState } from 'react';
import '../../css/SignIn.css';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {setLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const authKey = 'AIzaSyD0KZWeTRlRZb5aZm1pcJ_pfTvoJc62ffs';
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + authKey

  const login = () => {
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
    <div className="signIn-container">
      <div className="signIn-content text-color">
        {message}
        <h2>Sign in</h2><br />
          <label className='auth'>
            <div>Email</div>
            <input className='auth-input' ref={emailRef} type='text'/>
          </label><br />
          <label className='auth'>
            <div>Password</div>
            <input className='auth-input' ref={passwordRef} type='password'/>
          </label><br />
          <button className='signIn_button' onClick={login}>Sign in</button>
      </div>
    </div>
  );
}

export default SignIn;