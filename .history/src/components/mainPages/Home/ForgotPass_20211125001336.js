import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

const ForgotPass = () => {
  const emailRef = useRef();
  const { resetPass } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage('');
      setError("");
      setLoading(true);
      await resetPass(emailRef.current.value);
      setMessage('Check Your Email, ok ??')
    } catch {
      setError("Failed to reset!");
    }
    setLoading(false);
  }

  return (

    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ min: "100vh", marginTop: "40px" }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mt-4">Password reset</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100 mt-3" type="submit">
                Reset Password
              </Button>
            </Form>
            <div className='w-100 text-center mt-2' style={{ background: 'white', padding: "10px" }}>
              <Link to="/login">Login</Link>
            </div>
          </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2' style={{ background: 'white', padding: "10px" }}>
          Need an account? <Link to="/ForgotPass">Sign UP!</Link>
        </div>
      </div>
    </Container>
  )
}

export default ForgotPass;