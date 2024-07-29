import * as Types from '../ActionType'

export const CreateAction = ({values}) => ({
    type:Types.Create_Request,
    payload:values
})