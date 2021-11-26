import React from 'react'

import { useAuth } from '../../../context/AuthContext';
import { Container } from 'react-bootstrap';
import  {Link} from 'react-router-dom;'


const Main = () => {

  const { currentUser } = useAuth();

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ min: "100vh", marginTop: "40px" }}
    >
      <>
        {currentUser ? "ok" : <div className='w-100' style={{ maxWidth: '400px' }}>Witaj przyjacielu na mojej stronie z grami! Możesz się zalogować, lub zbierać punkty bez rejestracji. MIŁEGO</div>}
      </>
    </Container >
  )
}

export default Main
