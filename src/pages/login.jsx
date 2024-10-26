import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Section, Form, Box, Button, Optional } from '../styles/login.styled'


function Login() {

  const navigate = useNavigate()



  const [formDetails, setFormDetails] = useState({
    email:'',
    password:'',
  })



  function formChanges(event){

    event.preventDefault();

    const {name, value, type, checked} = event.target
    setFormDetails( prevState => {
        return{...prevState,
            [name]: type === 'checkbox' ? checked : value
        }   
    })
}



async function handleLogin(event){

  event.preventDefault();

      try{
        navigate('/dashboard', {replace: true})
      }catch(e){
        console.log(e)
      }
}




  return (
    <Section>
      <Form onSubmit={handleLogin}>
        <h1>Log-In</h1>
        <Box>
          <label htmlFor='email'>E-mail</label>
          <input 
            type="email"
            placeholder="Enter Email Address" 
            name="email" 
            id="email" 
            onChange={formChanges}
            value={formDetails.email}
            required 
          />
        </Box>
        <Box>
          <label htmlFor='password'>Password</label>
          <input 
            type="password"
            placeholder="Enter Password" 
            name="password" 
            id="password" 
            onChange={formChanges}
            value={formDetails.password}
            required
            minLength='6'
            maxLength='18' 
          />
        </Box>
        <Button>Login</Button>
        <Optional>Don't have an account? <Link to="/signup">Sign Up</Link></Optional>
      </Form>
    </Section>
  )
}

export default Login