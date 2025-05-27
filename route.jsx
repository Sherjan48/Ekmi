import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/component/Layout/Layout";
import Model from "./src/component/2dmodel/Model";
import Dmodel from "./src/component/3dmodel/Dmodel";
export const myRouter =createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        children:[
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