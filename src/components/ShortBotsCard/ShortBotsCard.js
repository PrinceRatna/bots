import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';
export default function ShortBotsCard(props) {
  return (
    <div style={{marginTop:'20px',marginBottom:'10px'}}>
        <Paper elevation={3} sx={{ maxWidth: 250 }}  >

<Card sx={{ maxWidth: 250 }} >
{/* <CardMedia
  component="img"
  height="140"
  image="/static/images/cards/contemplative-reptile.jpg"
  alt="green iguana"
/> */}
<CardContent >
  <Typography gutterBottom variant="h5" component="div">
    {props.data.title}
  </Typography>
  <Typography variant="body2" color="text.secondary">
   {props.data.description.slice(0,100)}
  </Typography>
</CardContent>
<CardActions>
  <Button size="small">$ {props.data.price}</Button>
 <NavLink to='/wallet'><Button size="small">Connect Wallet</Button></NavLink> 
</CardActions>
</Card>
</Paper>
    </div>
  )
}
