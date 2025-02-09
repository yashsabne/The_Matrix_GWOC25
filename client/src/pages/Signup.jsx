import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import "../styles/signup.css";

export default function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      {/* Left side - Banner */}
      <div className="signup-banner">
        <div className="signup-banner-overlay"></div>
        <div className="signup-banner-content">
          <h1>Register & Be A Part Of The KALKI Circle!</h1>

          <p className="bold">Join Now.</p>
          <p className="small">T&C Apply</p>
        </div>
      </div>

      {/* Right side - Signup Form */}
      <div className="signup-form-container">
        <div className="signup-form">
          <h2>Sign Up</h2>
          <p className="text-muted">
            Welcome to Kalki! It's quick and easy to set up an account
          </p>

          <form>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name*"
              required
            />
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name*"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address*"
              required
            />
            <div className="phone-input">
              <span className="phone-prefix">+91 🇮🇳</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                required
              />
            </div>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password*"
              required
            />

            <button type="submit">NEXT</button>
          </form>

          <p className="text-muted small-text mt-3">
            By continuing, I agree to the Terms of Use and Privacy Policy
          </p>

          <div className="social-icons">
            <FaFacebook size={30} className="facebook-icon" />
            <FaGoogle size={30} className="google-icon" />
          </div>

          <p className="text-muted small-text mt-3">
            Already have an account?{" "}
            <span className="text-primary">
              <a href="/login">Sign In</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
