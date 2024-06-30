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
import ConsultationPage from './pages/ConsultationPage'
import WorkshopPage from './pages/WorkshopPage';

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
    path: '/work',
    element: <WorkPage />
  },
  {
    path: '/work/project-deck-consultation',
    element: <ConsultationPage />
  },
  {
    path: '/work/portfolio-workshop',
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
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
