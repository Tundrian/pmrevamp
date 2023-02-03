import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import Root from './pages/Root'
import ErrorPage from './pages/error-page'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateProject from './pages/createProject'
import { ConfigureModules } from './pages/ConfigureModules'
import { ViewProjects}  from './pages/ViewProjects'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import 'bootstrap/dist/css/bootstrap.min.css';

// Create a client
const queryClient = new QueryClient()

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
      {
        path: "viewProjects",
        element: <ViewProjects />,
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {/* <App /> */}
      </QueryClientProvider>
  </React.StrictMode>,
)
