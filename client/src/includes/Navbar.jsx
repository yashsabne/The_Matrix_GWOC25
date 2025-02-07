import React, { useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaShoppingBag,
  FaBars,
  FaTimes,
  
} from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import "../styles/navbar.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const categories = [
    "NEW ARRIVALS",
    "DESIGNER SAREES",
    "SILK SAREES",
    "COTTON SAREES",
    "PARTY WEAR SAREES",
    "WEDDING SAREES",
    "READY TO SHIP",
    "COLLECTION",
    "SALE",
  ];

  const sidebarCategories = [
    "DESIGNER SAREES",
    "SILK SAREES",
    "COTTON SAREES",
    "PARTY WEAR SAREES",
    "WEDDING SAREES",
  ];

  const occasions = [
    "Festive Collection",
    "Wedding Collection",
    "Office Wear Sarees",
    "Casual Wear",
  ];

  return (
    <nav>
      {/* Top Navigation */}
      <div className="top-nav">
        {/* Sidebar Toggle (Mobile) */}
        <span className="menu-icon" onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </span>

        {/* Logo */}
        <h1 className="logo">Kashvi Creation</h1>

        {/* Icons */}
        <div className="icons">
          <div className="search-container">
            <input type="text" placeholder="Search for sarees..." />
            <FaSearch className="search-icon" />
          </div>
          <div className="icon-badge">
          <MdAccountCircle className="icon" />
          </div>
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

      {/* Bottom Navigation */}
      <div className="bottom-nav-container">
        <div className="bottom-nav">
          {categories.map((item) => (
            <button key={item} className={item === "SILK SAREES" ? "active" : ""}>
              {item}
            </button>
          ))}
        </div>
        <div className="badges">
          <span className="badge">FESTIVE COLLECTION</span>
          <span className="badge">WEDDING COLLECTION</span>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "show" : ""}`}>
        <FaTimes className="close-btn" onClick={() => setSidebarOpen(false)} />

        <div className="sidebar-section">
          <h3>Shop by Category</h3>
          {sidebarCategories.map((item) => (
            <button key={item}>{item}</button>
          ))}
        </div>

        <div className="sidebar-section">
          <h3>Shop by Occasion</h3>
          {occasions.map((item) => (
            <button key={item}>{item}</button>
          ))}
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)} />}
    </nav>
  );
};

export default Navbar;
