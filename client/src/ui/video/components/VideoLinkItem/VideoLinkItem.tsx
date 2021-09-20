import React from 'react'
import { NavLink } from 'react-router-dom'

import { VideoCategoryType } from '../../intarfaces/videoPage/videoPageInterfaces'

import styles from './VideoLinkItem.module.scss'

type Props = {
  category: VideoCategoryType
}

export const VideoLinkItem: React.VFC<Props> = ({ category }) => {
  return (
    <NavLink className={styles.link} to={`/video/${category.title}`}>
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