import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddDispatch, RootState } from "../../app/store";
import Userexport from "../../component/UserTable";
import { Lend } from "../../models/lend";
import { getLends } from "./LendSlice";
import RowCard from "./ShowLendUser";

const LendUser = () => {
    const dispatch: AddDispatch = useDispatch();
    useEffect(() => {
        dispatch(getLends());
    }, []);
    const historyL = useSelector((state: RootState) => state.LendReducer.historyLends);
    const us=useSelector((state: RootState) => state.userReducer.currentUser);
    const LendP = historyL.filter((l:Lend) => l.user.id==us.id);
    return (<>
    <h1>רשימת השאלות למשתמש</h1>
        {LendP.map(l => <RowCard l={l}></RowCard>)}
    </>)

}
export default LendUser;