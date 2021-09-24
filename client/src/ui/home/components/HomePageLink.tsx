import React from 'react'
import { Link } from 'react-router-dom'

import { Routes } from '../../navigation/const/routes'

import styles from './HomePageLink.module.scss'

type Props = {
  photoUrl: string
  categoryName: string
  pageUrl: string
}

export const HomePageLink: React.VFC<Props> = ({photoUrl, categoryName, pageUrl}) => {
  return (
    <Link to={pageUrl}>
      <div className={styles.link}>
        <div>
          <img src={photoUrl} alt={'one'}/>
        </div>
        <div>
          <div className={styles.linkText}>
            {categoryName}
          </div>
        </div>
      </div>
    </Link>
  )
}

