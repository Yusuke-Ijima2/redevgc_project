import { CreatePost } from "../pages/CreatePost";
import { SeachForm } from "../pages/SeachForm";

export const HomeRoutes = [
  {
    path: "/create",
    exact: false,
    children: <CreatePost />,
  },
  {
    path: "/seach",
    exact: false,
    children: <SeachForm />,
  },
];
