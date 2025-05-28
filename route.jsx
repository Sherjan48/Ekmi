import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/component/Layout/Layout";
import Model from "./src/component/2dmodel/Model";
import Dmodel from "./src/component/3dmodel/Dmodel";
import Home from "./src/component/home/Home";
import Contact from "./src/component/contact/Contact";
import Individ from "./src/component/individ/Individ";
import Show from "./src/component/show/Show";
export const myRouter =createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        children:[
              {
                path: '/',
                element: <Home/>,
            },
            {
                path: 'show',
                element: <Show/>
            },            
            {
                path: 'ind',
                element: <Individ/>
            },
            {
                path:'modeli',
                element:<Model/>
            },
            {
                path: '/2d-3d',
                element:<Dmodel/>
            }
        ]
    }
])