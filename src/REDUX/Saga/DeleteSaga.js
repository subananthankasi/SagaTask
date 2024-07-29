import { DeleteService } from "../../Service/DeleteService";
import * as Types from "../ActionType"
import { call, put, takeLatest } from "redux-saga/effects";

function* DeleteSaga({payload}){
try{
    const createResponse = yield call (DeleteService,payload)
    console.log('payload',payload);
    const response = createResponse.data
    console.log('response',response);
    yield put({
        type : Types.Delete_Success,
        payload:response
    })
}
catch(error){
     yield put({
        type:Types.Delete_Failure,
        error:{message:error.message}
     })
}
}
function* watchCreate(){
    yield takeLatest(Types.Delete_Request,DeleteSaga)
}

export default watchCreate