import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { PhotoType } from '../interfaces/photoPage/photoPageInterfaces'
import firebaseApp from 'firebase/firebase'
import { updatePhotos } from '../store/action'
import deleteButton from 'assets/images/deleteItem.png'

type Props = {
  photo: PhotoType
  photoData: PhotoType[]
  title: string
}

export const DeletePhoto: React.VFC<Props> = ({ photo, photoData, title }) => {
  const storageRef = firebaseApp.storage().ref()
  const photoRef = storageRef.child(`${photo.path}`)
  const [token, setToken] = useState('')

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

  const dispatch = useDispatch()
  const deletePhoto = () => {
    photoRef.delete().then(() => {
      const newArray = photoData.filter(p => photo.id !== p.id);
      const photoObject: object = { [`${title}`]: newArray }
      dispatch(updatePhotos(title, photoObject, token))
    })
  }

  return (
    <div onClick={deletePhoto}>
      <img src={deleteButton} alt={'del'}/>
    </div>
  )
}