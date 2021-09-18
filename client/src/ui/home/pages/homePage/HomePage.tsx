import React from 'react'
import { Link } from 'react-router-dom'

import { Routes } from '../../../navigation/const/routes'

import foto from 'assets/images/Home page/foto.jpg'
import kino from 'assets/images/Home page/film.jpg'
import service from 'assets/images/Home page/service.jpg'

import styles from './HomePage.module.scss'

export const HomePage: React.VFC = () => (
  <div className={styles.container}>
    <div className={styles.linksBlock}>
      <Link to={Routes.PhotoPage}>
        <div className={styles.link}>
          <div>
            <img src={foto} alt={'one'}/>
          </div>
          <div>
            <div className={styles.linkText}>
              Фотографії
            </div>
          </div>
        </div>
      </Link>
      <Link to={Routes.VideoPage}>
        <div className={styles.link}>
          <div>
            <img src={kino} alt={'two'}/>
          </div>
          <div className={styles.linkText}>
            Відео
          </div>
        </div>
      </Link>
      <Link to={Routes.PhotoPage}>
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
