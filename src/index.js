import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/routes/Root';
import Home from './components/routes/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  children: [
    {
      path: "home",
      element: <Home />
    }
  ]
}]);

root.render(
  <>
    {/*<React.StrictMode>*/}
    <RouterProvider router={router}/>
    {/*</React.StrictMode>*/}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
