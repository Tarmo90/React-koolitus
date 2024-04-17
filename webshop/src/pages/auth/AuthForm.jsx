import React, { useContext, useRef } from 'react'
import { AuthContext } from '../../store/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function AuthForm(props) {
  const { setLoggedIn } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const authKey = "AIzaSyBQqC1eQRVMFrs1CTjHl3PQEtLLiIBX7vg";
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:" + props.action + "?key=" + authKey;
  const repeatPasswordRef = useRef()

  const submit = () => {
    if (props.repeatPassword === true && passwordRef.current.value !== repeatPasswordRef.current.value) {
      setMessage('Paroolid ei yhti!')
      return
    }
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
      <input ref={emailRef} type="text" /><br /><br />
      <label>Password</label>
      <input ref={passwordRef} type="text" /><br />
      {props.repeatPassword &&<>
      <label>Repeat Password</label>
      <input ref={repeatPasswordRef} type="text" />
      </>}
      <button onClick={submit}>{props.buttonText}</button>
    </div>
  )
}

export default AuthForm