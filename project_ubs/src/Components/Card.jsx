import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
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

export default function Article({
  id = "1",
  title = "Article Title",
  subheader = "Publication Date",
  avatarLetter = "B",
  avatarColor = "#f44336", // red color as default
  imageSrc = "/static/images/cards/default.jpg",
  imageAlt = "Article image",
  description = "Article description goes here.",
  articleUrl = "/articles/",
  onFavoriteClick = null,
  onShareClick = null,
  showSettings = true,
  readMoreLabel = "Read More"
}) {
  const [favorited, setFavorited] = React.useState(false);

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
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
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
      {imageSrc && (
        <CardMedia
          component="img"
          height="194"
          image={imageSrc}
          alt={imageAlt}
          sx={{ objectFit: 'cover' }}
        />
      )}
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>
        <div>
          <IconButton 
            aria-label="add to favorites" 
            onClick={handleFavoriteClick}
            color={favorited ? "error" : "default"}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton 
            aria-label="share"
            onClick={handleShareClick}
          >
            <ShareIcon />
          </IconButton>
        </div>
        
        <Button 
          component={Link}
          to={`${articleUrl}${id}`}
          endIcon={<ReadMoreIcon />}
          variant="contained"
          color="primary"
          size="small"
          sx={{ borderRadius: 4 }}
        >
          {readMoreLabel}
        </Button>
      </CardActions>
    </Card>
  );
}