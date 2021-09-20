import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'

import { VideoType } from '../../intarfaces/videoPage/videoPageInterfaces.js'
import deleteButton from 'assets/images/deleteItem.png'
import { updateVideos } from '../../store/action'
import { AuthContext } from '../../../../context/AuthContext'

type Props = {
  video: VideoType
  videoData: VideoType[]
  title: string
}

export const DeleteVideo: React.VFC<Props> = ({ video, videoData, title }) => {
  const dispatch = useDispatch()
  const token = useContext(AuthContext)

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