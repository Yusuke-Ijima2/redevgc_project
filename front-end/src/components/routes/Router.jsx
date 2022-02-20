import { Route, Switch } from "react-router-dom";

import { HomeRoutes } from "./HomeRoutes";
import { TopLayout } from "../layout/TopLayout";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <TopLayout />
      </Route>
      <Route
        path="/timeline"
        render={({ match: { url } }) => (
          <Switch>
            {HomeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
    </Switch>
  );
};
