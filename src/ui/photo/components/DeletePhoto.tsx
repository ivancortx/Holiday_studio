import React from 'react'
import { PhotoType } from '../interfaces/photoPage/photoPageInterfaces'
import deleteButton from 'assets/images/deleteItem.png'
import firebaseApp from '../../../firebase/firebase'

const db = firebaseApp.firestore()

type Props = {
  photo: PhotoType
  photoData: PhotoType[]
  title: string
}

export const DeletePhoto: React.VFC<Props> = ({ photo, photoData, title }) => {
  const storageRef = firebaseApp.storage().ref()
  const photoRef = storageRef.child(`${photo.path}`)

  const deletePhoto = () => {
    photoRef.delete().then(() => {
     const newArray = photoData.filter(p => photo.id !== p.id);

      db.collection('photosData').doc(title).set({
        [`${title}`]: newArray
      })
    })
  }

  return (
    <div onClick={deletePhoto}>
      <img src={deleteButton} alt={'del'}/>
    </div>
  )
}