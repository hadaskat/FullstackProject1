import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddDispatch, store } from "../app/store"
import { RootState } from "../app/store";
import RecipeReviewCard from "../component/Catalog";
import { getTrampolinas } from "../features/trampolina/TrampolinaSlice";
import { Trampolina } from "../models/trampolina";

const SortPrice = () => {
    const trampolinas = useSelector((state: RootState) => state.trampolinaReducer.Trampolinas);
    const dispatch: AddDispatch = useDispatch();
    const price = trampolinas.filter((t:Trampolina) =>  500<=t.price && t.price<900);
    // console.log(newValue[0],newValue[1])
    useEffect(() => {
        dispatch(getTrampolinas());
    }, []);
    return (<>
        {price.map(t => <RecipeReviewCard t={t}></RecipeReviewCard>)}
    </>)

}
export default SortPrice;