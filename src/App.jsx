import React from "react";
import Home from "./pages/Home";
import SnapLogin from "./pages/SnapLogin";
// react router dom import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  // react router dom use
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/snapchat"  element={<SnapLogin/>} />
      </Routes>
    </Router>
  );

}

export default App;
