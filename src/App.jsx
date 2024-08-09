


import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import HomePage from "./pages/HomePage";
import Collection from "./pages/Collection";
import Men from "./pages/Men";
import Women from "./pages/Women";
import About from "./pages/About";

import Contact from "./pages/Contact";





function App() {


  return (
    <div className="main">
    <BrowserRouter>
   <Routes>

<Route path="/" element={<HomePage/>}>
    <Route path="/Collection" element={<Collection/>}  />
   <Route path="/Men" element={<Men/>} />
   <Route path="/Women" element={<Women/>} />
   <Route path="/About" element={<About/>} />
   <Route path="/Contact" element={<Contact/>} />
</Route>
  </Routes>
  </BrowserRouter>


</div>


  
    
  )
}

export default App
