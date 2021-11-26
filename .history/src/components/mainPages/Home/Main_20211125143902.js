import React from 'react'
import { Container } from 'react-bootstrap';

import { useAuth } from '../../../context/AuthContext';

import IsUserNotInMyApp from './IsUserNotInMyApp';

const Main = () => {

  const { currentUser } = useAuth();

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ min: "100vh", marginTop: "40px" }}
    >
      <>
        {currentUser ? "ok" : <IsUserDisactivate />}
      </>
    </Container >
  )
}

export default Main
