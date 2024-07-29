import { all } from "redux-saga/effects";
import watchCreate from "./CreateSaga";
import watchRead from "./ReadSaga";
import watchDelete from "./DeleteSaga";
import watchUpdate from "./UpdateSaga";

export default function* rootSaga(){
    yield all([
        watchCreate(),
        watchRead(),
        watchDelete(),
        watchUpdate(),
    ])
}
