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
        <Link to={publicRoutes.PhotoPage}>
          <div className={styles.link}>
            <div>
              <img src={foto} alt={'photo'}/>
            </div>
            <div>
              <div className={styles.linkText}>
                Фотографії
              </div>
            </div>
          </div>
        </Link>
        <Link to={publicRoutes.PhotoPage}>
          <div className={styles.link}>
            <div>
              <img src={kino} alt={'kino'}/>
            </div>
            <div className={styles.linkText}>
              Кіно
            </div>
          </div>
        </Link>
        <Link to={publicRoutes.PhotoPage}>
          <div className={styles.link}>
            <div>
              <img src={service} alt={'service'}/>
            </div>
            <div className={styles.linkText}>
              Послуги
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}