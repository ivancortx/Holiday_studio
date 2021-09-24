import React from 'react'
import { Link } from 'react-router-dom'

import styles from './HomePageLink.module.scss'

type Props = {
  photoUrl: string
  categoryName: string
  route: any
}

export const HomePageLink: React.VFC<Props> = ({photoUrl, categoryName, route}) => {
  return (
    <Link to={route}>
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

