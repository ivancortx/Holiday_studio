import React from 'react'

import { HomePageLink } from '../../components/HomePageLink'
import foto from 'assets/images/Home page/foto.jpg'
import kino from 'assets/images/Home page/film.jpg'
import service from 'assets/images/Home page/service.jpg'

import styles from './HomePage.module.scss'
import {Routes} from "../../../navigation/const/routes";

export const HomePage: React.VFC = () => (
  <div className={styles.container}>
    <div className={styles.linksBlock}>
      <HomePageLink pageUrl={Routes.PhotoPage} photoUrl={foto} categoryName={'Фотографії'}/>
      <HomePageLink pageUrl={Routes.VideoPage} photoUrl={kino} categoryName={'Відео'}/>
      <HomePageLink pageUrl={Routes.ServicesPage} photoUrl={service} categoryName={'Послуги'}/>
    </div>
  </div>
)
