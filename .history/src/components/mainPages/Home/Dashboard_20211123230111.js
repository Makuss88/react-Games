import React from 'react'
import { Card } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <>
      <Card>
        
      </Card>
      <div className='w-100 text-center mt-2' style={{ background: 'white', padding: "10px" }}>
        Need an account? <Link to="/signup">Log In</Link>
      </div>
    </>
  )
}

export default Dashboard
