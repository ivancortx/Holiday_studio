import React from 'react'

import styles from './PhotoPage.module.scss'
import { usePhotoPageHooks } from '../../hooks/usePhotoPageHooks'
import { PhotoLinkItem } from '../../components/PhotoLinkItem'

export const PhotoPage: React.VFC = () => {
  const { photoCategories } = usePhotoPageHooks()

  return (
    <div className={styles.container}>
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