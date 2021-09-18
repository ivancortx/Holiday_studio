import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useReviewsHooks } from '../hooks/useReviewsHooks'
import { fetchReviews } from '../store/action'
import { AddReviewForm } from '../form/AddReviewForm'

import styles from './Reviews.module.scss'

export const Reviews: React.VFC = () => {
  const dispatch = useDispatch()
  const { reviewsData, roles, userData } = useReviewsHooks()
  const isAuthUser: boolean = roles?.includes('user', 0)

  useEffect(() => {
    dispatch(fetchReviews())
  }, [dispatch])

  return (
    <div>
      <div>
        {reviewsData.map((review) => (
          <div key={review.id} className={styles.reviewBlock}>
            <div className={styles.authorName}>{review.author}</div>
            <div className={styles.text}>{review.text}</div>
          </div>
        ))}
      </div>
      {isAuthUser ? <div>
          <AddReviewForm reviewsData={reviewsData}
                         userData={userData}/>
        </div>
        :
        <div className={styles.authMessage}>
          <span>Для того щоб залишити свій відгук будь-ласка авторизуйтесь.</span>
        </div>}
    </div>
  )
}