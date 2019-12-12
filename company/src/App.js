import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/navbar.js";
import Home from "./components/Home/home.js";
import Contact from "./components/Contact/contact.js";

import { loadReCaptcha } from "react-recaptcha-v3";

function App() {
  loadReCaptcha("6LcBUscUAAAAAE0tHcgT0mIdU527Pz-93hqQcOb1");
  return (
    <>
      <div>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
