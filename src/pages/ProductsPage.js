import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gadget1 from '../assets/gadget1.png';
import gadget2 from '../assets/gadget2.jpg';
import gadget3 from '../assets/gadget3.jpg';
import accessory1 from '../assets/accessory1.jpg';
import accessory2 from '../assets/accessory2.jpg';
import accessory3 from '../assets/accessory3.jpg';
import fashion1 from '../assets/fashion1.jpg';
import fashion2 from '../assets/fashion2.jpg';
import fashion3 from '../assets/fashion3.jpg';
import shoe1 from '../assets/shoe1.jpg';
import shoe2 from '../assets/shoe2.jpg';
import shoe3 from '../assets/shoe3.jpg';
import background from '../assets/products.jpg';

const ProductsPage = () => {
  return (
    <div className="products-page"
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

      {/* Gadgets Section */}
      <div className="products-section"
           style={{
             backgroundColor: 'rgba(255, 255, 255, 0.9)', // Transparent white background
             borderRadius: '10px', // Rounded corners
             padding: '20px', // Padding for the section
             marginTop: '80px', // Space below navbar
             marginBottom: '20px', // Space above next section
           }}>
        <h2>Gadgets</h2>
        <div className="products-container"
             style={{
               display: 'flex', // Flex display for alignment
               justifyContent: 'center', // Center align items horizontally
               gap: '20px', // Gap between product items
               flexWrap: 'wrap' // Wrap items if they overflow
             }}>
          {/* Gadget 1 */}
          <div className="product-item"
               style={{
                 width: '250px', // Fixed width for product item
                 marginBottom: '20px', // Space below product item
                 borderRadius: '10px', // Rounded corners
                 overflow: 'hidden', // Hide overflow
               }}>
            <img src={gadget1} alt="Gadget 1"
                 className="img-fluid"
                 style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
            <div className="product-description"
                 style={{
                   padding: '10px',
                   backgroundColor: '#fff',
                   borderBottomLeftRadius: '10px',
                   borderBottomRightRadius: '10px'
                 }}>
              <p>ROG PHONE 8 PRO</p>
              <p>Price: ₹94,999.00</p>
              <p>Ejector pin (SIM tray needle) 
USB power adapter (65W)
USB-C to USB-C cable
ROG AeroCase (premium phone case)
ROG sticker set
AeroActive Cooler X / Aero Case (for ROG Phone 8 Pro 24GB/1TB) Clear Case (for ROG Phone 8 Pro 16GB/512GB, ROG Phone 8 16GB/256GB, 12GB/256GB) USB-C® to USB-C® cable (120 cm) Ejector pin (SIM tray needle) USB power adapter (65-Watt) / (India only) USB power adapter (30-Watt) Documentation (user guide, warranty card)USB-C® to USB-C® cable (120 cm) 
Ejector pin (SIM tray needle)
USB power adapter (65-Watt) / (India only) USB power adapter (30-Watt)
Documentation (user guide, warranty card)</p>
              <p>Rating: ⭐⭐⭐⭐ (4)</p>
            </div>
          </div>

          {/* Gadget 2 */}
          <div className="product-item"
               style={{
                 width: '250px', // Fixed width for product item
                 marginBottom: '20px', // Space below product item
                 borderRadius: '10px', // Rounded corners
                 overflow: 'hidden', // Hide overflow
               }}>
            <img src={gadget2} alt="Gadget 2"
                 className="img-fluid"
                 style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
            <div className="product-description"
                 style={{
                   padding: '10px',
                   backgroundColor: '#fff',
                   borderBottomLeftRadius: '10px',
                   borderBottomRightRadius: '10px'
                 }}>
              <p>Galaxy S22 Ultra</p>
              <p>Price: ₹XXXX.XX</p>
              <p>Network : The bandwidths supported by the device may vary depending on the region or service provider.

* Battery: Actual battery life varies by network environment, features and apps used, frequency of calls and messages, number of times charged, and many other factors.

* User Available Memory: Actual user memory will vary depending on the operator and may change after software upgrades are performed.</p>
              <p>Rating: ⭐⭐⭐⭐⭐ (5)</p>
            </div>
          </div>

          {/* Gadget 3 */}
          <div className="product-item"
               style={{
                 width: '250px', // Fixed width for product item
                 marginBottom: '20px', // Space below product item
                 borderRadius: '10px', // Rounded corners
                 overflow: 'hidden', // Hide overflow
               }}>
            <img src={gadget3} alt="Gadget 3"
                 className="img-fluid"
                 style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
            <div className="product-description"
                 style={{
                   padding: '10px',
                   backgroundColor: '#fff',
                   borderBottomLeftRadius: '10px',
                   borderBottomRightRadius: '10px'
                 }}>
              <p>Airdopes Ace</p>
              <p>Price: ₹1,299.00</p>
              <p>Wireless Earbuds with 35 Hours Playback, ASAP™ Charge, BEAST™ Mode, ENx™ Technology</p>
              <p>Rating: ⭐⭐⭐ (3)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Accessories Section */}
      <div className="products-section"
           style={{
             backgroundColor: 'rgba(255, 255, 255, 0.9)', // Transparent white background
             borderRadius: '10px', // Rounded corners
             padding: '20px', // Padding for the section
             marginBottom: '20px', // Space above next section
           }}>
        <h2>Accessories</h2>
        <div className="products-container"
             style={{
               display: 'flex', // Flex display for alignment
               justifyContent: 'center', // Center align items horizontally
               gap: '20px', // Gap between product items
               flexWrap: 'wrap' // Wrap items if they overflow
             }}>
          {/* Accessory 1 */}
          <div className="product-item"
               style={{
                 width: '250px', // Fixed width for product item
                 marginBottom: '20px', // Space below product item
                 borderRadius: '10px', // Rounded corners
                 overflow: 'hidden', // Hide overflow
               }}>
            <img src={accessory1} alt="Accessory 1"
                 className="img-fluid"
                 style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
            <div className="product-description"
                 style={{
                   padding: '10px',
                   backgroundColor: '#fff',
                   borderBottomLeftRadius: '10px',
                   borderBottomRightRadius: '10px'
                 }}>
              <p>Dinner Set</p>
              <p>Price: ₹9,499.00</p>
              <p>Shay Ceramic Modern Dinner Set, 21 Pcs, Grey & White | Crockery Set | Ceramic Dinner Set | Matte Finish | Dinner Set Ceramic (Japandi Dinner Set - Grey & White, 21 Piece)</p>
              <p>Rating: ⭐⭐⭐⭐ (4)</p>
            </div>
          </div>

          {/* Accessory 2 */}
          <div className="product-item"
               style={{
                 width: '250px', // Fixed width for product item
                 marginBottom: '20px', // Space below product item
                 borderRadius: '10px', // Rounded corners
                 overflow: 'hidden', // Hide overflow
               }}>
            <img src={accessory2} alt="Accessory 2"
                 className="img-fluid"
                 style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
            <div className="product-description"
                 style={{
                   padding: '10px',
                   backgroundColor: '#fff',
                   borderBottomLeftRadius: '10px',
                   borderBottomRightRadius: '10px'
                 }}>
              <p>Apple Back Cover</p>
              <p>Price: ₹599.00</p>
              <p>Pikkme Back Cover | Support Mag-Safe Wireless Magnetic Charging | Hybrid Crystal Clear Transparent Case for iPhone 11 [TPU + Polycarbonate] (Black)</p>
              <p>Rating: ⭐⭐⭐⭐⭐ (5)</p>
            </div>
          </div>

          {/* Accessory 3 */}
          <div className="product-item"
               style={{
                 width: '250px', // Fixed width for product item
                 marginBottom: '20px', // Space below product item
                 borderRadius: '10px', // Rounded corners
                 overflow: 'hidden', // Hide overflow
               }}>
            <img src={accessory3} alt="Accessory 3"
                 className="img-fluid"
                 style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
            <div className="product-description"
                 style={{
                   padding: '10px',
                   backgroundColor: '#fff',
                   borderBottomLeftRadius: '10px',
                   borderBottomRightRadius: '10px'
                 }}>
                            <p>Door Curtain</p>
              <p>Price: ₹199.00</p>
              <p>Indian Online Mall Multicolor Polyresin Door Curtain Set, 7FtRR</p>
              <p>Rating: ⭐⭐⭐ (3)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fashion Section */}
      <div className="products-section"
           style={{
             backgroundColor: 'rgba(255, 255, 255, 0.9)', // Transparent white background
             borderRadius: '10px', // Rounded corners
             padding: '20px', // Padding for the section
             marginBottom: '20px', // Space above next section
           }}>
        <h2>Fashion</h2>
        <div className="products-container"
             style={{
               display: 'flex', // Flex display for alignment
               justifyContent: 'center', // Center align items horizontally
               gap: '20px', // Gap between product items
               flexWrap: 'wrap' // Wrap items if they overflow
             }}>
          {/* Fashion 1 */}
          <div className="product-item"
               style={{
                 width: '250px', // Fixed width for product item
                 marginBottom: '20px', // Space below product item
                 borderRadius: '10px', // Rounded corners
                 overflow: 'hidden', // Hide overflow
               }}>
            <img src={fashion1} alt="Fashion 1"
                 className="img-fluid"
                 style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
            <div className="product-description"
                 style={{
                   padding: '10px',
                   backgroundColor: '#fff',
                   borderBottomLeftRadius: '10px',
                   borderBottomRightRadius: '10px'
                 }}>
              <p>T-Shirt</p>
              <p>Price: ₹ 199.00</p>
              <p>Men's Tshirt Regular Fit For Light Activity-Black</p>
              <p>Rating: ⭐⭐⭐ (3)</p>
            </div>
          </div>

          {/* Fashion 2 */}
          <div className="product-item"
               style={{
                 width: '250px', // Fixed width for product item
                 marginBottom: '20px', // Space below product item
                 borderRadius: '10px', // Rounded corners
                 overflow: 'hidden', // Hide overflow
               }}>
            <img src={fashion2} alt="Fashion 2"
                 className="img-fluid"
                 style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
            <div className="product-description"
                 style={{
                   padding: '10px',
                   backgroundColor: '#fff',
                   borderBottomLeftRadius: '10px',
                   borderBottomRightRadius: '10px'
                 }}>
              <p>Trousers</p>
              <p>Price: ₹2,790.00</p>
              <p>Elite Trousers in Ice Grey</p>
              <p>Rating: ⭐⭐⭐⭐ (4)</p>
            </div>
          </div>

          {/* Fashion 3 */}
          <div className="product-item"
               style={{
                 width: '250px', // Fixed width for product item
                 marginBottom: '20px', // Space below product item
                 borderRadius: '10px', // Rounded corners
                 overflow: 'hidden', // Hide overflow
               }}>
            <img src={fashion3} alt="Fashion 3"
                 className="img-fluid"
                 style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
            <div className="product-description"
                 style={{
                   padding: '10px',
                   backgroundColor: '#fff',
                   borderBottomLeftRadius: '10px',
                   borderBottomRightRadius: '10px'
                 }}>
              <p>Palazo</p>
              <p>Price: ₹1,205.00</p>
              <p>Green Solid Palazo</p>
              <p>Rating: ⭐⭐⭐⭐⭐ (5)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footwear Section */}
      <div className="products-section"
           style={{
             backgroundColor: 'rgba(255, 255, 255, 0.9)', // Transparent white background
             borderRadius: '10px', // Rounded corners
             padding: '20px', // Padding for the section
             marginBottom: '20px', // Space above next section
           }}>
        <h2>Footwear</h2>
        <div className="products-container"
             style={{
               display: 'flex', // Flex display for alignment
               justifyContent: 'center', // Center align items horizontally
               gap: '20px', // Gap between product items
               flexWrap: 'wrap' // Wrap items if they overflow
             }}>
          {/* Shoe 1 */}
          <div className="product-item"
               style={{
                 width: '250px', // Fixed width for product item
                 marginBottom: '20px', // Space below product item
                 borderRadius: '10px', // Rounded corners
                 overflow: 'hidden', // Hide overflow
               }}>
            <img src={shoe1} alt="Shoe 1"
                 className="img-fluid"
                 style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
            <div className="product-description"
                 style={{
                   padding: '10px',
                   backgroundColor: '#fff',
                   borderBottomLeftRadius: '10px',
                   borderBottomRightRadius: '10px'
                 }}>
              <p>Color Sport Footwear</p>
              <p>Price: ₹7,939.00</p>
              <p>Autper Kids Air Tennis Running Shoes Memory Foam Athletic Lightweight Sports Walking Sneakers for Boys Girls </p>
              <p>Rating: ⭐⭐⭐⭐⭐ (5)</p>
            </div>
          </div>

          {/* Shoe 2 */}
          <div className="product-item"
               style={{
                 width: '250px', // Fixed width for product item
                 marginBottom: '20px', // Space below product item
                 borderRadius: '10px', // Rounded corners
                 overflow: 'hidden', // Hide overflow
               }}>
            <img src={shoe2} alt="Shoe 2"
                 className="img-fluid"
                 style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
            <div className="product-description"
                 style={{
                   padding: '10px',
                   backgroundColor: '#fff',
                   borderBottomLeftRadius: '10px',
                   borderBottomRightRadius: '10px'
                 }}>
              <p>INKLENZO Shoes</p>
              <p>Price: ₹2533.00</p>
              <p>Rainbow 811 Shoes Running shoes for boys | sports shoes for men | Latest Stylish Running Shoes For Men  (Red)</p>
              <p>Rating: ⭐⭐⭐⭐ (4)</p>
            </div>
          </div>

          {/* Shoe 3 */}
          <div className="product-item"
               style={{
                 width: '250px', // Fixed width for product item
                 marginBottom: '20px', // Space below product item
                 borderRadius: '10px', // Rounded corners
                 overflow: 'hidden', // Hide overflow
               }}>
            <img src={shoe3} alt="Shoe 3"
                 className="img-fluid"
                 style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
            <div className="product-description"
                 style={{
                   padding: '10px',
                   backgroundColor: '#fff',
                   borderBottomLeftRadius: '10px',
                   borderBottomRightRadius: '10px'
                 }}>
              <p>Sporty Shoes</p>
              <p>Price: Rs.391.33</p>
              <p>2024 New Fashion Running Shoes Boys Spring Mesh Sneaker Kid Casual Walking Children Outdoor Breathable Comfort Light Sports Shoe</p>
              <p>Rating: ⭐⭐⭐⭐⭐ (5)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

