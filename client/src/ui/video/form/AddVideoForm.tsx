import React, { useContext } from 'react'
import shortid from 'shortid'
import { useDispatch } from 'react-redux'
import { Field, Form, Formik } from 'formik'

import { VideoType } from '../intarfaces/videoPage/videoPageInterfaces'
import { updateVideos } from '../store/action'
import { validate } from './validate'
import { AuthContext } from 'context/AuthContext'

import styles from './AddVideoForm.module.scss'

type Props = {
  title: string
  videoData: VideoType[]
}

export const AddVideoForm: React.VFC<Props> = ({ title, videoData }) => {
  const dispatch = useDispatch()
  const token = useContext(AuthContext)

  return (
    <Formik
      initialValues={{
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
          <Field className="form-control" id="videoUrl" name="videoUrl" placeholder="Введіть URL адрес відео файлу"/>
          <button type='submit' className="btn btn-success mt-3">Додати</button>
        </Form>
      </div>
    </Formik>
  )
}