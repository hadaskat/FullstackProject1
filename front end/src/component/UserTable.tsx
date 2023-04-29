import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export default function Userexport(props: any) {
      const [open, setOpen] = React.useState(false);

 
  return (<div>
  <React.Fragment >
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          {/* <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton> */}
        </TableCell>
        <TableCell >{props.u.tz}</TableCell>
        <TableCell >{props.u.password}</TableCell>
        <TableCell >{props.u.firstName}</TableCell>
        <TableCell >{props.u.lastName}</TableCell>
        <TableCell >{props.u.phoneNumber}</TableCell>
        <TableCell >{props.u.mail}</TableCell>
        <TableCell >{props.u.status}</TableCell>
      </TableRow>
       <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
          </Collapse>
         </TableCell>
      </TableRow>
    </React.Fragment>
    
    </div>
  );
}
