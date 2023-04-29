import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

const AddUser = () => {
  const dispatch = useDispatch();
  let User = { name: "add User" };


  return (
    <>
      <button >add User</button>
    </>
  );
};
export default AddUser;