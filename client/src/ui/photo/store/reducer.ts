import { PhotoCategoryType, PhotoType } from '../interfaces/photoPage/photoPageInterfaces'
import { FETCH_PHOTOS_DATA } from './types'
import { ActionsTypes } from './action'
import wedding from 'assets/images/PhotoPage/wedding.jpg'
import birthday from 'assets/images/PhotoPage/birthday.jpg'
import vignette from 'assets/images/PhotoPage/vignette.jpg'
import school from 'assets/images/PhotoPage/school.jpg'
import schoolCeremony from 'assets/images/PhotoPage/graduatesCeremony.jpg'
import family from 'assets/images/PhotoPage/family.jpg'

type InitialStateType = {
  photoCategory: PhotoCategoryType[]
  photoData: PhotoType[]
}

const initialState: InitialStateType = {
  photoCategory: [
    {id: 1, name: 'Весілля', image: wedding, title: 'wedding'},
    {id: 2, name: 'День народження', image: birthday, title: 'birthday'},
    {id: 3, name: 'Віньєтка', image: vignette, title: 'vignette'},
    {id: 4, name: 'Школа', image: school, title: 'school'},
    {id: 5, name: 'Випуски', image: schoolCeremony, title: 'schoolCeremony'},
    {id: 6, name: 'Сімейна', image: family, title: 'family'},
  ],
  photoData: [],
}

export const reducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case FETCH_PHOTOS_DATA:
        return {
          ...state,
          photoData: action.data
        }
    default:
      return state
  }
}










