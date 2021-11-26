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
      history.push('/');
      await logout();
    } catch {
      setError('Problem to logout');
    };
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ min: "100vh", marginTop: "40px" }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Card>
          <Card.Body>
            <h2 className="text-center m-3">Moje konto</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong> Email: </strong>{currentUser.email}
            <Link to='/update-profile' className=" btn btn-primary w-100 mt-4">
              Zmiany, zmiany...
            </Link>
          </Card.Body>
        </Card>
        <div className='w-100 text-center mt-3' style={{  bor background: 'white', padding: "10px" }}>
          <Button variant="link" onClick={logoutHandle}>WYLOGUJ SIĘ!</Button>
          <Link to='/' className="btn btn-primary w-100 mt-4">
            Wróć
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;