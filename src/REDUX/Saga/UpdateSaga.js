import { call, put, takeLatest } from "redux-saga/effects";
import { UpdateService } from "../../Service/UpdateService";
import * as Types from "../ActionType"

export function* UpdateSaga ({payload}) {
    console.log("updatePayloadSaga",payload);
    try{
        const updateResponse = yield call(UpdateService,payload)
        const response = updateResponse.data
        yield put({
            type:Types.Update_Success,
            payload:response
        })

    }
    catch (error){
        yield put({
            type:Types.Update_Failure,
            error:error
        })
    }
}
function* watchUpdate(){
    yield takeLatest(Types.Update_Request,UpdateSaga)
}

export default watchUpdate