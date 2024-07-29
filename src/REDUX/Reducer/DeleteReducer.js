import { Delete_Failure, Delete_Request, Delete_Success } from "../ActionType";

const initialState = {
    loading:false,
    error:null,
    data:[]
}
export function DeleteReducer(state = initialState,action){
    switch(action.type){
        case Delete_Request :
            return{
                ...state,
                loading:true,
                error:null,
            }
        case Delete_Success :
            return{
                loading:false,
                data:action.payload,
                error:null,
            }
        case Delete_Failure :
            return{
                loading:false,
                error:action.error.mesage,
            }
        default :
        return state
    }
}

export default DeleteReducer