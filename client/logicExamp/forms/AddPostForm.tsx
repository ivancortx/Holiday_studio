import React from 'react'
import { Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'

import { AddPostFormField } from './AddPostFormField'
import { addPost } from '../store/action'
import { validate } from './validate'
import { PostType } from '../interfaces/postItem/postItemInterfaces'
import { useHomePage } from '../hooks/useHomePage'
import shortid from 'shortid'


export const AddPostForm: React.VFC = () => {
  const dispatch = useDispatch()
  const { homeData } = useHomePage()

  return (
    <Formik
      initialValues={{
        title: '',
        price: ''
      }}
      validationSchema={validate}
      onSubmit={(values: PostType , { resetForm }) => {
        values.id = shortid.generate()
        dispatch(addPost(values, homeData.postsData))
        resetForm()
      }}>
      <div>
        <h2>Add posts</h2>
        <Form>
          <AddPostFormField label='title' name='title' type='text'/>
          <AddPostFormField label='price' name='price' type='text'/>
          <button type='submit'>Add post</button>
        </Form>
      </div>
    </Formik>
  )
}