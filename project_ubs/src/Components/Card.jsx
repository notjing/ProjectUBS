import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ReadMoreIcon from '@mui/icons-material/ArrowForward';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import Box from '@mui/material/Box';

export default function Article({
 id, author, title, subheader, avatarLetter, avatarColor, imageSrc, imageAlt,
  description, articleUrl, onFavoriteClick, onShareClick, showSettings,readMoreLabel

}) {
  const [favorited, setFavorited] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleFavoriteClick = () => {
    setFavorited(!favorited);
    if (onFavoriteClick) {
      onFavoriteClick(id, !favorited);
    }
  };

  const handleShareClick = () => {
    if (onShareClick) {
      onShareClick(id);
    }
  };

  return (
    <Card sx={{ 
      maxWidth: 345, 
      boxShadow: 3, 
      borderRadius: 2,
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        boxShadow: 6,
        transform: 'translateY(-4px)'
      }
    }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: avatarColor }} aria-label={`author-${id}`}>
            {avatarLetter}
          </Avatar>
        }
        action={
          showSettings && (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={title}
        subheader={subheader}
        sx={{ 
          '& .MuiCardHeader-title': { 
            fontWeight: 'bold' 
          } 
        }}
      />
      
      {/* Image container with hover effect */}
      <Box
        sx={{ 
          position: 'relative',
          height: 194,
          overflow: 'hidden',
          borderRadius: '4px',
          m: 1
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image with zoom effect on hover */}
        {imageSrc && (
          <CardMedia
            component="img"
            height="194"
            image={imageSrc}
            alt={imageAlt}
            sx={{ 
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        )}
        
        {/* Overlay with hover */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.1) 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: 3,
            opacity: isHovered ? 1 : 0,
            visibility: isHovered ? 'visible' : 'hidden',
            transition: 'opacity 0.4s ease, visibility 0.4s ease',
          }}
        >
          <Typography 
            variant="body2"
            sx={{ 
              color: 'white',
              marginBottom: 2,
              textAlign: 'center',
              textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
              transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
              opacity: isHovered ? 1 : 0,
              transition: 'transform 0.4s ease, opacity 0.4s ease',
              width: '100%'
            }}
          >
            {description}
          </Typography>
          
          <Button 
            component={Link}
            to={`${articleUrl}${id}`}
            endIcon={<ReadMoreIcon sx={{ 
              transition: 'transform 0.3s ease',
              transform: isHovered ? 'translateX(3px)' : 'translateX(0)'
            }} />}
            variant="contained"
            size="small"
            sx={{ 
              borderRadius: 8,
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              paddingLeft: 2,
              paddingRight: 1.5,
              transform: isHovered ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
              opacity: isHovered ? 1 : 0,
              transition: 'transform 0.4s ease, opacity 0.4s ease, background 0.3s ease',
              transitionDelay: '0.1s',
              '&:hover': {
                background: 'linear-gradient(45deg, #1976D2 30%, #00B0FF 90%)',
                boxShadow: '0 6px 10px rgba(0,0,0,0.3)',
              }
            }}
          >
            {readMoreLabel}
          </Button>
        </Box>
      </Box>
      
      <CardActions disableSpacing sx={{ justifyContent: 'space-between', px: 2 }}>
        <div>
          <IconButton 
            aria-label="add to favorites" 
            onClick={handleFavoriteClick}
            color={favorited ? "error" : "default"}
            sx={{
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'scale(1.1)'
              }
            }}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton 
            aria-label="share"
            onClick={handleShareClick}
            sx={{
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'scale(1.1)'
              }
            }}
          >
            <ShareIcon />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}
