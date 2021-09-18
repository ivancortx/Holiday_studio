import { Dispatch } from 'react'

import { WRITE_CURRENT_USER_DATA } from './types'
import { sendUserData } from 'api/api'
import { UserDataType } from '../interfaces/navigationPage/navigationPageInterfaces'

export type ActionsTypes = WriteCurrentUserDataType

type WriteCurrentUserDataType = {
  type: typeof WRITE_CURRENT_USER_DATA
  data: UserDataType
}

export const writeCurrentUserData = (data: UserDataType): WriteCurrentUserDataType => ({
  type: WRITE_CURRENT_USER_DATA,
  data
})

export const updateUserRole = (token: string) => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await sendUserData(token)
  const newObj: UserDataType = {
    auth_time: response.data.auth_time,
    email: response.data.email,
    email_verified: response.data.email_verified,
    name: response.data.name,
    picture: response.data.picture,
    roles: response.data.roles,
    uid: response.data.uid
  }
  dispatch(writeCurrentUserData(newObj))
}