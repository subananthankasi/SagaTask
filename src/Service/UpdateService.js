import axios from "axios";
import { Base_Url } from "../Environment/Environment";
const API_URL = Base_Url
export function UpdateService (request){
    console.log('request.id',request.id)
    return axios ({
        method:"PUT",
        url:API_URL +"/"+request.id,
        data:{
            userName:request.values.userName,
            password:request.values.password,
            developer:request.values.developer,
            gender:request.values.gender,
            language:request.values.language,
        }
    })
}
// password,developer,developer,gender,language