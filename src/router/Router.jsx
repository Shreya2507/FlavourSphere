import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import ForumPage from "../pages/ForumPage";
import Signup from "../components/Signup";
import Recipes from "../components/Recipes";
import Profile from "../components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "forum",
        element: <ForumPage />,
      },
      {
        path: "recipes",
        element: <Recipes />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
export default router;
