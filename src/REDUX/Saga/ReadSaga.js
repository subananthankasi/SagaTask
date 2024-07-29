import { call, put, takeLatest } from "redux-saga/effects";
import * as Types from "../ActionType"
import { ReadService } from "../../Service/ReadService";

export function* ReadSaga (){
    try{
        const readResponse = yield call (ReadService)
        const response = readResponse.data
        yield put({
            type:Types.Read_Success,
            payload:response
        })
    }
    catch(err){
        yield put ({
            type : Types.Read_Failure,
            error:err
        })
    }
}

function* watchRead (){
    yield takeLatest (Types.Read_Request,ReadSaga)
}
export default watchRead