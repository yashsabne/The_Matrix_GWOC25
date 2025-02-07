import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import './App.css'
import Navbar from "./includes/Navbar";
import ProductDetails from "./pages/ProductDetails";
 
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<IndexPage />} />
 
          <Route path="/" element={<Navbar />} />
          <Route path="/product-details" element={<ProductDetails/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
