import React from "react";
import { Routes, Route } from "react-router-dom";
import Faculty from "../pages/Faculty";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";

function Routers() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <Navbar />
        <div>
        <Routes>
          <Route path="/" element={<Faculty />} />
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default Routers;