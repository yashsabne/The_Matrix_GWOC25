import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import './App.css'
// import Navbar from "./components/Navbar";
import Navbar from "./includes/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Dashboard from "./pages/Dashboard"; 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<IndexPage />} />
          <Route path="/" element={<Navbar />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/dashboard" element={<Dashboard />} /> 

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
