import './styles.css?v=1.0';
import logo from './logo.jpg';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { Box, Button, Container, createTheme, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';


function Home() {

  const pages = ['Home', 'Podcast', 'Newspaper', 'Clubs'];
  const navigate = useNavigate();

  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
      white: createColor('#FFFFFF'),
    },
  });

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(2),
    width: '200px', // Set a fixed width for the search container
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%', // Ensure the input takes up the full width of the container
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%', // Prevent the input from expanding beyond the container
    },
  }));

  return (
    <div className="home">
      <div className="banner">
        <p> *insert search*</p>
        <div className="logo league-spartan">
          <img src={logo} alt="Logo"></img>
          <h1> MGCIubs</h1>
        </div>
      </div>
      <div className="content">
        <div className="left-col"></div>
        <div className="mid-col">
            
          <AppBar position='relative'>
           
            <Toolbar >
              <Box sx={{ justifyContent:'center', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Button className="nav-button"
                    color='white'
                    key="Home"
                    onClick={() => {navigate("/")}}
                    sx={{textTransform: "none"}}
                  >
                    Home
                  </Button>

                  <Button className="nav-button"
                    color='white'
                    key="Newspaper"
                    onClick={() => {navigate("/Newspaper")}}
                    sx={{textTransform: "none"}}
                  >
                    Newspaper
                  </Button>

                  <Button className="nav-button"
                    color='white'
                    key="Podcast"
                    onClick={() => {navigate("/Podcast")}}
                    sx={{textTransform: "none"}}
                  >
                    Podcast
                  </Button>

                  <Button className="nav-button"
                    color='white'
                    key="Clubs"
                    onClick={() => {navigate("/Clubs")}}
                    sx={{textTransform: "none"}}
                  >
                    Clubs
                  </Button>
                

              </Box>
              <Search sx={{position: 'absolute', justifyContent: 'center', right: '1vw'}}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
            </Toolbar>
            
          </AppBar>

          <Divider orientation='vertical' color="white"></Divider>

        </div>
        <div className="right-col"></div>
      </div>
    </div>
  );
}

export default Home;
