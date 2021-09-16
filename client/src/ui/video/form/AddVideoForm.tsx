import React, { useEffect, useState } from 'react'
import shortid from 'shortid'
import firebaseApp from '../../../firebase/firebase'

import { useDispatch } from 'react-redux'
import { VideoType } from '../intarfaces/videoPage/videoPageInterfaces'
import { updateVideos } from '../store/action'
import { Field, Form, Formik } from 'formik'
import { validate } from './validate'

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
      <div>
        <h2>Додати відео</h2>
        <Form>
          <label htmlFor="videoUrl">URL адрес:</label>
          <Field id="videoUrl" name="videoUrl" placeholder="Введіть URL адрес відео файлу" />
          <button type='submit'>Додати</button>
        </Form>
      </div>
    </Formik>
  )
}