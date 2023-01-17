import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import Root from './pages/Root'
import ErrorPage from './pages/error-page'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import CreateProject from './pages/createProject'
import { ConfigureModules } from './pages/ConfigureModules'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "createProject",
        element: <CreateProject />,
      },
      {
        path: "configureModules",
        element: <ConfigureModules />,
      },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
