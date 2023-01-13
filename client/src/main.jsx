import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Root, { loader as rootLoader } from './pages/Root'
import ErrorPage from './pages/error-page'
import CreateProject from './pages/create-project'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "create-project/:contactId",
        element: <CreateProject />,
      },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
