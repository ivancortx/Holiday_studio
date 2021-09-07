import React from 'react'

import foto from 'assets/images/Home page/foto.jpg'
import kino from 'assets/images/Home page/film.jpg'
import service from 'assets/images/Home page/service.jpg'

import styles from './HomePage.module.scss'
import { Link } from 'react-router-dom'
import { publicRoutes } from '../../../navigation/const/routes'

export const HomePage: React.VFC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linksBlock}>
        <div className={styles.link}>
          <div>
            <img src={foto}/>
          </div>
          <div>
            <div className={styles.linkText}>
              <Link to={publicRoutes.PhotoPage}>Фотографії</Link>
            </div>
          </div>
        </div>
        <div className={styles.link}>
          <div>
            <img src={kino}/>
          </div>
          <div className={styles.linkText}>
            <Link to={publicRoutes.PhotoPage}>Кіно</Link>
          </div>
        </div>
        <div className={styles.link}>
          <div>
            <img src={service}/>
          </div>
          <div className={styles.linkText}>
            <Link to={publicRoutes.PhotoPage}>Послуги</Link>
          </div>
        </div>
      </div>
    </div>
  )
}