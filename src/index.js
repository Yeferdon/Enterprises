import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";

import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <App />
      <Footer />
    </Router>
  </React.StrictMode>
);
