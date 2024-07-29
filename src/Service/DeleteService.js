import axios from "axios";
import { Base_Url } from "../Environment/Environment";
const API_URL = Base_Url
export function DeleteService(id){
    console.log("delete id",id);
    return axios({
        method:'delete',
        url:API_URL +"/"+id
    })
}