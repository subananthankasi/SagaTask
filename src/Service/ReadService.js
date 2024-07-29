import axios from "axios";
import { Base_Url } from "../Environment/Environment";


const API_URL = Base_Url

export function ReadService(){
    return axios({
        method:'GET',
        url:API_URL
    })
}