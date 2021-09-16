import React from 'react'
import { NavLink } from 'react-router-dom'


import styles from './VideoLinkItem.module.scss'
import { VideoCategoryType } from '../intarfaces/videoPage/videoPageInterfaces'


type Props = {
  category: VideoCategoryType
}

export const VideoLinkItem: React.VFC<Props> = ({ category }) => {
  return (
    <NavLink to={`/video/${category.title}`}>
    <div className={styles.link}>
      <div>
        <img src={category.image} alt='img'/>
      </div>
      <div>
        <div className={styles.linkText}>
          <span>{category.name}</span>
        </div>
      </div>
    </div>
    </NavLink>
  )
}