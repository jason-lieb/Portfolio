import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
// import Resume from './pages/Resume'
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
      // {
      //   path: 'resume',
      //   element: <Resume />,
      // },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
