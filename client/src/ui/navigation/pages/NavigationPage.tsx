import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Routes } from '../const/routes'
import { Login } from '../components/LoginAndLogout/Login'
import { LogOut } from '../components/LoginAndLogout/LogOut'
import { Button } from '../components/Button/Button'
import { useNavigationPage } from '../hooks/useNavigationPage'
import logo from 'assets/images/logo.png'

import styles from './NavidationPage.module.scss'
import { IsAuthContext } from '../../../context/AuthContext'

export const NavigationPage: React.VFC = () => {
  const { auth } = useNavigationPage()
  const isAuth = useContext(IsAuthContext)

  return (
    <div className={styles.navContainer}>
      <div className={styles.logoAndLoginContainer}>
        <div className={styles.logo}>
          <img src={logo} alt={'img'}/>
        </div>
        <div className={styles.authButton}>
          {isAuth ?
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