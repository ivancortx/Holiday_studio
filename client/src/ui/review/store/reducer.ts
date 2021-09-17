import { ReviewType } from '../interfaces/reviewPage/reviewPageInterfaces'

import { UPDATE_REVIEWS_DATA } from './types'
import { ActionsTypes } from './action'


type InitialStateType = {
  reviewsData: ReviewType[]
}

const initialState: InitialStateType = {
  reviewsData: []
}

export const reducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case UPDATE_REVIEWS_DATA:
        return {
          ...state,
          reviewsData: action.data
        }
    default:
      return state
  }
}