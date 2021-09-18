import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import shortid from 'shortid'
import { Field, Form, Formik } from 'formik'

import firebaseApp from 'firebase/firebase'
import { updateReviews } from '../store/action'
import { validate } from './validate'
import { ReviewType } from '../interfaces/reviewPage/reviewPageInterfaces'
import { UserDataType } from 'ui/navigation/interfaces/navigationPage/navigationPageInterfaces'

import styles from './AddReviewForm.module.scss'

type Props = {
  reviewsData: ReviewType[]
  userData: UserDataType[]
}

export const AddReviewForm: React.VFC<Props> = ({ reviewsData, userData }) => {
  const [token, setToken] = useState('')
  const dispatch = useDispatch()

  const fetchToken = async () => {
    await firebaseApp.auth().onAuthStateChanged((userCred) => {
      if (userCred) {
        userCred.getIdToken().then((tokenId) => {
          setToken(tokenId)
        })
      }
    })
  }

  useEffect(() => {
    fetchToken()
  }, [])

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
          <button type='submit' className="btn btn-success">Написати</button>
        </Form>
      </div>
    </Formik>
  )
}