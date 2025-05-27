
import React from "react";
import "./App.css"; 
import Header from "./component/header/Header";
import Model from "./component/2dmodel/Model";
import Dmodel from "./component/3dmodel/Dmodel";
import { BrowserRouter as Router, RouterProvider } from "react-router-dom";
import { myRouter } from "../route";



function App() {
  return (

    <div>
     <RouterProvider router={myRouter}/>
    </div>
  );
}

export default App;
