import React from 'react'
import App from './App'
import './index.css'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route, createBrowserRouter,
  RouterProvider, Link
} from "react-router-dom";
import ErrorPage from './error-page'
import EmpathyPage from './components/EmpathyPage';

// Impulse import statement. Enable only during development.
// if (process.env.NODE_ENV === 'development') {
//   import('@impulse.dev/runtime').then((impulse) => impulse.run())
// }


const firebaseConfig = {
  apiKey: "AIzaSyDuQIwpvn3uG9hhRZsn2-4upYnHDT70DHY",
  authDomain: "selfempathy-4b602.firebaseapp.com",
  projectId: "selfempathy-4b602",
  storageBucket: "selfempathy-4b602.appspot.com",
  messagingSenderId: "519684745813",
  appId: "1:519684745813:web:821908a31b2923756a82dc",
  measurementId: "G-TV04DSG0QF"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);


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
