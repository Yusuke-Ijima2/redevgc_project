import "./App.css";
import { Home } from "./components/Home";
import { ShowPost } from "./components/ShowPost";

export const App = () => {
  return (
    <div>
      <Home />
      <ShowPost />
    </div>
  );
};
