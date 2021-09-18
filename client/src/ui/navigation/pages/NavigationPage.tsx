import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

import firebaseApp from 'firebase/firebase'
import { Routes } from '../const/routes'
import { Login } from '../components/Login'
import { LogOut } from '../components/LogOut'
import { Button } from '../components/Button'
import logo from 'assets/images/logo.png'

import styles from './NavidationPage.module.scss'

export const NavigationPage: React.VFC = () => {
  const auth = firebaseApp.auth()
  const userIsAuth: any = useAuthState(auth)

  return (
    <div className={styles.navContainer}>
      <div className={styles.logoAndLoginContainer}>
        <div className={styles.logo}>
          <img src={logo} alt={'img'}/>
        </div>
        <div className={styles.authButton}>
          {userIsAuth[0] ?
            <LogOut auth={auth}/>
            :
            <Login auth={auth}/>
          }
        </div>
      </div>
      <div className={styles.navButtonsContainer}>
        <div className={styles.button}>
          <Link to={Routes.Home}><Button text={'Головна'}/></Link>
        </div>
        <div className={styles.button}>
          <Link to={Routes.PhotoPage}><Button text={'Фото'}/></Link>
        </div>
        <div className={styles.button}>
          <Link to={Routes.VideoPage}><Button text={'Відео'}/></Link>
        </div>
        <div className={styles.button}>
          <Link to={Routes.ServicesPage}><Button text={'Послуги'}/></Link>
        </div>
        <div className={styles.button}>
          <Link to={Routes.ReviewsPage}><Button text={'Відгуки'}/></Link>
        </div>
      </div>
    </div>
  )
}