import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const Foot = () => {
    return (
        <>
                   <div className="mid">


<div className="flex-container">
  <div className="flex-item-left">
      <img src="https://gyanganga.net/images/logo-wide.png" alt="" srcset="" />

<div>  Free Consultation
Finding out what you're dealing with, it can help bring some peace of mind.

Read More </div>
  </div>
  <div className="flex-item-right">UseFul Links
<ul>
    <li>home</li>
    <li>About</li>
    <li>Contact us</li>
    <li>Admission</li>
</ul>

 </div>
  <div className="flex-item-right">Free Consultation
Finding out what you're dealing with, it can help bring some peace of mind.

Read More </div>
  <div className="flex-item-right">FaceBook Page

<Card sx={{ minWidth: 255 }}>
      <CardContent>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          Gyan Ganga International
        </Typography>
       
        <Typography sx={{ mb: 1 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

 </div>
</div>

</div>


        </>
    )
}

export default Foot
