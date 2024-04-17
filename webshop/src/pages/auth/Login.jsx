import AuthFrom from './AuthForm'

function Login() {
  

  return (
    <div>
      <AuthFrom 
      action='signInWithPassword' 
      buttonText='Logi sisse' 
      repeatPassword={false}

      />
    </div>
  )
}

export default Login