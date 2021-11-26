import React from 'react'
import { Link } from 'react-router-dom';

import { useAuth } from '../../../context/AuthContext';
import { Container } from 'react-bootstrap';


const Main = () => {

  const { currentUser } = useAuth();

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ min: "100vh", marginTop: "40px" }}
    >
      <>
        {currentUser ? "ok" : }
      </>
    </Container >
  )
}

export default Main
