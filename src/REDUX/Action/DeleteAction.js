import * as Types from '../ActionType'

export const DeleteAction = (id) => ({
    type:Types.Delete_Request,
    payload:id
})