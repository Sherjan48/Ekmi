import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import Show from "./component/show/Show";
import Home from "./component/home/Home";
export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
    //   {
    //     path: "contactPage",
    //     element: <Contact />,
    //   },
      {
        path: "show",
        element: <Show/>,
      },
    ],
  },
]);
