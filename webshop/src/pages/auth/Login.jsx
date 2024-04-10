import React, { useContext, useRef } from 'react'
import { AuthContext } from '../../store/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function Login() {
  const { setLoggedIn } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const authKey = "AIzaSyBQqC1eQRVMFrs1CTjHl3PQEtLLiIBX7vg";
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + authKey;

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
          navigate("/admin");
          sessionStorage.setItem("token", json.idToken);
        } else {
          setMessage(json.error.message);
        }
      })
  }

  return (
    <div>
      <div>{message}</div>
      <label>Email</label>
      <input ref={emailRef} type="text" />
      <label>Password</label>
      <input ref={passwordRef} type="text" />
      <button onClick={login}>Logi sisse</button>
    </div>
  )
}

export default Login