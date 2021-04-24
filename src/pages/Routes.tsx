import { WorkHistoryData } from "data/work-history";
import Home from "pages/Home";
import Work from "pages/Work";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const Routes: React.FC = () => {
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
                metaDescription={data.metaDescription}
                position={data.position}
                tenure={data.tenure}
                titleImage={data.imageUrl}
                sectionImage={data.sectionImage}
                sectionImageTwo={data.sectionImageTwo}
                sectionOne={data.sectionOne}
                sectionTwo={data.sectionTwo}
                technology={data.technology}
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
