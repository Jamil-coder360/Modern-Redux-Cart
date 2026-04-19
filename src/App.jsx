import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from './component/Roots';
import Header from './component/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children:[
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "products",
        element: <ProductPage />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ]
  }
]);

const App = () => {
  return (
     <RouterProvider router={router} />
  )
}

export default App