import React from 'react'
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { Box, Button, Toolbar, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';


function Navbar() {

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

    const navigate = useNavigate();

  return (
    <AppBar position='relative'>
           
    <Toolbar >
      <Box sx={{ justifyContent:'center', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button className="nav-button league-spartan"
            color='white'
            key="Home"
            onClick={() => {navigate("/")}}
            sx={{textTransform: "none"}}
          >
            <Typography variant="h6" fontWeight={"SemiBold"} component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
          </Button>

          <Button className="nav-button league-spartan"
            color='white'
            key="Newspaper"
            onClick={() => {navigate("/Newspaper")}}
            sx={{textTransform: "none"}}
          >
            <Typography variant="h6" fontWeight={"SemiBold"} component="div" sx={{ flexGrow: 1 }}>
              Newspaper
            </Typography>
          </Button>

          <Button className="nav-button"
            color='white'
            key="Podcast"
            onClick={() => {navigate("/Podcast")}}
            sx={{textTransform: "none"}}
          >
           <Typography variant="h6" fontWeight={"SemiBold"} component="div" sx={{ flexGrow: 1 }}>
              Podcast
            </Typography>
          </Button>

          <Button className="nav-button"
            color='white'
            key="Clubs"
            onClick={() => {navigate("/Clubs")}}
            sx={{textTransform: "none"}}
          >
            <Typography variant="h6" fontWeight={"SemiBold"} component="div" sx={{ flexGrow: 1 }}>
              Clubs
            </Typography>
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
  )
}

export default Navbar
