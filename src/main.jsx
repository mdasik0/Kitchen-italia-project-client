import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import Main from "./component/main/Main";
import MainPage from "./component/Pages/MainPage/MainPage";
import Blog from "./component/Blog/Blog";
import ChefDetails from "./component/Pages/ChefPage/ChefDetails/ChefDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path:"/chefDetails/:id",
        element:<ChefDetails></ChefDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/chefDetails/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

