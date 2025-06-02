import { createBrowserRouter } from "react-router-dom";
import Show from "./component/show/Show";
import Home from "./component/home/Home";
import Layout from "./component/Layout/Layout";
import Model from "./component/2dmodel/Model";
import Dmodel from "./component/3dmodel/Dmodel";
import Individ from "./component/individ/Individ";
import Voprosy from "./component/voprosy/Voprosy";
import Stulya from "./component/stulya/Stulya";
export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: 'ind' ,
        element: <Individ />
      },
      {
        path: "modeli",
        element: <Model />,
      },
      {
        path: "/2d-3d",
        element: <Dmodel />,
      },
      {
        path: "show",
        element: <Show />,
      },
      {
        path: 'Dmodel',
        element:<Dmodel/>
      },
      {
        path: 'voprosy',
        element:<Voprosy/>
      },
      {
        path: 'stulya',
        element: <Stulya/>
      },
    ],
  },
]);
