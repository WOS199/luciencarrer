import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home'
import "../dist/output.css"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import ContentPage from './pages/contentPage/ContentPage'

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "content",
    element: <ContentPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
