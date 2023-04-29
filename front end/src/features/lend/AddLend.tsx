import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { User }  from "../../models/user";
import { addLend } from "./LendSlice";

const AddLend = () => {
  const dispatch = useDispatch();
  let Lend = { name: "add Lend" };


  return (
    <>
      <button onClick={() => dispatch(addLend(Lend))}>add Lend</button>
    </>
  );
};
export default AddLend;