import React from 'react'

import { usePhotoPageHooks } from '../../hooks/usePhotoPageHooks'
import { PhotoLinkItem } from '../../components/PhotoLinkItem/PhotoLinkItem'

import styles from './PhotoPage.module.scss'

export const PhotoPage: React.VFC = () => {
  const { photoCategories } = usePhotoPageHooks()

  return (
    <div className={styles.container}>
      <div className={styles.title}><span>Портфоліо фотографій</span></div>
      <div className={styles.linksBlock}>
        {
          photoCategories.map((category =>
              <PhotoLinkItem category={category}
                             key={category.id}/>
          ))
        }
      </div>
    </div>
  )
}