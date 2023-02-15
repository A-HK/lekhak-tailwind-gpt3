import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Example from './components/WebsiteComponents/Example/example';
import Playground from './components/WebsiteComponents/Playground/playground';
import Relevance from './components/WebsiteComponents/Relevance/relevance';
import HeroSectionSample from './components/LekhakComponentTemplates/HeroSectionComponent/heroSectionSample';
//import Dashboard from './components/LekhakComponentTemplates/Dashboard/pages/Dashboard';

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
  {
    path: "/examples/hero-section",
    element: <HeroSectionSample />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
