import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import background from '../assets/signup.jpg'; // Replace with your background image path

const SignupPage = () => {
  const history = useHistory(); // Initialize useHistory
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(formData); // Placeholder for demonstration

    // Simulate successful registration
    // Assuming validation and backend integration succeeds
    // Show alert and redirect to login page
    alert('Registered successfully!');
    history.push('/login'); // Redirect to login page after alert OK

    // You can add actual backend integration and validation here
  };

  return (
    <div style={pageContainerStyle}>
      <NavigationBar />
      <div style={{ ...containerStyle, backgroundImage: `url(${background})` }}>
        <Container fluid>
          <Row className="justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 80px - 60px)' }}>
            <Col md={8} lg={6}>
              <div style={formContainerStyle}>
                <h2 style={formTitleStyle}>Sign Up</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formUsername">
                    <Form.Label style={labelStyle}>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label style={labelStyle}>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label style={labelStyle}>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formConfirmPassword">
                    <Form.Label style={labelStyle}>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" block style={submitButtonStyle}>
                    Sign Up
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

// CSS-in-JS styles (unchanged)
const pageContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
};

const containerStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.8)', // Black background with transparency
  flex: '1', // Take remaining space
  paddingTop: '80px', // Add padding for fixed Navbar
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
};

const formContainerStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent white background for form
  padding: '40px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Shadow effect
  width: '100%' // Full width of the column
};

const formTitleStyle = {
  color: '#333333',
  marginBottom: '20px'
};

const labelStyle = {
  color: '#333333'
};

const inputStyle = {
  borderColor: '#333333'
};

const submitButtonStyle = {
  backgroundColor: '#333333',
  borderColor: '#333333',
  marginTop: '20px'
};

export default SignupPage;
