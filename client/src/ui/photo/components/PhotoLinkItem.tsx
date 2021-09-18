import React from 'react'
import { NavLink } from 'react-router-dom'

import { PhotoCategoryType } from '../interfaces/photoPage/photoPageInterfaces'

import styles from './PhotoLinkItem.module.scss'

type Props = {
  category: PhotoCategoryType
}

export const PhotoLinkItem: React.VFC<Props> = ({ category }) => {
  return (
    <NavLink className={styles.link} to={`/photo/${category.title}`}>
      <div>
        <img src={category.image} alt='img'/>
      </div>
      <div>
        <div className={styles.linkText}>
          <span>{category.name}</span>
        </div>
      </div>
    </NavLink>
  )
}