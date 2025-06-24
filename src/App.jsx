import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Menu from './Components/Menu';
import FoodDetail from "./Components/FoodDetail";
import { Menu } from "./assets/data.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/food/:id" element={<FoodDetail />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
