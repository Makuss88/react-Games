import React from 'react'
import { Button, Card } from 'react-bootstrap'



const Dashboard = () => {

  const logoutHandle = () => {

  }

  return (
    <>
      <Card>

      </Card>
      <div className='w-100 text-center mt-2' style={{ background: 'white', padding: "10px" }}>
        Need an account? <Link to="/signup">Log In</Link>
      </div>
      <Button variant="link" onClick={logoutHandle}>LOGOUT</Button>
    </>
  )
}

export default Dashboard
