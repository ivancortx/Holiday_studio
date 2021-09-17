import React from 'react'

import punkt from 'assets/images/punkt.png'

import styles from './ServicesPage.module.scss'

export const ServicesPage: React.VFC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img className={styles.punktImage} src={punkt}/>
        Фото та відеозйомка весіль, днів народжень, хрестин, та інших заходів
      </div>
      <div className={styles.item}>
        <img className={styles.punktImage} src={punkt}/>
        Професійна обробка фото та відео матеріалів
      </div>
      <div className={styles.item}>
        <img className={styles.punktImage} src={punkt}/>
        Розробка віньєток
      </div>
      <div className={styles.item}>
        <img className={styles.punktImage} src={punkt}/>
        Друк фотографій
      </div>
      <div className={styles.item}>
        <img className={styles.punktImage} src={punkt}/>
        Друк на полотні
      </div>
      <div className={styles.item}>
        <img className={styles.punktImage} src={punkt}/>
        Інше
      </div>
    </div>
  )
}