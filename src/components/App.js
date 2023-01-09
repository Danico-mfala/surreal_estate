import React from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

import "../styles/App.css";
import "../styles/properties.css";
import "../styles/add-property.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Properties />} />
        <Route exact path="/add-property" element={<AddProperty />} />
      </Routes>

      <header className="App-header">
        <h2>Surreal estate</h2>
      </header>
    </div>
  );
}

export default App;
