import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {NavLink, useNavigate} from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Tab } from '@mui/material';
import img111 from "../image/111.jpg"
import { useSelector } from 'react-redux';
//~~~~~~~~~~~~~sign in~~~~~~~~~~~~~~
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
//====================
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import SignIn from '../features/user/SignIn';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { RootState } from '../app/store';
import PersonPinIcon from '@mui/icons-material/PersonPin';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


export default function MenuAppBar() {
  const [anchorEl0, setAnchorEl0] = React.useState(null);
  const open8 = Boolean(anchorEl0);
  const handleClick8 = (event:any) => {
    setAnchorEl0(event.currentTarget);
  };
  const handleClose8 = () => {
    setAnchorEl0(null);
  };
  const handleClose6 = () => {
    setAnchorEl0(null);
    navigate('/Profil')
  };
  const handleClose7 = () => {
    setAnchorEl0(null);
    navigate('/LendUser')
  };
  const cart = useSelector((state: RootState) => state.trampolinaReducer.cart);
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

  const open1 = Boolean(anchorEl1);
  const navigate=useNavigate();
  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose1 = () => {
    navigate('/WetList');
    setAnchorEl1(null);
  };
  const handleClose2 = () => {
    navigate('/DryList');
    setAnchorEl1(null);
  };
  const handleClose3 = () => {
    navigate('/TrampolinaList');
    setAnchorEl1(null);
  };
  const handleClose5 = () => {
    navigate('/UserTable');
    setAnchorEl1(null);
  };
  const handleClose4 = () => {
    navigate('/MapCart');
    setAnchorEl1(null);
  };
 //!!!!!!!!!!!!!!
 function Copyright(props:any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
    </Typography>
  );
}
const theme = createTheme();

 //!!!!!!!!!!!!!!
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
//---------nisuy--------
const handleDrawerOpen = () => {
  setOpen(true);
};

const handleDrawerClose = () => {
  setOpen(false);
};
//-----------------
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickOpen = () => {  
    setOpen(true);
    navigate('/Sign-in');
  };
  const handleClickOpen1 = () => {  
    setOpen(true);
    navigate('/Sign-up');
  };

  const dispatch=useDispatch();
  const handleSubmit = (event:any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let user=({
      email: data.get('email'),
      password: data.get('password'),
    });
    // dispatch(loginUser(user));
  };
  return (<div>
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <div className='z'></div>
        <div className='w'></div>
        <div className='v'></div>
      </FormGroup>
      <AppBar style={{backgroundColor:'rgb(47, 110, 192)'}}position="static">
        <Toolbar>
        <IconButton aria-label="cart" onClick={handleClose4}>
      <StyledBadge badgeContent={cart.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
          <Tab icon={<LocalPhoneIcon />} aria-label="phone"  className={"navlink"}/>
          <h4>03-9219770</h4>
          <NavLink to="ContactUs" className="navlink">צור קשר</NavLink>
          {/* //Catalog111111111111111111111111111111 */}
          <div>
      <button
        className="navlink2"
        id="basic-button"
        aria-controls={open1 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open1 ? 'true' : undefined}
        onClick={handleClick1}
      >
        קטלוג
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl1}
        open={open1}
        onClose={handleClose1}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose1}>מתנפחים יבשים</MenuItem>
        <MenuItem onClick={handleClose2}>מתנפחים רטובים</MenuItem>
        <MenuItem onClick={handleClose3}>כל המתנפחים</MenuItem>
      </Menu>
    </div>
           {/* //Catalog111111111111111111111111111111soffff */}
          <NavLink to="/" className="navlink">דף הבית</NavLink>
            <div>
      <button
        className="navlink2"
        id="basic-button"
        aria-controls={open8 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open8 ? 'true' : undefined}
        onClick={handleClick8}
      >
        <Tab icon={<PersonPinIcon />} aria-label="phone"/>
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl0}
        open={open8}
        onClose={handleClose8}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose6}>פרופיל</MenuItem>
        <MenuItem onClick={handleClose7}>ההשאלות שלי</MenuItem>
      </Menu>
    </div>
           <div className='img111'><img src={img111} className="111"></img></div>
        </Toolbar>
      </AppBar>
    </Box>
  </div>);
}