import './styles.css?v=1.0';
import logo from './logo.jpg';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Box, Button, Container, createTheme, IconButton, Toolbar, Typography, Stack, Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import Navbar from './Components/Navbar';
import {Card} from './Components/Card.jsx'

function Home() {
  const pages = ['Home', 'Podcast', 'Newspaper', 'Clubs'];
  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
      white: createColor('#FFFFFF'),
    },
    typography: {
      fontFamily: "League Spartan"
    }
  });

  return (
    <div className="home">
      
      <div className="banner">
        <div className="logo league-spartan">
          <img src={logo} alt="Logo"></img>
          <h1> MGCIubs</h1>
        </div>
      </div>
      
      <div className="content">
        
        <div className="left-col"></div>
        <div className="mid-col">
            
          <Navbar></Navbar>
      
          <Card imgSrc={"https://picsum.photos/300/200"} title = {"Card Title"} 
          description={"DetailsDetailsDetailsDetails DetailsDetailsDetails"} 
          link = {"articlePageLink"} buttonText={"Read Article"}/>
       
          
          <Grid container spacing={2} height={"100vh"}>
              <Grid size={8}>
              </Grid>
              <Grid size={1}>
                <Divider sx={{mt: "5vh", bgcolor: "white", width: "2px", height:"90%"}} orientation="vertical" />
              </Grid>
            
              <Grid size={2}>
              </Grid>
          </Grid>

          

        </div>
        <div className="right-col"></div>
        

      </div>
      
      

    </div>
    
    
   
  );
}

export default Home;
