import React from 'react'
import { Button, Card } from 'react-bootstrap'



const Dashboard = () => {

  const error, setError = const [state, setstate] = useState(initialState)

  const logoutHandle = () => {

  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2' style={{ background: 'white', padding: "10px" }}>
        <Button variant="link" onClick={logoutHandle}>LOGOUT</Button>
      </div>
    </>
  )
}

export default Dashboard