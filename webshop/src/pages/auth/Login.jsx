import React, { useContext, useRef } from 'react'
import { AuthContext } from '../../store/AuthContext'
import { useNavigate } from 'react-router-dom'

function Login() {
  const emailRef= useRef()
  const passwordRef= useRef()
  const {setLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const login = () => {
    if (passwordRef.current.value === '123') {
      setLoggedIn(true)
      navigate('/')
    }
  }

  return (
    <div>
      <label>Email</label>
      <input ref={emailRef} type="text" />
      <label>Password</label>
      <input ref={passwordRef} type="text" />
      <button onClick={login}>Logi sisse</button>
    </div>
  )
}

export default Login