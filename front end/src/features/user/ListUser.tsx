import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {AddDispatch, store} from "../../app/store"
import { RootState } from "../../app/store";
import Userexport from "../../component/UserTable";
import { getUsers } from "./userSlice";
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

const ListUser=()=>{
    const Users = useSelector((state: RootState) => state.userReducer.Users);
    const dispatch:AddDispatch=useDispatch();
    useEffect(() => {
      dispatch(getUsers());
    }, []);    
    return(<>
    <>
    <TableContainer component={Paper} sx={{ margin: 1 }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow >
            <TableCell />
            <TableCell></TableCell>
            <TableCell>tz</TableCell>
            <TableCell>password</TableCell>
            <TableCell>firstName</TableCell>
            <TableCell>lastName</TableCell>
            <TableCell>phoneNumber</TableCell>
            <TableCell>mail</TableCell>
            <TableCell>status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        </TableBody>
      </Table>
    </TableContainer>
    </>
       {Users.map((u:any)=><Userexport u={u}></Userexport>)}
    </>)}
    export default ListUser;