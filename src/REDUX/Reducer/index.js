import { combineReducers } from "@reduxjs/toolkit";
import CreateReducer from "./CreateReducer";
import ReadReducer from "./ReadReducer";
import DeleteReducer from "./DeleteReducer";
import UpdateReducer from "./UpdateReducer";

const rootReducer = combineReducers({
    createReducer : CreateReducer,
    ReadReducer:ReadReducer,
    DeleteReducer : DeleteReducer,
    UpdateReducer:UpdateReducer,
})
export default rootReducer