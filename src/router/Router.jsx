import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import ForumPage from "../pages/ForumPage";
import Signup from "../components/Signup";
import Recipes from "../components/Recipes";
import Profile from "../components/Profile";
import RecipeDetail from "../components/RecipeDetail";
import ContactUsPage from "../pages/ContactPage";
import DonationPortal from "../pages/DonationPortal";

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
        path: "recipes",
        element: <Recipes />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "recipePage",
        element: <RecipeDetail />,
      },
      {
        path: "forum",
        element: <ForumPage />,
      },
      {
        path: "contactUs",
        element: <ContactUsPage />,
      },
      {
        path: "DonationPortal",
        element: <DonationPortal/>
      }
      
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  }
]);
export default router;
