import React from "react"
import ReactDOM from "react-dom/client"
import './front-end/style/index.css'
import HomePage from './front-end/pages/Home.jsx'
import SourcePage from "./front-end/pages/source.jsx"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App.jsx"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/pages",
//     element: <SourcePage />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)