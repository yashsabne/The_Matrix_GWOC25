





import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../styles/navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Navbar = () => {
  // Create a ref for the search input element
  const searchInputRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Search for silk sarees",
        "Search for cotton sarees",
        "Search for linen sarees",
      ],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
      attr: "placeholder", // update the placeholder attribute
      smartBackspace: true,
    };

    // Initialize Typed.js on the search input element
    const typed = new Typed(searchInputRef.current, options);

    // Cleanup Typed.js instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <nav className="navbar navbar-expand border-bottom bg-white sticky-top mt-2 px-3">
      <div className="container-fluid px-0 custom-navbar-width">
        <a className="navbar-brand" href="#">
          <h2 className="bodoni-moda-bodoni" style={{ marginTop: "5px" }}>
            KASHVI
          </h2>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto d-none d-sm-flex w-100">
            <li className="nav-item ms-5">
              <a className="nav-link active" aria-current="page" href="#">
                Silk
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link active" aria-current="page" href="#">
                Cotton
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link active" aria-current="page" href="#">
                Linen
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link active" aria-current="page" href="#">
                Regional
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link active" aria-current="page" href="#">
                Banarasiya
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link active" aria-current="page" href="#">
                About us
              </a>
            </li>
          </ul>

          <form className="d-flex me-4" role="search">
            <input
              ref={searchInputRef} // attach the ref here
              className="form-control form-control-sm rounded-start"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{
                backgroundColor: "rgb(243, 243, 243)",
                fontSize: "0.775rem",
                height: "35px",
                width: "200px",
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
                textAlign: "center",
              }}
            />
            <button
              className="btn btn-sm btn-dark rounded-end rounded-0"
              type="submit"
            >
              <SearchIcon fontSize="small" />
            </button>
          </form>

          <WhatsAppIcon className="me-3 nav-icons" fontSize="medium" />
          <AccountCircleOutlinedIcon
            className="me-3 nav-icons"
            fontSize="medium"
          />
          <FavoriteBorderOutlinedIcon
            className="nav-icons me-3"
            fontSize="medium"
          />
          <ShoppingBagOutlinedIcon className="nav-icons" fontSize="medium" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

