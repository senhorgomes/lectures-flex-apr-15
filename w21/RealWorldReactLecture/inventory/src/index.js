import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Layout from './components/Layout';
import PhotoList from './components/PhotoList';
// Old router
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <h1>Welcome to our page!</h1>,
//   },
//   {
//     path: "/products",
//     element: <Products/>
//   },
//   {
//     path: "/products/:id",
//     element: <SingleProduct/>
//   }
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <h1>Error: 404, this page does not exist 😔</h1>,
    children: [
      {
        path: "/",
        element: <h1>Welcome to our page!</h1>
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/products/:id",
        element: <SingleProduct/>
      },
      {
        path: "/photolist",
        element: <PhotoList/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
