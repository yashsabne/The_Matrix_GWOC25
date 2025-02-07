import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import './App.css'
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<IndexPage />} />
 
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
