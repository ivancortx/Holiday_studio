import { PhotoCategoryType, PhotoType } from '../interfaces/photoPage/photoPageInterfaces'

import wedding from 'assets/images/PhotoPage/wedding.jpg'
import birthday from 'assets/images/PhotoPage/birthday.jpg'
import vignette from 'assets/images/PhotoPage/vignette.jpg'
import { UPDATE_PHOTOS_DATA } from './types'
import { ActionsTypes } from './action'


type InitialStateType = {
  photoCategory: PhotoCategoryType[]
  photoData: PhotoType[]
}

const initialState: InitialStateType = {
  photoCategory: [
    {id: 1, name: 'Весілля', image: wedding, title: 'wedding'},
    {id: 2, name: 'День народження', image: birthday, title: 'birthday'},
    {id: 3, name: 'Віньєтка', image: vignette, title: 'vignette'}
  ],
  photoData: [],
}

export const reducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case UPDATE_PHOTOS_DATA:
        return {
          ...state,
          photoData: action.data
        }
    default:
      return state
  }
}