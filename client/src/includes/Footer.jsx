import "../styles/footer.css";

// import googlePlay from "./assets/google-play.png";  // Add the correct path for the image
// import appStore from "./assets/app-store.png";      // Add the correct path for the image
// import visa from "./assets/visa.png";               // Add the correct path for the image
// import mastercard from "./assets/mastercard.png";   // Add the correct path for the image
// import rupay from "./assets/rupay.png";             // Add the correct path for the image
// import cashOnDelivery from "./assets/cash.png";     // Add the correct path for the image
// import upi from "./assets/upi.png";                 // Add the correct path for the image
// import amex from "./assets/amex.png";               // Add the correct path for the image
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaPinterest,
//   FaTwitter,
// } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Left Section - Categories & Information */}
      <div className="footer-left">
        <div className="footer-column">
          <h3>DESIGNER WEAR</h3>
          <ul>
            <li>Salwar Kameez</li>
            <li>Sarees</li>
            <li>Lehengas</li>
            <li>Gowns</li>
            <li>Kidswear</li>
            <li>Saree Blouse</li>
            <li>Kurtis</li>
            <li>IndoWestern Styles</li>
            <li>Mens</li>
            <li>Accessories</li>
            <li>Bridal Dresses</li>
            <li>Celebrity Wear</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>ABOUT US</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Web Stories</li>
            <li>Press</li>
            <li>Careers</li>
            <li>KALKI Boutique</li>
            <li>Fashion Show</li>
            <li>Buying Guide</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>POLICIES</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
            <li>Payment Policy</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>MY ACCOUNT</h3>
          <ul>
            <li>Shopping Bag</li>
            <li>Wishlist</li>
            <li>Order History</li>
            <li>Order Tracking</li>
            <li>Buy in Bulk</li>
          </ul>
        </div>
      </div>

      {/* Right Section - Payment & Contact */}
      <div className="footer-right">
        <div className="payment-section">
          <h3>SAFE & SECURE PAYMENT</h3>
          <div className="payment-icons">
            {/* <img src={mastercard} alt="MasterCard" />
            <img src={visa} alt="Visa" />
            <img src={cashOnDelivery} alt="Cash on Delivery" />
            <img src={upi} alt="UPI" />
            <img src={rupay} alt="RuPay" />
            <img src={amex} alt="American Express" /> */}
          </div>
        </div>

        <div className="app-download">
          <h3>EXPERIENCE KALKI APP ON MOBILE</h3>
          <div className="app-icons">
            {/* <img src={googlePlay} alt="Google Play Store" />
            <img src={appStore} alt="App Store" /> */}
          </div>
        </div>

        <div className="social-media">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            {/* <FaInstagram />
            <FaFacebookF />
            <FaYoutube />
            <FaPinterest />
            <FaTwitter /> */}
          </div>
        </div>

        <div className="contact-section">
          <h3>GET IN TOUCH</h3>
          <p>+91 (22) 4890 0416 (INDIA)</p>
          <p>+1 (408) 520 9415 (US)</p>
          <p>+44 (20) 7193 0887 (UK)</p>
          <p>+61 (02) 8006 4667 (AUS)</p>
        </div>

        <div className="email-section">
          <h3>EMAIL US ON</h3>
          <p>info@kalkifashion.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
