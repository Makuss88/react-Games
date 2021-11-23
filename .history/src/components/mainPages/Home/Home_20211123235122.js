import React from 'react';
import SignUp from './SignUp.js';

import { Container, } from 'react-bootstrap';

const Home = () => {

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ min: "100vh", marginTop: "40px" }}
    >

        <SignUp />
      
    </Container>
  )
}

export default Home;