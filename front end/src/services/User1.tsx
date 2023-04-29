import axios from "axios";
import { User } from "../models/user";

export const API = axios.create({
  baseURL:"http://localhost:8585/api/user"
});

export const createUser=(newUser:User)=>API.post("",newUser);
// export const login=(newUser:User)=>API.post("",newUser);

export const fetchUsers = () => API.get("/Users");

export const fetchSingleUser = async (id:number) => await API.get(`/${id}`)

export const deleteUser =  (id:number) =>  API.delete(`/${id}`);

export const updateUser = (user:User) => API.put(`/${user.id}`, user)