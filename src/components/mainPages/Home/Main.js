import React from 'react'
import { Container } from 'react-bootstrap';

import { useAuth } from '../../../context/AuthContext';

import IsUserActive from './IsUserActive';
import IsUserDisactive from './IsUserDisactive';

const Main = () => {

  const { currentUser } = useAuth();

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ min: "100vh", marginTop: "40px" }}
    >
      <>
        {currentUser ? <IsUserActive /> : <IsUserDisactive />}
      </>
    </Container >
  )
}

export default Main
