import { Box, Button, Checkbox, FormControlLabel, Grid, Slider, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTrampolinas, removeCart } from "../features/trampolina/TrampolinaSlice";
import Shopp from "./ShoppingCart";
import MultiActionAreaCard from "./ShoppingCart";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Trampolina } from "../models/trampolina";
import { postLend } from "../features/lend/LendSlice";
import { AddDispatch, RootState } from "../app/store";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props:any) {
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

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function addDays(numOfDays: number, date = new Date()) {
  const dateCopy = new Date(date.getTime());

  dateCopy.setDate(dateCopy.getDate() + numOfDays);

  return dateCopy;
}
export default function MapCart(){
    const navigate=useNavigate();
    let date = new Date(); 
    const date2=addDays(1,date);
    const dispatch:AddDispatch=useDispatch();
    const user = useSelector((state: RootState) => state.userReducer.currentUser);
    const finishOrder = () => {
        cart.map((t: Trampolina) => {
            dispatch(postLend({
                id: undefined,
                lendingDate: date,
                returnDate: date2,
                sum: undefined,
                user: user,
                trampolina: t
            }))
        })

        dispatch(removeCart);
        alert("ההשאלה הושלמה בהצלחה!")
        navigate(-2)
    }
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue:any) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit=()=>{
    
  }
  const cart = useSelector((state: RootState) => state.trampolinaReducer.cart);
    useEffect(() => {
      dispatch(getTrampolinas());
    }, []);
    return(<>
       <h1>Shopping</h1>
       {cart.map((t: any)=><Shopp t={t}></Shopp>)}
       <div>
      <Button variant="outlined"  onClick={handleClickOpen}>
        תשלום
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle  onClose={handleClose}>
          פרטי תשלום
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box component="form" noValidate  sx={{ mt: 3 }} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="tz"
                  required
                  fullWidth
                  id="tz"
                  label="tz"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="phoneNumber"
                  required
                  fullWidth
                  id="phoneNumber"
                  label="phoneNumber"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Credit card number"
                  label="Credit card number"
                  name="CreditCardNumber"
                  autoComplete="Credit card number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="CVV"
                  required
                  fullWidth
                  id="CVV"
                  label="CVV"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="validity"
                  required
                  fullWidth
                  id="validity"
                  label="validity"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="mail"
                  required
                  fullWidth
                  id="mail"
                  label="mail"
                  autoFocus
                />
              </Grid>
              <Grid  item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date lend"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params:any) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <button
              type="submit"
              onClick={() => finishOrder()}
            >
              אישור
            </button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid> 
        </Box>
        </DialogContent>
        <DialogActions>
         
        </DialogActions>
      </BootstrapDialog>
    </div>
       </>)

}