import React from 'react'

import styles from './Preloader.module.scss'

export const Preloader: React.VFC = () => (
  <div className={styles.preloaderContainer}>
    <div className={styles.preloader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
)