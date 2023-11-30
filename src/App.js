import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Nav } from "./components/Nav";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home name="PHOTOGENIC" />} />
          <Route path="/about" element={<About name="PhotoGenic" />} />
          <Route path="/contact" element={<Contact name="PhotoGenic" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
