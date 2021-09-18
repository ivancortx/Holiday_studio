import React from 'react'

import punkt from 'assets/images/punkt.png'

import styles from './ServicesPage.module.scss'

export const ServicesPage: React.VFC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img className={styles.punktImage} src={punkt} alt={'dia'}/>
        Фото та відеозйомка весіль, днів народжень, хрестин, та інших заходів
      </div>
      <div className={styles.item}>
        <img className={styles.punktImage} src={punkt} alt={'dia'}/>
        Професійна обробка фото та відео матеріалів
      </div>
      <div className={styles.item}>
        <img className={styles.punktImage} src={punkt} alt={'dia'}/>
        Розробка віньєток
      </div>
      <div className={styles.item}>
        <img className={styles.punktImage} src={punkt} alt={'dia'}/>
        Друк фотографій
      </div>
      <div className={styles.item}>
        <img className={styles.punktImage} src={punkt} alt={'dia'}/>
        Друк на полотні
      </div>
      <div className={styles.item}>
        <img className={styles.punktImage} src={punkt} alt={'dia'}/>
        Інше
      </div>
    </div>
  )
}