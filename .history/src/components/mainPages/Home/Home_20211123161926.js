import React from 'react';
import SignUp from './SignUp.js';

import { Container, } from 'react-bootstrap';

const Home = () => {



  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ min: "100vh", marginTop: "40px" }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <SignUp />
      </div>
    </Container>
  )
}

export default Home;