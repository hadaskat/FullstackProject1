import { Box, Button, Slider } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {AddDispatch, store} from "../../app/store"
import { RootState } from "../../app/store";
import RecipeReviewCard from "../../component/Catalog";
import { getTrampolinas } from "./TrampolinaSlice";

export default function TrampolinaList(){
  const navigate=useNavigate();
  const Trampolinas = useSelector((state: RootState) => state.trampolinaReducer.Trampolinas);
function handleClickOpen(){
  navigate('/SortPrice')
}
  const [value, setValue] = React.useState<number[]>([0, 1000]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    console.log(newValue)
    setValue(newValue as number[]);
  };
   
    const dispatch:AddDispatch=useDispatch();
    useEffect(() => {
      dispatch(getTrampolinas());
    }, []);
    return(<>     
      <h5  className="price2">רוצה להגדיר את התקציב שלך</h5>
      <div className="price">
     <Box sx={{ width: 300 }}>
    <Slider
      getAriaLabel={() => 'Temperature range'}
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"     
      max={1000}
    />
        <Button variant="outlined" onClick={handleClickOpen} >סנן</Button>
  </Box>
  </div>
       {Trampolinas.map((t: any)=><RecipeReviewCard t={t}></RecipeReviewCard>)}
    </>)

}
