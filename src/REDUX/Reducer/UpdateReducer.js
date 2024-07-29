import { Update_Failure, Update_Request, Update_Success } from "../ActionType";

const initialState = {
    data:{},
    error:null,
    loading:false
}

export function UpdateReducer (state = initialState,action){
    switch(action.type){
        case Update_Request :
            return{
                ...state,
                loading:true,
                error:null
            }
            case Update_Success :
            return{
                loading:false,
                data:action.payload,
                error:null
            }
            case Update_Failure :
            return{
                loading:false,
                error:action.error
            }
            default :
            return state
    }

}
export default UpdateReducer