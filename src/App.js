import React from "react";

import "./scss/app.scss"

import Header from "./components/Header";
import Home from "./Pages/Home";
import NoFound from "./Pages/NoFound";
import { BrowserRouter, Routes, Route,} from "react-router-dom";


function App() {
  return (
      <div className="wrapper">
        <div className="content">
          <Header/>
          <div className="container">
              <Routes>
                <Route path="/" element = {<Home/>}/>
              </Routes>
          </div>
        </div>
      </div>
    );
}
export default App;