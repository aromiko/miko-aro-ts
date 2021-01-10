import { Redirect, Route, Switch } from "react-router-dom";

import Bolton from "pages/Bolton";
import Home from "pages/Home";
import React from "react";

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
