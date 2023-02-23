import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorPage from './components/ErrorPage'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <About currentPage={'About'} />,
      },
      {
        path: 'portfolio',
        element: <Portfolio currentPage={'Portfolio'} />,
      },
      {
        path: 'contact',
        element: <Contact currentPage={'Contact'} />,
      },
      {
        path: 'resume',
        element: <Resume currentPage={'Resume'} />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
