import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'

import { CategoryTranslator } from '../CategoryTranslator/CategoryTranslator'
import { useVideoPageHooks } from '../../hooks/useVideoPageHooks'
import { DeleteVideo } from '../DeleteVideo/DeleteVideo'
import { AddVideoForm } from '../../form/AddVideoForm'
import { fetchVideos } from '../../store/action'

import styles from './VideoByCategory.module.scss'

export const VideoByCategory: React.VFC = () => {
  const dispatch = useDispatch()
  const { title } = useParams<{ title: string }>();
  const { videoData, roles } = useVideoPageHooks()
  const isAdmin = roles?.includes('admin', 0)

  useEffect(() => {
    dispatch(fetchVideos(title))
  }, [title, dispatch])

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
                <iframe className={styles.video} src={video.videoUrl} title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
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
