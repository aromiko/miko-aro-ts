import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Home from "pages/Home";
import Bolton from "pages/Bolton";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/bolton" component={Bolton} />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
};

export default Routes;
