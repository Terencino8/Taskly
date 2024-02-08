import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from './App';
import Home from './Main/Home';
import Calender from './Main/mainComponents/calender/Calender';

const router = createBrowserRouter([

  {
    path: "/",
    element:  <App />,
  },

  {
    path: "/home",
    element: <Home/>,
  },

  {
    path: "/calender",
    element: <Calender/>,
  },




]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


