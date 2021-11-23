import React, { useState, useRef } from 'react'

import { Form, Card, Button, FormGroup, FormLabel, FormControl, Alert } from 'react-bootstrap';
import { useAuth } from '../../../context/AuthContext';

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submitHandle = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do not match')
    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to login")
    }
  }


  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign UP!</h2>
          <Form onSubmit={submitHandle}>
            {error && <Alert variant='danger'>{error}</Alert>}
            <FormGroup id='email'>
              <FormLabel>Email</FormLabel>
              <FormControl type='email' ref={emailRef} required />
            </FormGroup>
            <FormGroup id='password'>
              <FormLabel>Password</FormLabel>
              <FormControl type='password' ref={passwordRef} required />
            </FormGroup>
            <FormGroup id='password-confirm'>
              <FormLabel>Password Cofirmation</FormLabel>
              <FormControl type='password' ref={passwordConfirmRef} required />
            </FormGroup>
            <Button disabled={loading} className="w-100" type="submit" style={{ marginTop: '10px' }}> SIGN UP </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2' style={{ background: 'white', padding: "10px" }}>
        Arledy hane an account?? LOGIN!
      </div>
    </>
  )
}

export default SignUp
