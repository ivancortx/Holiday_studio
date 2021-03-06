import { Dispatch } from 'react'

import { FETCH_PHOTOS_DATA } from './types'
import { PhotoType } from '../interfaces/photoPage/photoPageInterfaces'
import { loadPhotos, sendPhoto } from 'api/api'

export type ActionsTypes = SetPhotosType

type SetPhotosType = {
  type: typeof FETCH_PHOTOS_DATA
  data: Array<PhotoType>
}

export const setPhotos = (data: Array<PhotoType>): SetPhotosType => ({
  type: FETCH_PHOTOS_DATA,
  data
})

export const fetchPhotos = (title: string) => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await loadPhotos(title)
  const data: PhotoType[] = await response.data[`${title}`]
  dispatch(setPhotos(data))
}

export const updatePhotos = (title: string, data: object, token: string) => async (dispatch: any) => {
  await sendPhoto(title, data, token)
    .then (response => dispatch(fetchPhotos(title))
  )

}