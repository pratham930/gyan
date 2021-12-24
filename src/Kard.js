import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Kart.css"

const Kard = () => {

    return (
        <>
        <div className='tank'>
    <Card sx={{ maxWidth: 340 }} className="flex-item-l">
      <CardMedia
        component="img"
        height="250"
        image="https://gyanganga.net/images/gallery_39.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        THE CAMPUS
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Academy campus is very conspicuously situated on a seven acre plot of land with open surroundings in a healthy,
         beautiful and congenial environment amidst lush green.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Details</Button>
      
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 340 }} className="flex-item-r">
      <CardMedia
        component="img"
        height="250"
        image="https://gyanganga.net/images/gallery_39.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        THE CAMPUS
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Academy campus is very conspicuously situated on a seven acre plot of land with open surroundings in a healthy,
         beautiful and congenial environment amidst lush green.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Details</Button>
      
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 340 }} className='flex-item-s'>
      <CardMedia
        component="img"
        height="250"
        image="https://gyanganga.net/images/gallery_38.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        THE CAMPUS
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Academy campus is very conspicuously situated on a seven acre plot of land with open surroundings in a healthy,
         beautiful and congenial environment amidst lush green.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Details</Button>
      
      </CardActions>
    </Card>
    
    </div>
        </>
    )
}

export default Kard;
