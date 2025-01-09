import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Client } from "./pages/Client/Client";
import { Layout } from "./Layout/Layout";
import "./App.css";
import { Navbar } from "./Layout/Navbar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "light" : "dark"
    );
  };

  return (
    <>
      <Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className="user-body">
        <div className="left-nav">
          <Navbar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/client" element={<Client />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
