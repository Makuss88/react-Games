import React, { useState } from 'react'
import { Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../../context/AuthContext';


const Dashboard = () => {

  const [error, setError] = useState('')
  const {} = useAuth
    
  const logoutHandle = () => {

  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong> Email: </strong>{currentUser.email}
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2' style={{ background: 'white', padding: "10px" }}>
        <Button variant="link" onClick={logoutHandle}>LOGOUT</Button>
      </div>
    </>
  )
}

export default Dashboard
