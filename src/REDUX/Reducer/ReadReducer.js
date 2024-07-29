import { Read_Failure, Read_Request, Read_Success } from "../ActionType";

const initialState = {
    loading:false,
    error:null,
    data:[]
}

export function ReadReducer(state = initialState,action) {
    switch(action.type){
        case Read_Request :
            return {
                ...state,
                loading:true,
                error:null
            }
            case Read_Success :
            return {
                ...state,
                loading:false,
                error:null,
                data:action.payload
            }
            case Read_Failure :
            return {
                ...state,
                loading:false,
                error:action.error
            }
            default :
            return state
    }
}
export default ReadReducer