import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container className="text-center py-3">
        &copy; 2024 E-commerce Store. All rights reserved.
      </Container>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#343a40', // Dark background
  color: '#ffffff', // White text
  position: 'fixed',
  bottom: '0',
  width: '100%',
  textAlign: 'center',
  height: '60px' // Adjust as needed
};

export default Footer;
