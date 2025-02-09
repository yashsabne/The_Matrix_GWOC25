import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import "../styles/login.css";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
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
          <h1>Welcome Back to KALKI!</h1>
          <p className="bold">Sign in to continue.</p>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="signup-form-container">
        <div className="signup-form">
          <h2>Login</h2>
          <p className="text-muted">
            Enter your credentials to access your account
          </p>

          <form>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address*"
              required
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password*"
              required
            />
            <p className="forgot-password">Forgot Password?</p>
            <button type="submit">LOGIN</button>
          </form>

          <div className="social-icons">
            <FaFacebook size={30} className="facebook-icon" />
            <FaGoogle size={30} className="google-icon" />
          </div>

          <p className="text-muted small-text mt-3">
            Don't have an account?{" "}
            <span className="text-primary">
              <a href="/signup">Sign Up</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
