import React, { useEffect, useState } from 'react'
import { VideoType } from '../intarfaces/videoPage/videoPageInterfaces.js'
import deleteButton from 'assets/images/deleteItem.png'
import firebaseApp from '../../../firebase/firebase'
import { updateVideos } from '../store/action'
import { useDispatch } from 'react-redux'

type Props = {
  video: VideoType
  videoData: VideoType[]
  title: string
}

export const DeleteVideo: React.VFC<Props> = ({ video, videoData, title }) => {
  // const storageRef = firebaseApp.storage().ref()
  // const photoRef = storageRef.child(`${video.path}`)
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

  const deleteVideo = () => {

     const newArray = videoData.filter(p => video.id !== p.id);

      const photoObject: object = { [`${title}`]: newArray }
      dispatch(updateVideos(title, photoObject, token))

  }

  return (
    <div onClick={deleteVideo}>
      <img src={deleteButton} alt={'del'}/>
    </div>
  )
}