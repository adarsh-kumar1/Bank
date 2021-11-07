import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navs from "./Component/Navs";
import Footer from "./Component/Footer";
import CustomerDashboard from "./Component/Customer/CustomerDashboard";
// import { useHistory } from "react-router";

function App() {
  return (
    <>
    <Navs/>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/about" component = {About} />
        <Route exact path = "/contact" component = {Contact} />
        <Route exact path = "/service" component = {Service} />
        <Route exact path = "/customer/dashboard" component = {CustomerDashboard} />
        <Redirect to = "/" />
      </Switch>
      <Footer/>
    </>
  )
}

export default App;
