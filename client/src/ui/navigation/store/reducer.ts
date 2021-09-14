import { WRITE_CURRENT_USER_DATA } from './types'
import { ActionsTypes } from './action'
import { UserDataType } from '../interfaces/navigationPage/navigationPageInterfaces'

type InitialStateType = {
  userData: UserDataType[]
}

const initialState: InitialStateType = {
  userData: []
}

export const reducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case WRITE_CURRENT_USER_DATA:
      return {
        ...state,
        userData: [action.data]
      }
    default:
      return state
  }
}