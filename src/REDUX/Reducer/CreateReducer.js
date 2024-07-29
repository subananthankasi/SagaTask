import { Create_Failure, Create_Request, Create_Success } from "../ActionType";

const initialState = {
    loading:false,
    error:null,
    data:[]
}
export function CreateReducer(state=initialState,action){
    switch(action.type){
        case Create_Request :
            return{
                ...state,
                loading:true,
                error:null
            }
        case Create_Success :
            return{
                ...state,
                data:action.payload,
                loading:false,
                error:null
            }
        case Create_Failure :
            return{
                ...state,
                loading:false,
                error:action.error
            }
            default :
            return state
    }
}
export default CreateReducer