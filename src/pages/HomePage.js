import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Modal, Button, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import customer1 from '../assets/customer1.jpg';
import customer2 from '../assets/customer2.jpg';
import customer3 from '../assets/customer3.jpg';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import background from '../assets/home.png';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [adminMode, setAdminMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showAdminSection, setShowAdminSection] = useState(false);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const toggleAdminMode = () => {
    if (adminMode) {
      // Exit admin mode
      setAdminMode(false);
      setShowAdminSection(false);
    } else {
      // Show login modal
      setShowModal(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setShowModal(false);
      setAdminMode(true);
      alert('Welcome Admin!');
      setShowAdminSection(true);
    } else {
      setLoginError('Invalid username or password.');
    }
  };

  return (
    <div className="home-page"
         style={{
           backgroundImage: `url(${background})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           minHeight: '100vh',
           paddingTop: '80px', // Adjust as needed
           fontFamily: 'Arial, sans-serif', // Font family for consistency
           color: '#333', // Default text color
           textAlign: 'center', // Center align text
           padding: '0 20px' // General padding for content
         }}>
      {/* Fixed Navbar */}
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand as={Link} to="/">E-commerce Store</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
        </Nav>
      </Navbar>

      {/* Welcome Section */}
      <div className="welcome-section"
           style={{
             backgroundColor: 'rgba(255, 255, 255, 0.9)', // Transparent white background
             borderRadius: '10px', // Rounded corners
             padding: '20px', // Padding for the welcome section
             marginTop: '80px', // Space below navbar
             marginBottom: '20px', // Space above products
           }}>
        <h1>Welcome to E-commerce Store</h1>
        <p>
        At E-commerce Store, we're dedicated to bringing you the latest and greatest in tech, fashion, and more. Whether you're looking for cutting-edge electronics, stylish apparel, or must-have accessories, we've got you covered. Our mission is to provide an exceptional shopping experience with top-notch customer service and unbeatable prices.

Explore our curated selection of products designed to enhance your lifestyle and meet your every need. From premium smartphones and powerful gaming laptops to trendy streetwear and exclusive footwear collections, we've sourced the best brands and products just for you.

Join our community of satisfied customers who trust us for quality, reliability, and style. Shop with confidence knowing that each item is carefully selected to meet our highest standards.

Welcome to E-commerce Store, where your shopping journey begins!
        </p>
      </div>

      {/* Trending Products Section */}
      <div className="trending-products-section"
           style={{
             backgroundColor: 'rgba(255, 255, 255, 0.9)', // Transparent white background
             borderRadius: '10px', // Rounded corners
             padding: '20px', // Padding for the products section
             marginBottom: '20px', // Space below products
             display: 'flex', // Flex display for alignment
             justifyContent: 'center', // Center align items horizontally
             gap: '20px', // Gap between product items
             flexWrap: 'wrap' // Wrap items if they overflow
           }}>
        <h2>Trending Products</h2>

        {/* Product 1 */}
        <div className="product-item"
             style={{
               position: 'relative', // Relative positioning for hover effect
               overflow: 'hidden', // Hide overflow
               width: '250px', // Fixed width for product item
               height: '300px', // Fixed height for product item (adjusted for description height)
               borderRadius: '10px', // Rounded corners
               cursor: 'pointer', // Pointer cursor on hover
               transition: 'transform 0.3s ease-in-out' // Smooth transform transition
             }}
             onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
             onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
          <img src={product1} alt="Product 1"
               className="img-fluid"
               style={{ width: '100%', height: '70%', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
          <div className="product-description"
               style={{
                 padding: '10px',
                 backgroundColor: '#fff',
                 borderBottomLeftRadius: '10px',
                 borderBottomRightRadius: '10px'
               }}>
            <p>ROG Strix G15 (2022) | Gaming Laptops｜ROG - Republic of Gamers</p>
            <p>Power through intense gaming sessions with the ROG Strix G15, featuring advanced cooling technology and high-performance components.</p>
            <p>Rating: 5 (23 reviews)</p>
            <p>₹89,999.00 INR*</p>
            <p>In stock</p>
            <p>Brand: ASUS</p>
            <a href="https://www.asus.com/Laptops/ROG-Strix-G15/" target="_blank" rel="noopener noreferrer">Find the ROG Strix G15 at ASUS.com</a>
          </div>
        </div>

        {/* Product 2 */}
        <div className="product-item"
             style={{
               position: 'relative', // Relative positioning for hover effect
               overflow: 'hidden', // Hide overflow
               width: '250px', // Fixed width for product item
               height: '300px', // Fixed height for product item (adjusted for description height)
               borderRadius: '10px', // Rounded corners
               cursor: 'pointer', // Pointer cursor on hover
               transition: 'transform 0.3s ease-in-out' // Smooth transform transition
             }}
             onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
             onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
          <img src={product2} alt="Product 2"
               className="img-fluid"
               style={{ width: '100%', height: '70%', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
          <div className="product-description"
               style={{
                 padding: '10px',
                 backgroundColor: '#fff',
                 borderBottomLeftRadius: '10px',
                 borderBottomRightRadius: '10px'
               }}>
            <p>Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 256GB Storage)</p>
            <p>Welcome to the era of mobile AI. With Galaxy S24 Ultra in your hands, you can unleash whole new levels of creativity, productivity and possibility.</p>
            <p>Rating: 4.4 (210 reviews)</p>
            <p>₹129,999.00 INR*</p>
            <p>In stock</p>
            <a href="https://www.samsung.com/in/smartphones/galaxy-s24-ultra/" target="_blank" rel="noopener noreferrer">Find the Galaxy S24 Ultra at Samsung.com</a>
          </div>
        </div>

        {/* Product 3 */}
        <div className="product-item"
             style={{
               position: 'relative', // Relative positioning for hover effect
               overflow: 'hidden', // Hide overflow
               width: '270px', // Fixed width for product item
               height: '300px', // Fixed height for product item (adjusted for description height)
               borderRadius: '10px', // Rounded corners
               cursor: 'pointer', // Pointer cursor on hover
               transition : 'transform 0.3s ease-in-out' // Smooth transform transition
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
           <img src={product3} alt="Product 3"
                className="img-fluid"
                style={{ width: '100%', height: '70%', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
           <div className="product-description"
                style={{
                  padding: '10px',
                  backgroundColor: '#fff',
                  borderBottomLeftRadius: '10px',
                  borderBottomRightRadius: '10px'
                }}>
             <p>Air Jordan 1 Mid SS Older Kids' Shoes</p>
             <p>Experience style and comfort with the Air Jordan 1 Mid SS, designed for older kids with a passion for streetwear fashion.</p>
             <p>Rating: 5 (23 reviews)</p>
             <p>₹8,547.00 INR*</p>
             <p>Out of stock</p>
             <p>Brand: Nike</p>
             <a href="https://www.nike.com/in/" target="_blank" rel="noopener noreferrer">Find the Air Jordan 1 Mid SS at Nike.com</a>
           </div>
         </div>
       </div>
 
       {/* Enter/Exit Admin Mode Button */}
       <div className="admin-mode-button"
            style={{
              display: 'flex', // Flex display for alignment
              justifyContent: 'center', // Center align items horizontally
              marginBottom: '20px' // Space below the button
            }}>
         <button className="btn btn-danger"
                 style={{
                   backgroundColor: adminMode ? 'green' : 'red', // Red background color when not in admin mode, green when in admin mode
                   borderColor: adminMode ? 'green' : 'red', // Red border color when not in admin mode, green when in admin mode
                   color: 'white', // White text color
                   padding: '10px 20px', // Padding for the button
                   fontSize: '16px', // Font size for the button
                   borderRadius: '5px', // Rounded corners
                   cursor: 'pointer', // Pointer cursor on hover
                   transition: 'background-color 0.3s ease-in-out' // Smooth background color transition
                 }}
                 onClick={toggleAdminMode}>
           {adminMode ? 'Exit Admin Mode' : 'Enter Admin Mode'}
         </button>
       </div>
 
       {/* Admin Section */}
       {showAdminSection && (
         <div className="admin-section"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)', // Transparent white background
                borderRadius: '10px', // Rounded corners
                padding: '20px', // Padding for the admin section
                marginBottom: '20px', // Space below the section
              }}>
           <h2>Admin Section</h2>
           <div className="admin-details">
             <h3>Budget Details</h3>
             <p>Total Budget: ₹5,000,000 INR</p>
             <p>Marketing Budget: ₹1,500,000 INR</p>
             <p>Operational Budget: ₹2,000,000 INR</p>
             <p>Development Budget: ₹1,500,000 INR</p>
             <h3>Stock Information</h3>
             <p>Product 1: 120 units in stock</p>
             <p>Product 2: 80 units in stock</p>
             <p>Product 3: 0 units in stock (Out of stock)</p>
             <h3>Company Geographical Regions</h3>
             <p>North America</p>
             <p>Europe</p>
             <p>Asia</p>
             <p>Australia</p>
           </div>
         </div>
       )}
 
       {/* Customer Reviews Section */}
       <div className="customer-reviews-section"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)', // Transparent white background
              borderRadius: '10px', // Rounded corners
              padding: '20px', // Padding for the customer reviews section
              marginTop: '20px' // Adjusted top margin
            }}>
         <h2>Customer Reviews</h2>
         <div className="d-flex justify-content-around align-items-center">
           {/* Customer 1 */}
           <div className="text-center">
             <div className="customer-image-wrapper"
                  style={{
                    width: '100px', // Fixed size for the customer image wrapper
                    height: '100px', // Fixed size for the customer image wrapper
                    borderRadius: '50%', // Circular shape
                    overflow: 'hidden', // Hide overflow
                    border: '2px solid #333', // Dark border
                    transition: 'transform 0.3s ease-in-out', // Smooth transform transition
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
               <img src={customer1} alt="Customer 1"
                    className="customer-image img-fluid"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
             <p>"Absolutely love the product! It exceeded my expectations in terms of performance and design"</p>
             <p>⭐⭐⭐⭐⭐ (5)</p> {/* Rating emoji */}
             <p>Honest and brief review of the product.</p>
           </div>
 
           {/* Customer 2 */}
           <div className="text-center">
             <div className="customer-image-wrapper"
                  style={{
                    width: '100px', // Fixed size for the customer image wrapper
                    height: '100px', // Fixed size for the customer image wrapper
                    borderRadius: '50%', // Circular shape
                    overflow: 'hidden', // Hide overflow
                    border: '2px solid #333', // Dark border
                    transition: 'transform 0.3s ease-in-out', // Smooth transform transition
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
               <img src={customer2} alt="Customer 2"
                    className="customer-image img-fluid"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
             <p>"Good value for money. The product works great and has all the features I need."</p>
             <p>⭐⭐⭐⭐ (4)</p> {/* Rating emoji */}
             <p>Honest and brief review of the product.</p>
           </div>
 
           {/* Customer 3 */}
           <div className="text-center">
             <div className="customer-image-wrapper"
                  style={{
                    width: '100px', // Fixed size for the customer image wrapper
                    height: '100px', // Fixed size for the customer image wrapper
                    borderRadius: '50%', // Circular shape
                    overflow: 'hidden', // Hide overflow
                    border: '2px solid #333', // Dark border
                    transition: 'transform 0.3s ease-in-out', // Smooth transform transition
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
               <img src={customer3} alt="Customer 3"
                    className="customer-image img-fluid"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
             <p>Highly recommend this product. It's reliable and stylish, perfect for my daily use.</p>
             <p>⭐⭐⭐⭐⭐ (5)</p> {/* Rating emoji */}
             <p>Honest and brief review of the product.</p>
           </div>
         </div>
       </div>
 
       {/* Admin Login Modal */}
       <Modal show={showModal} onHide={() => setShowModal(false)}>
         <Modal.Header closeButton>
           <Modal.Title>Admin Login</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           {loginError && <Alert variant="danger">{loginError}</Alert>}
           <Form onSubmit={handleLogin}>
             <Form.Group controlId="formUsername">
               <Form.Label>Username</Form.Label>
               <Form.Control
                 type="text"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                 placeholder="Enter username"
                 required
               />
             </Form.Group>
             <Form.Group controlId="formPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 placeholder="Enter password"
                 required
               />
             </Form.Group>
             <Button variant="primary"
            type="submit"
            style={{ width: '100%' }}
          >
            Login
          </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default HomePage;

 
