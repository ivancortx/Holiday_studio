import React from 'react'

import { HomePageLink } from '../../components/HomePageLink'
import foto from 'assets/images/Home page/foto.jpg'
import kino from 'assets/images/Home page/film.jpg'
import service from 'assets/images/Home page/service.jpg'

import styles from './HomePage.module.scss'

export const HomePage: React.VFC = () => (
  <div className={styles.container}>
    <div className={styles.linksBlock}>
      <HomePageLink photoUrl={foto} categoryName={'Фотографії'}/>
      <HomePageLink photoUrl={kino} categoryName={'Відео'}/>
      <HomePageLink photoUrl={service} categoryName={'Послуги'}/>
    </div>
  </div>
)
