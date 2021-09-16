import React from 'react'

import styles from './VideoPage.module.scss'
import { useVideoPageHooks } from '../../hooks/useVideoPageHooks'
import { VideoLinkItem } from '../../components/VideoLinkItem'

export const VideoPage: React.VFC = () => {
  const { videoCategories } = useVideoPageHooks()

  return (
    <div className={styles.container}>
      <div className={styles.title}><span>Портфоліо відео</span></div>
      <div className={styles.linksBlock}>
        {
          videoCategories.map((category =>
              <VideoLinkItem category={category}
                             key={category.id}/>
          ))
        }
      </div>
    </div>
  )
}