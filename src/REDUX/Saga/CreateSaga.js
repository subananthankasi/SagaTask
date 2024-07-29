import { CreateService } from "../../Service/CreateService";
import * as Types from "../ActionType"
import { call, put, takeLatest } from "redux-saga/effects";

function* CreateSaga({payload}){
try{
    const createResponse = yield call (CreateService,payload)
    const response = createResponse.data
    console.log('response',response);
    yield put({
        type : Types.Create_Success,
        payload:response
    })
}
catch(error){
     yield put({
        type:Types.Create_Failure,
        error:{message:error.message}
     })
}
}
function* watchCreate(){
    yield takeLatest(Types.Create_Request,CreateSaga)
}

export default watchCreate