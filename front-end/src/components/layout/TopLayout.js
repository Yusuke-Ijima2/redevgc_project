import { CreatePost } from "../pages/CreatePost";
import { ShowDeleatePost } from "../pages/ShowDeletePost";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { UpdatePost } from "../pages/UpdatePost";

export const TopLayout = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <CreatePost />
            <ShowDeleatePost />
          </Route>

          {/* <Route path="/edit">
            <UpdatePost />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};
