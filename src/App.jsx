import React from "react";
import { Link, Router, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        {/* <Link to="/home">Home</Link> */}
        <HomePage />
      </div>
    </>
  );
}

export default App;
