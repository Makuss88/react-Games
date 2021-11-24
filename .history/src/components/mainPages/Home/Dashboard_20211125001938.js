import React, { useState } from 'react';
import { Container, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';


const Dashboard = () => {

  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const logoutHandle = async () => {
    setError('');
    try {
      history.push('/signup')
      await logout();
    } catch {
      
    }
  }

  return (

    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ min: "100vh", marginTop: "40px" }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Card>
          <Card.Body>
            <h2 className="text-center m-3">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong> Email: </strong>{currentUser.email}
            <Link to='/update-profile' className=" btn btn-primary w-100 mt-4">
              Updated profile
            </Link>
          </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2' style={{ background: 'white', padding: "10px" }}>
          <Button variant="link" onClick={logoutHandle}>LOGOUT</Button>
        </div>
      </div>
    </Container>

  )
}

export default Dashboard
