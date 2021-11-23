import React, { useState, useEffect, useRef } from 'react'

import { Form, Card, Button, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { useAuth } from '../../../context/AuthContext';
import { fire } from '../../../firebase';

const SignUp = () => {
  // const emailRef = useRef(null);
  // const passwordRef = useRef(null);
  // const passwordConfirmRef = useRef(null);
  // const { signup } = useAuth()

  // const submitHandle = (e) => {
  //   e.preventDefault();
  //   signup(emailRef.current.value, passwordRef.current.value);
  // }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')


  const submitHandle = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      })
  }

  const signupHandle = () => {
    fire
      .auth()
      .crea(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      })
  }

  return (
    <>


      dupkas
      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign UP!</h2>
          <Form >
            <FormGroup id='email'>
              <FormLabel>Email</FormLabel>
              <FormControl tyle='email' ref={emailRef} required />
            </FormGroup>
            <FormGroup id='password'>
              <FormLabel>Password</FormLabel>
              <FormControl tyle='password' ref={passwordRef} required />
            </FormGroup>
            <FormGroup id='password-confirm'>
              <FormLabel>Password Cofirmation</FormLabel>
              <FormControl tyle='password' ref={passwordConfirmRef} required />
            </FormGroup>
            <Button className="w-100" type="submit" style={{ marginTop: '10px' }}> SIGN UP </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2' style={{ background: 'white', padding: "10px" }}>
        Arledy hane an account?? LOGIN!
      </div> */}
    </>
  )
}

export default SignUp
