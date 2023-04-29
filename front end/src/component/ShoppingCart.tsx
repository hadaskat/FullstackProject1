import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export default function Shopp(props:any) {
  
  return (  <>
  
    <Card className='card' sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {require("../../public/image2/" + props.t.image)}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.t.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.t.price}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.t.categoryId==1?"dry":"wet"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.t.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          delete
        </Button>
      </CardActions> */}
    </Card>
    </> );
}
