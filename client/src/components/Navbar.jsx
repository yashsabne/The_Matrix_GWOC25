import React, { useState } from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav>
      {/* Top Navigation */}
      <div className="top-nav">
        {/* Sidebar Toggle Button (Visible on Small Screens) */}
        <span className="menu-icon">
        <FaBars  onClick={() => setSidebarOpen(true)} />
        </span>

        {/* Categories (Visible only on Large Screens) */}
        <div className="categories">
          <button className="active">WOMEN</button>
          <button>MEN</button>
          <button>KIDS</button>
          <button>BRIDAL</button>
          <button className="luxe">LUXE</button>
        </div>

        {/* Logo */}
        <h1 className="logo">KALKI FASHION</h1>

        {/* Icons */}
        <div className="icons">
          <div className="search-container">
            <input type="text" placeholder="Search for Su..." />
            <FaSearch className="search-icon" />
          </div>
          <FaUser className="icon" />
          <div className="icon-badge">
            <FaHeart className="icon" />
            <span>0</span>
          </div>
          <div className="icon-badge">
            <FaShoppingBag className="icon" />
            <span>1</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation (Visible only on Large Screens) */}
      <div className="bottom-nav-container">
        <div className="bottom-nav">
          {[
            "BESTSELLERS",
            "SAREES",
            "SALWAR KAMEEZ",
            "LEHENGAS",
            "INDO WESTERN",
            "BLOUSE",
            "BRIDAL",
            "READY TO SHIP",
            "COLLECTION",
            "NEW",
            "SALE",
          ].map((item) => (
            <button key={item} className={item === "INDO WESTERN" ? "active" : ""}>
              {item}
            </button>
          ))}
        </div>

        {/* Event Badges */}
        <div className="badges">
          <span className="badge">SANGEET</span>
          <span className="badge">MEHENDI</span>
          <span className="badge">WEDDING</span>
        </div>
      </div>

      {/* Sidebar (Includes Both Top & Bottom Categories) */}
      <div className={`sidebar ${sidebarOpen ? "show" : ""}`}>
        {/* Close Button */}
        <FaTimes className="close-btn" onClick={() => setSidebarOpen(false)} />

        {/* Top Categories */}
        <div className="sidebar-section">
          <h3>Categories</h3>
          <button>WOMEN</button>
          <button>MEN</button>
          <button>KIDS</button>
          <button>BRIDAL</button>
          <button className="luxe">LUXE</button>
        </div>

        {/* Bottom Categories */}
        <div className="sidebar-section">
          <h3>Shop by Collection</h3>
          {[
            "BESTSELLERS",
            "SAREES",
            "SALWAR KAMEEZ",
            "LEHENGAS",
            "INDO WESTERN",
            "BLOUSE",
            "BRIDAL",
            "READY TO SHIP",
            "COLLECTION",
            "NEW",
            "SALE",
          ].map((item) => (
            <button key={item}>{item}</button>
          ))}
        </div>
      </div>

      {/* Overlay (Closes Sidebar on Click) */}
      {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)} />}
    </nav>
  );
};

export default Navbar;
