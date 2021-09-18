import { Dispatch } from 'react'

import { UPDATE_PHOTOS_DATA } from './types'
import { PhotoType } from '../interfaces/photoPage/photoPageInterfaces'
import { loadPhotos, sendPhoto } from 'api/api'

export type ActionsTypes = SetPhotosType

type SetPhotosType = {
  type: typeof UPDATE_PHOTOS_DATA
  data: Array<PhotoType>
}

export const setPhotos = (data: Array<PhotoType>): SetPhotosType => ({
  type: UPDATE_PHOTOS_DATA,
  data
})

  export const fetchPhotos = (title: string) => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await loadPhotos(title)
  const data: PhotoType[] = await response.data[`${title}`]
  dispatch(setPhotos(data))
}

export const updatePhotos = (title: string, data: object, token: string) => async () => {
  await sendPhoto(title, data, token)
  fetchPhotos(title)
}