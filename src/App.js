import React from "react";

import "./scss/app.scss"

import Header from "./components/Header";
import Home from "./Pages/Home";
import Card from "./Pages/Card";
import NoFound from "./Pages/NoFound";
import { BrowserRouter, Routes, Route,} from "react-router-dom";


function App() {
  return (
      <div className="wrapper">
        <div className="content">
          <Header/>
          <div className="container">
              <Routes>
                  <Route exact path= {"/"} element = {<Home/>}/>
                  <Route exact path= {"/card"} element = {<Card/>}/>
                  <Route exact path= {"*"} element = {<NoFound/>}/>
              </Routes>
          </div>
        </div>
      </div>
    );
}
export default App;