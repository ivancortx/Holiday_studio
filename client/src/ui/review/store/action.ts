import { Dispatch } from 'react'

import { UPDATE_REVIEWS_DATA } from './types'
import { loadReviews, sendReview } from 'api/api'
import { ReviewType } from '../interfaces/reviewPage/reviewPageInterfaces'

export type ActionsTypes = addReviewType

type addReviewType = {
  type: typeof UPDATE_REVIEWS_DATA
  data: Array<ReviewType>
}

export const setReview = (data: Array<ReviewType>): addReviewType => ({
  type: UPDATE_REVIEWS_DATA,
  data
})

export const fetchReviews = () => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await loadReviews()
  const data: ReviewType[] = await response.data.reviews
  dispatch(setReview(data))
}

export const updateReviews = (data: object, token: string) => async (dispatch: Dispatch<ActionsTypes>) => {
  await sendReview(data, token)
  fetchReviews()
}