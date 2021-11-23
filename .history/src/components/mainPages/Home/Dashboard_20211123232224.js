import React, { useState } from 'react'
import { Button, Card, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';


const Dashboard = () => {

  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()

  const logoutHandle = () => {
    setError('')
    try {
      await
      await
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center m-3">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong> Email: </strong>{currentUser.email}
          <Link to='/updated-profile' className=" btn btn-primary w-100 mt-4">
            Updated profile
          </Link>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2' style={{ background: 'white', padding: "10px" }}>
        <Button variant="link" onClick={logoutHandle}>LOGOUT</Button>
      </div>
    </>
  )
}

export default Dashboard
