import React from 'react'
import { usePhotoPageHooks } from '../hooks/usePhotoPageHooks'

import styles from './PhotoByCategory.module.scss'


export const PhotoByCategory: React.VFC = () => {
  const { weddingData } = usePhotoPageHooks()

  return (
      <div className={styles.container}>
        <div className={styles.linksBlock}>
      {weddingData.map(photo => (
            <div key={photo.id} className={styles.link}>
              <div>
                <img src={photo.image}/>
              </div>
              <div>
                {/*<div className={styles.linkText}>*/}
                {/*  <Link to={publicRoutes.PhotoPage}>Фотографії</Link>*/}
                {/*</div>*/}
              </div>
            </div>
      ))
      }
        </div>
      </div>
  )
}