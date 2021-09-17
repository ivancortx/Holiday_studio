import React, { useEffect, useState } from 'react'
import shortid from 'shortid'
import firebaseApp from '../../../firebase/firebase'

import { useDispatch } from 'react-redux'
import { VideoType } from '../intarfaces/videoPage/videoPageInterfaces'
import { updateVideos } from '../store/action'
import { Field, Form, Formik } from 'formik'
import { validate } from './validate'

import styles from './AddVideoForm.module.scss'
import { type } from 'os'

type Props = {
  title: string
  videoData: VideoType[]
}

export const AddVideoForm: React.VFC<Props> = ({title, videoData}) => {

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
      initialValues = {{
        videoUrl: ''
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        const identifier: string = shortid.generate()
        videoData.push({
          id: `${identifier}`,
          videoUrl: values.videoUrl
        })
        const videoObject: object = { [`${title}`]: videoData }
        dispatch(updateVideos(title, videoObject, token))
      }}>
      <div className={styles.container}>
        <h4>Додати відео</h4>
        <Form className={styles.form}>
          <label htmlFor="videoUrl" className="form-label">URL адрес:</label>
          <Field className="form-control" id="videoUrl" name="videoUrl" placeholder="Введіть URL адрес відео файлу" />
          <button type='submit' className="btn btn-success">Додати</button>
        </Form>
      </div>
    </Formik>
  )
}