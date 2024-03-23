import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from '/src/pages/home/Home'
import "/src/styles/output.css"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import ContentPage from '/src/pages/contentPage/ContentPage'
import Project from '/src/pages/project/Project'
import Error from './pages/error/Error'

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/content",
    element: <ContentPage />
  },
  {
    path: "/project/:id",
    element: <Project />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
