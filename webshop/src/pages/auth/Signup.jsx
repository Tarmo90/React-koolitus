import AuthFrom from './AuthForm'

function Signup() {
  
return (
    <div>
      <AuthFrom 
      action='signUp' 
      buttonText='Registreeru' 
      repeatPassword={true}
      />
    </div>
  )
}

export default Signup