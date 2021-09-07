import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { PhotoCategoryType } from '../interfaces/photoPage/photoPageInterfaces'

import styles from './PhotoLinkItem.module.scss'


type Props = {
  category: PhotoCategoryType
}

export const PhotoLinkItem: React.VFC<Props> = ({ category }) => {
  return (
    <NavLink to={`/photo/${category.title}`}>
    <div className={styles.link}>
      <div>
        <img src={category.image} alt='img'/>
      </div>
      <div>
        <div className={styles.linkText}>
          <Link to="#">{category.name}</Link>
        </div>
      </div>
    </div>
    </NavLink>
  )
}