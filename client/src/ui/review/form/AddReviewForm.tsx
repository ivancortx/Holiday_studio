import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import shortid from 'shortid'
import { Field, Form, Formik } from 'formik'

import { updateReviews } from '../store/action'
import { validate } from './validate'
import { ReviewType } from '../interfaces/reviewPage/reviewPageInterfaces'
import { UserDataType } from 'ui/navigation/interfaces/navigationPage/navigationPageInterfaces'

import styles from './AddReviewForm.module.scss'
import { AuthContext } from 'context/AuthContext'

type Props = {
  reviewsData: ReviewType[]
  userData: UserDataType[]
}

export const AddReviewForm: React.VFC<Props> = ({ reviewsData, userData }) => {
  const token = useContext(AuthContext)
  const dispatch = useDispatch()

  return (
    <Formik
      initialValues={{
        text: ''
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        const identifier: string = shortid.generate()
        reviewsData.push({
          id: identifier,
          author: userData[0].name,
          text: values.text
        })
        const reviewsObject: object = { 'reviews': reviewsData }
        dispatch(updateReviews(reviewsObject, token))
      }}>
      <div className={styles.container}>
        <h4>Напишіть відгук</h4>
        <Form className={styles.form}>
          <Field component="textarea" className="form-control" id="text" name="text" placeholder="Введіть відгук"/>
          <button type='submit' className="btn btn-success mt-3">Написати</button>
        </Form>
      </div>
    </Formik>
  )
}