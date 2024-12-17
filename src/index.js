import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Blog from "./components/Blog";
import Team from "./components/Team";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"",
        element:<Hero/>
      },
      {
        path:"team",
        element: <Team/>
      },
      {
        path:"feature",
        element: <Feature/>
      },
      {
        path:"blog",
        element:<Blog/>
      },
      {
        path:"contact",
        element:<Contact/>
      },

    ]

  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
