import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";

function App() {
  
  return (
    <> 
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/product-details" element={<ProductDetails/>}/>
        </Routes>
 
      </BrowserRouter>
 
    </>
  )
}

export default App
