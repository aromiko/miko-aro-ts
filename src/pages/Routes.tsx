import { Redirect, Route, Switch } from "react-router-dom";

import Home from "pages/Home";
import React from "react";
import Work from "pages/Work";
import { WorkHistoryData } from "data/work-history";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      {WorkHistoryData.map((data) => {
        return (
          <Route
            exact
            path={`/${data.route}`}
            render={() => (
              <Work
                company={data.company}
                title={data.title}
                tenure={data.tenure}
              />
            )}
          />
        );
      })}
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
};

export default Routes;
