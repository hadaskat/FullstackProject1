import axios from "axios";
import { Trampolina } from "../models/trampolina";

export const API = axios.create({
  baseURL:"http://localhost:8585/api/trampolina"
});

export const createTrampolina=(newTrampolina:Trampolina)=>API.post("",newTrampolina);

export const fetchTrampolinas = () => API.get("/Trampolinas");

export const fetchSingleTrampolina = async (id:number) => await API.get(`/${id}`)

export const deleteTrampolina =  (id:number) =>  API.delete(`/${id}`);

export const updateTrampolina = (trampolina:Trampolina) => API.put(`/${trampolina.id}`, trampolina)