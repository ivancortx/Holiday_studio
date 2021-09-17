import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useReviewsHooks } from '../hooks/useReviewsHooks'

import styles from './Reviews.module.scss'
import { fetchReviews } from '../store/action'
import { AddReviewForm } from '../form/AddReviewForm'

export const Reviews: React.VFC = () => {
  const dispatch = useDispatch()
  const { reviewsData, roles, userData } = useReviewsHooks()

  useEffect(() => {
    dispatch(fetchReviews())
  }, [])


  return (
    <div>
      <div>
        {reviewsData.map((review) => (
          <div key={review.id}>
            <div>Імя: {review.author}</div>
            <div>: {review.text}</div>
          </div>
        ))}
      </div>

      <div>
        <AddReviewForm reviewsData={reviewsData}
                       userData={userData}/>
      </div>

    </div>
  )
}