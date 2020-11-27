import "assets/styles/main.css";

import Footer from "components/Footer";
import Home from "pages/Home";
// import Work from "pages/Work";
import Navbar from "components/Navbar";
import React from "react";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/work" component={Work} /> */}
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
