import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <> 
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
 
      </BrowserRouter>
 
    </>
  )
}

export default App
