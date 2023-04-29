import { Trampolina } from "./trampolina";
import { User } from "./user";

export interface Lend{
    id:number|any;
    lendingDate:Date;
    returnDate:Date; 
    sum?:Float64Array|undefined
    user:User;
    trampolina?:Trampolina; 
}