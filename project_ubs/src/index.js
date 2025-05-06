import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.jpg';
import "./styles.css"
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Podcast from './Podcast';
import Newspaper from './Newspaper.tsx';
import Clubs from './Clubs';
import { createTheme, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/podcast',
    element: <Podcast />
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
  <ThemeProvider theme={theme}>

    <div className="home">
      <div className="banner">
        <div className="logo league-spartan">
          <img src={logo} alt="Logo"></img>
          <Typography variant="h3"> MGCIubs</Typography>
        </div>
      </div>
      <div className="content">
        <div className="left-col"></div>
        <div className="mid-col">
          <RouterProvider router={router}>
          </RouterProvider>
        </div>
        <div className="right-col"></div>
      </div>
    </div>
  </ThemeProvider >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
