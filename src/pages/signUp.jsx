import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Section, Form, Box, Button, Optional } from '../styles/login.styled'



function SignUp() {

  const navigate = useNavigate()



  const [formDetails, setFormDetails] = useState({
    email:'',
    password:'',
    confirmPassword: ''
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



  async function handleSignup(event){

    event.preventDefault();

        try{
          navigate('/dashboard', {replace: true})
        }catch(e){
          console.log(e)
        }
  }
  return (
    <Section>
    <Form onSubmit={handleSignup}>
      <h1>Sign-Up</h1>
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
      <Box>
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input 
          type="password"
          placeholder="Enter Password Again" 
          name="confirmPassword" 
          id="confirmPassword" 
          onChange={formChanges}
          value={formDetails.confirmPassword}
          required
          minLength='6'
          maxLength='18' 
        />
      </Box>
      <Button>Sign Up</Button>
      <Optional>Already have an account? <Link to="/login">Log In</Link></Optional>
    </Form>
  </Section>
  )
}

export default SignUp