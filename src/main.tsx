import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import 'animate.css';
import './index.css'
import './font.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import PortfolioPage from './pages/PortfolioPage'
import ConsultationPage from './pages/services/ConsultationPage'
import WorkshopPage from './pages/services/WorkshopPage';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/services',
    element: <WorkPage />
  },
  {
    path: '/services/project-deck-consultation',
    element: <ConsultationPage />
  },
  {
    path: '/services/portfolio-workshop',
    element: <WorkshopPage />
  },
  {
    path: '/portfolio',
    element: <PortfolioPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/*',
    element: <NotFound />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
