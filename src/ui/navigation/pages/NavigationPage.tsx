import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

import { privateRoutes, publicRoutes } from '../const/routes'
import { Login } from '../components/Login'
import { LogOut } from '../components/LogOut'
import { Context } from '../../../index'

import styles from './NavidationPage.module.scss'

export const NavigationPage: React.VFC = ( ) => {
  const {auth} = useContext(Context)
  const userIsAuth: any = useAuthState(auth)

  return (
    <div className={styles.navContainer}>
      <div className={styles.navButtonsContainer}>
        <div className={styles.button}>
          <Link to={publicRoutes.Home}>Home</Link>
        </div>
        <div className={styles.button}>
          <Link to={publicRoutes.AboutMe}>About me</Link>
        </div>
        {userIsAuth[0] && <div className={styles.button}>
          <Link to={privateRoutes.Settings}>Админка</Link>
        </div>}
      </div>
      <div className={styles.authButton}>
        {userIsAuth[0] ?
          <LogOut auth={auth}/>
          :
          <Login auth={auth}/>
        }
      </div>
    </div>
  )
}