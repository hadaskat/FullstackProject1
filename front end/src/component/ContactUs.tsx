import { Box, TextField } from "@mui/material";
import React from "react";
import jump from "../jump.png";
import CircularProgress from '@mui/material/CircularProgress';
import { blue, green, pink } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Tab } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';

const ContactUs=()=>{
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef<number>();
  
    const buttonSx = {
      ...(success && {
        bgcolor: "#f06292",
        '&:hover': {
          bgcolor: "#f06292",
        },
      }),
    };
  
    React.useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);
  
    const handleButtonClick = () => {
      if (!loading) {
        setSuccess(false);
        setLoading(true);
        timer.current = window.setTimeout(() => {
          setSuccess(true);
          setLoading(false);
        }, 2000);
      }
    };
    return(
        <div>
    <h1>צור קשר</h1>
    <TextField id="outlined-basic" label="name*" variant="outlined" type="text"/><br/><br/>
    <TextField id="outlined-basic" label="phone*" variant="outlined" type="phone"/><br/><br/>
    <TextField id="outlined-basic" label="email*" variant="outlined" type="email"/><br/><br/>
    <TextField id="outlined-basic" label="what do you want to say?" variant="outlined" type="text"/><br/><br/>
    <p className="n"><p >טרמפולינו</p>
      <p>הפקת אירועים עם מתנפחים</p>
      <Tab icon={<LocalPhoneIcon />} aria-label="number"/>
      <i ></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;03-9219770<br />
      <Tab icon={<HomeIcon />} aria-label="phone" />
      <i ></i>&nbsp;&nbsp;&nbsp;&nbsp;טרומפלדור 29 פ''ת<br />
      <Tab icon={<MailIcon />} aria-label="email"/>
      <i ></i><a href="mailto:trampolino@gmail.com" target="_blank">trampolino@gmail.com</a><br />
    </p>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ m: 4, position: 'inherit' ,marginLeft:90}}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: "#42a5f5",
              position: 'absolute' ,
              top: 523,
              left: 715,
            }}
          />
        )}
      </Box>
    </Box>
    <img src={jump} className="c"></img>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    )
}
export default ContactUs;