import React from "react";
import ReactDOM from "react-dom";


import "bootstrap/dist/css/bootstrap.min.css";

import Rout from "./App";
import { BrowserRouter } from "react-router-dom";
import './index.css'





ReactDOM.render(
  <>
    <BrowserRouter>
      <Rout />
    </BrowserRouter> 
    
  </>,
  document.getElementById("demo")
);
