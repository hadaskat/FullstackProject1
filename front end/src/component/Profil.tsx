import { Box } from '@mui/joy';
import Grid from '@mui/joy/Grid';
import { Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AddDispatch, RootState } from '../app/store';
import { User } from '../models/user';
import profil from "../profil.jpg"

const Profil=()=>{
    const us=useSelector((state: RootState) => state.userReducer.currentUser);
    return(<>
   <div className='div1'>
     <img src={profil} className="profil"></img>
     </div>
   <div className='div2'>
     <h1>שם: {us.firstName} {us.lastName}</h1>
     <h1>טלפון: {us.phoneNumber}</h1>
     <h1>ת"ז: {us.tz}</h1>
     <h1>מייל: {us.mail}</h1>
   </div>
   <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
   <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    
</>
)}
export default Profil;
