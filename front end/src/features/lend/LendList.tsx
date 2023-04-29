import { Box, Button, Slider } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {AddDispatch, store} from "../../app/store"
import { RootState } from "../../app/store";
import RecipeReviewCard from "../../component/Catalog";
import Userexport from "../../component/UserTable";
import { Lend } from "../../models/lend";

export default function LendList(){
    const dispatch=useDispatch;
    const history = useSelector((state: RootState) => state.LendReducer.historyLends);
    return(<>
       <h1>היסטורית השאלות</h1>
       {history.map((h: Lend)=><>{h.lendingDate}</>)}
    </>)
}