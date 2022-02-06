import { CreatePost } from "../pages/CreatePost";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SUDPost } from "../pages/SUDPost";

export const TopLayout = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <CreatePost />
            <SUDPost />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
