import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Example from './components/Example/example';
import Playground from './components/Playground/playground';
import UpdatesFAQs from './components/FAQSection/updatesFAQs';
import Relevance from './components/Relevance/relevance';
import Dashboard from './components/GeneratedComponents/Dashboard/pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/example",
    element: <Example />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/playground",
    element: <Playground />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/why-though",
    element: <Relevance />,
    errorElement: <ErrorPage />,
  },
  ,
  {
    path: "/examples/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
