import React from 'react'
import Footer from './component/footer/Footer'
import './App.css'
import Show from './component/show/Show'
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './Router'


function App() {
  return (
    <div>
     <RouterProvider router={myRouter}/>
    </div>
  )
}

export default App
