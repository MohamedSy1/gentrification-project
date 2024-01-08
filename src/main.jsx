import React from "react"
import ReactDOM from "react-dom/client"
import './front-end/style/index.css'
import App from './App.jsx'
import SourcePage from "./front-end/pages/source.jsx"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "pages",
    element: <SourcePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)