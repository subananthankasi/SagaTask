import * as Types from '../ActionType'

export const UpdateAction = (payload) => ({
    type:Types.Update_Request,
    payload:payload
})