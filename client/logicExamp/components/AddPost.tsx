import React, { useState } from 'react'
import { AddPostForm } from '../forms/AddPostForm'
import firebaseApp from '../../src/firebase/firebase'

const db = firebaseApp.firestore()

export const AddPost: React.VFC = () => {
  const [fileUrl, setFileUrl] = useState<string>('')

  const saveFile = async (e: any) => {
    const file = e.target.files[0]
    const storageRef = firebaseApp.storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setFileUrl(await fileRef.getDownloadURL())
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    const title = e.target.title.value
    if (!title) {
      return
    }
    db.collection('title').doc(title).set({
      title: title,
      avatar: fileUrl
    })
  }

  return (
    <div>
      <AddPostForm/>
      <form onSubmit={onSubmit}>
        <input type='file' onChange={saveFile} />
        <input type='text' name='title' placeholder='title' />
        <button>Submit</button>
      </form>

    </div>
  )
}