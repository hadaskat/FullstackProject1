import axios from "axios";
import { Lend } from "../models/lend";

export const API = axios.create({
  baseURL:"http://localhost:8585/api/lend"
});

export const createLend=(newLend:Lend)=>API.post("",newLend);

export const fetchLends = () => API.get("/Lends");

export const fetchSingleLend = async (id:number) => await API.get(`/${id}`)

export const deleteLend =  (id:number) =>  API.delete(`/${id}`);

export const updateLend = (lend:Lend) => API.put(`/${lend.id}`, lend)