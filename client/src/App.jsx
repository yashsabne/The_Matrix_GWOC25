import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProductListing from "./pages/ProductListing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productlisting" element={<ProductListing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
