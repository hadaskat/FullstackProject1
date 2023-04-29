import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddDispatch, store } from "../app/store"
import { RootState } from "../app/store";
import RecipeReviewCard from "../component/Catalog";
import { getTrampolinas } from "../features/trampolina/TrampolinaSlice";
import { Trampolina } from "../models/trampolina";

const DryList = () => {
    const trampolinas = useSelector((state: RootState) => state.trampolinaReducer.Trampolinas);
    const dispatch: AddDispatch = useDispatch();
    const dryList = trampolinas.filter((t:Trampolina) => t.categoryId==2);
    useEffect(() => {
        dispatch(getTrampolinas());
    }, []);
    return (<>
        {dryList.map(t => <RecipeReviewCard t={t}></RecipeReviewCard>)}
    </>)

}
export default DryList;