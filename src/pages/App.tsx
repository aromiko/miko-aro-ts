import "assets/styles/main.scss";

import Footer from "components/Footer";
import Home from "pages/Home";
import Bolton from "pages/Bolton";
// import Work from "pages/Work";
import Navbar from "components/Navbar";
import React, { Fragment } from "react";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/bolton" component={Bolton} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
