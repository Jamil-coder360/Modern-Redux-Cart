import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from './component/Roots';
import Header from './component/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children:[
      {
        // index: true,
        // element: < />
      },
]},
]);

const App = () => {
  return (
     <RouterProvider router={router} />
  )
}

export default App