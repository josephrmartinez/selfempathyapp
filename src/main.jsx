import React from 'react'
import App from './App'
import './index.css'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider
} from "react-router-dom";
import ErrorPage from './error-page'
import EmpathyPage from './components/EmpathyPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: ":section/:word",
    element: <EmpathyPage />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
