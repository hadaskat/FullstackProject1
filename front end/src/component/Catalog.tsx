
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import img1 from "../image/1.jpg"
import { Trampolina } from '../models/trampolina';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useNavigate } from 'react-router-dom';
import { AddDispatch, RootState } from '../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { getTrampolinas, saveTrampolina } from '../features/trampolina/TrampolinaSlice';

const ExpandMore = styled((props: any) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}
function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
export default function RecipeReviewCard(props: any) {
  React.useEffect(() => {
    dispatch(getTrampolinas());
  }, []);  
  const dispatch:AddDispatch=useDispatch();
  const cart = useSelector((state: RootState) => state.trampolinaReducer.cart);
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  ;
  
  const addtocart=() => {
    const cartUser=cart.find((a:Trampolina) => props.t==a);
    if(cartUser==null)
    {
        dispatch(saveTrampolina(props.t))
    }
    else{
      alert("אין אפשרות הכמות מוגבלת")
    }
   }; 
  const [flag, setflag] = React.useState(true);
  const handleClickflag = () => {
    setflag(false);
  };
  return ( 
  <div className='card'>
      <Card sx={{ maxWidth: 255 }} >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {props.t.categoryId==1?"dry":"wet"}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.t.name}
        />
        {props.t.image && <CardMedia
          component="img"
          height="194"
          image={require("../../public/image2/" + props.t.image)}
        />}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          </Typography>

        </CardContent>
        {/* //===================== */}
        <Button variant="outlined" onClick={handleClickOpen}>
          רוצה לדעת עוד??
        </Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            {props.t.name}
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography paragraph>
              {props.t.image && <CardMedia
                component="img"
                height="194"
                image={require("../../public/image2/" + props.t.image)}
              />}
            </Typography>
            <Typography paragraph className='p'>
           {props.t.price}ש"ח 
            </Typography>
            <Typography paragraph className='p'>
              <h4>מפרט טכני </h4>
              {props.t.description}
            </Typography>
          </DialogContent>
          <DialogActions>
            <IconButton aria-label="add to cart" 
                  onClick={addtocart}
            >
              
               <AddShoppingCartIcon/>
            </IconButton>
            <Button autoFocus onClick={handleClose}>
              back
            </Button>
          </DialogActions>
        </BootstrapDialog>
        <CardActions disableSpacing>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        </Collapse>
      </Card>
    </div>)
}

// function saveTampolina(t: any): any {
//   throw new Error('Function not implemented.');
// }
