import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Playground from './components/WebsiteComponents/Playground/playground';
import Relevance from './components/WebsiteComponents/Relevance/relevance';
import HeroSectionSample from './components/LekhakComponentTemplates/HeroSectionComponent/heroSectionSample';
import FeaturesComponentSample from './components/LekhakComponentTemplates/FeaturesComponent/featuresComponentSample';
import DashboardComponentSample from './components/LekhakComponentTemplates/DashboardComponent/dashboardComponentSample';
import ModalComponentSample from './components/LekhakComponentTemplates/ModalComponent/modalComponentSample';
import TestimonialComponentSample from './components/LekhakComponentTemplates/TestimonialComponent/testimonialComponentSample';
import CardComponentSample from './components/LekhakComponentTemplates/SingleVerticalCardComponent/cardComponentSample';
//import Dashboard from './components/LekhakComponentTemplates/Dashboard/pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
  {
    path: "/examples/features-section",
    element: <FeaturesComponentSample />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/examples/dashboard-component",
    element: <DashboardComponentSample />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/examples/modal-component",
    element: <ModalComponentSample />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/examples/testimonial-component",
    element: <TestimonialComponentSample />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/examples/card-component",
    element: <CardComponentSample />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
