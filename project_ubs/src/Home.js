import './styles.css?v=1.0';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Container, createTheme, IconButton, Toolbar, Typography, Stack, Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import Navbar from './Components/Navbar';
import Article from './Components/Card.jsx'

function Home() {
  const pages = ['Home', 'Podcast', 'Newspaper', 'Clubs'];

  const articles = [<Article></Article>, <Article></Article>, <Article></Article>, <Article></Article>];

  return (

    <div>
      <Navbar></Navbar>
      
      <Grid container spacing={2} height={"100vh"}>
        <Grid size={8} className="padding-top padding-left">

          <Grid container spacing={4}>
            {articles.map((article, index) => (
              <Grid item size={6} key={index}>
                {article}
              </Grid>
            ))}
          </Grid>
          
        </Grid>
        <Grid size={1}>
          <Divider sx={{ mt: "5vh", bgcolor: "white", width: "2px", height: "90%" }} orientation="vertical" />
        </Grid>

        <Grid size={2}>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
