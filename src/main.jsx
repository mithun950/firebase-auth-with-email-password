import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Componentes/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Componentes/MainLayout';
import Login from './Login';
import Register from './Register';
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path: 'login',
        element:<Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
