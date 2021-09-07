import { PhotoCategoryType, PhotoType } from '../interfaces/photoPage/photoPageInterfaces'

import wedding from 'assets/images/PhotoPage/wedding.jpg'
import birthday from 'assets/images/PhotoPage/birthday.jpg'
import vignette from 'assets/images/PhotoPage/vignette.jpg'
import w1 from 'assets/images/PhotoPage/wedding/01.jpg'
import w2 from 'assets/images/PhotoPage/wedding/02.jpg'
import w3 from 'assets/images/PhotoPage/wedding/03.jpg'
import w4 from 'assets/images/PhotoPage/wedding/04.jpg'
import w5 from 'assets/images/PhotoPage/wedding/05.jpg'
import w6 from 'assets/images/PhotoPage/wedding/06.jpg'
import w7 from 'assets/images/PhotoPage/wedding/07.jpg'
import w8 from 'assets/images/PhotoPage/wedding/08.jpg'


type InitialStateType = {
  photoCategory: Array<PhotoCategoryType>
  weddingData: Array<PhotoType>
}

const initialState: InitialStateType = {
  photoCategory: [
    {id: 1, name: 'Весілля', image: wedding, title: 'wedding'},
    {id: 2, name: 'День народження', image: birthday, title: 'birthday'},
    {id: 2, name: 'Він\'єтка', image: vignette, title: 'vignette'}
  ],
  weddingData: [
    {id: 1, image: w1},
    {id: 2, image: w2},
    {id: 3, image: w3},
    {id: 4, image: w4},
    {id: 5, image: w5},
    {id: 6, image: w6},
    {id: 7, image: w7},
    {id: 8, image: w8},

  ]
}

export const reducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {

    default:
      return state
  }
}