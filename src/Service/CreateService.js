import axios from "axios";
import { Base_Url } from "../Environment/Environment";
const API_URL = Base_Url
export function CreateService(request){
   console.log("rwquest",request);
 return axios({
    method:'post',
    url:API_URL,
    data:request
 })
}