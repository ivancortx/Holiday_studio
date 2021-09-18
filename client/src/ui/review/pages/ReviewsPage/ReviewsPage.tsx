import React from 'react'
import { Reviews } from '../../components/Reviews'

import styles from './ReviewPage.module.scss'

export const ReviewsPage: React.VFC = () => (
  <div className={styles.container}>
    <Reviews/>
  </div>
)