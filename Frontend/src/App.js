import  React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Devices from "./components/Mainsection/Devices";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Devices" element={<Devices />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
