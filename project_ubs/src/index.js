import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Podcast from './Podcast';
import Newspaper from './Newspaper';
import Clubs from './Clubs';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/podcast',
    element: <Podcast/>
  },
  {
    path: '/newspaper',
    element: <Newspaper />
  },
  {
    path: '/clubs',
    element: <Clubs />
  }
]);


const theme = createTheme({
  typography: {
    fontFamily: "League Spartan, sans-serif",
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider   theme={theme}>
    <RouterProvider router={router}>
    </RouterProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
