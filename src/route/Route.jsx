import { createBrowserRouter } from "react-router-dom";
import Main from "../component/main/Main";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import MainPage from "../component/Pages/MainPage/MainPage";
import Blog from "../component/Blog/Blog";
import ChefDetails from "../component/Pages/ChefPage/ChefDetails/ChefDetails";
import SignUp from "../component/Signup/SignUp";
import SignIn from "../component/Signin/SignIn";
import PrivateRoute from "../component/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path:"/",
          element: <MainPage></MainPage>
        },
        {
          path:"/blog",
          element: <Blog></Blog>
        },
        {
          path:"/chefRecipes/:id",
          element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/chefDetails/${params.id}`)
        },
        {
          path:"/signup",
          element: <SignUp></SignUp>
        },{
          path:"/signin",
          element: <SignIn></SignIn>
        }
      ]
    },
  ]);

  export default router;