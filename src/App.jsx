import React from "react"

import {Route,Switch} from "react-router";

import Home from './Homepage.jsx'
import './index.css'
import About from "./AboutPage.jsx";
import Doctor from "./Meet-the-team.jsx";
import Services from "./services.jsx";
import Contact from "./Contact-Us-Page.jsx";

const Rout=()=>{
    return(
        <>
    <Switch>
   < Route exact path="/" component={Home}/>
   < Route exact path="/About" component={About}/>
   < Route exact path="/Team" component={Doctor}/>
   < Route exact path="/Services" component={Services}/>
   < Route exact path="/Contact" component={Contact}/>
  </Switch>
        
        </>
    );
}
export default Rout;