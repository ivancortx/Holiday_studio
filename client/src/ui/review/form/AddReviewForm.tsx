import React, { useEffect, useState } from 'react'
import shortid from 'shortid'
import firebaseApp from '../../../firebase/firebase'

import { useDispatch } from 'react-redux'
import { updateReviews } from '../store/action'
import { Field, Form, Formik } from 'formik'
import { validate } from './validate'

import styles from './AddReviewForm.module.scss'
import { ReviewType } from '../interfaces/reviewPage/reviewPageInterfaces'
import { UserDataType } from '../../navigation/interfaces/navigationPage/navigationPageInterfaces'

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
        const reviewsObject: object = { ['reviews']: reviewsData }
        dispatch(updateReviews(reviewsObject, token))
      }}>
      <div className={styles.container}>
        <h4>Напишіть відгук</h4>
        <Form className={styles.form}>
          <label htmlFor="text" className="form-label">URL адрес:</label>
          <Field className="form-control" id="text" name="text" placeholder="Введіть відгук"/>
          <button type='submit' className="btn btn-success">Написати</button>
        </Form>
      </div>
    </Formik>
  )
}