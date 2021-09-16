import React, { useEffect, useState } from 'react'

import styles from './VideoByCategory.module.scss'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'


import { CategoryTranslator } from './CategoryTranslator'

import { Portal } from './Portal'

import firebaseApp from '../../../firebase/firebase'
import { useVideoPageHooks } from '../hooks/useVideoPageHooks'
import { VideoType } from '../intarfaces/videoPage/videoPageInterfaces'
import { DeleteVideo } from './DeleteVideo'
import { AddVideoForm } from '../form/AddVideoForm'
import { fetchVideos } from '../store/action'


export const VideoByCategory: React.VFC = () => {
  const dispatch = useDispatch()

  const { title } = useParams<{ title: string }>();

  const [token, setToken] = useState('')

  const fetchToken = async () => {
    await firebaseApp.auth().onAuthStateChanged((userCred) => {
      if (userCred) {
        userCred.getIdToken().then((tokenId) => {
             setToken(tokenId)
          dispatch(fetchVideos(title, tokenId))
        })
      }
    })
  }

  useEffect(() => {
    fetchToken()
  }, [])

  const { videoData, roles } = useVideoPageHooks()



  const isAdmin = roles?.includes('admin', 0)




  return (
    videoData ?
      <div className={styles.container}>
        <div className={styles.title}>
          <CategoryTranslator title={title}/>
        </div>

        <div className={styles.linksBlock}>
          {videoData.map(video => (
            <div key={video.id}>

              <div className={styles.link}>
                {isAdmin && <div className={styles.deletePhotoButton}>
                  <DeleteVideo video={video}
                               videoData={videoData}
                               title={title}/>
                </div>}
                <iframe width="600" height="415" src={video.videoUrl} title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
              </div>
            </div>
          ))
          }
        </div>
        {isAdmin && <AddVideoForm title={title}
                               videoData={videoData}/>}
      </div>
      :
      <div className={styles.empty}>
        Відео матеріали в даному розділі відсутні
        {isAdmin && <AddVideoForm title={title}
                                  videoData={videoData}/>}
      </div>
  )
}


