import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

import { privateRoutes, publicRoutes } from '../const/routes'
import { Login } from '../components/Login'
import { LogOut } from '../components/LogOut'

import styles from './NavidationPage.module.scss'
import firebaseApp from '../../../firebase/firebase'
import { Button } from '../components/Button'
import logo from 'assets/images/logo.png'

export const NavigationPage: React.VFC = () => {

  const [token, setToken] = useState('')
  const [isAuthorized, setIsAuthorized] = useState(false ||
    window.localStorage.getItem('auth') === 'true')
  const auth = firebaseApp.auth()
  const userIsAuth: any = useAuthState(auth)

  useEffect(() => {
    window.localStorage.setItem('auth', 'true')
  }, [token])


  return (
    <div className={styles.navContainer}>
      <div className={styles.logoAndLoginContainer}>
        <div className={styles.logo}>
          <img src={logo}/>
        </div>
        <div className={styles.authButton}>
          {userIsAuth[0] ?
            <LogOut auth={auth}
                    setIsAuthorized={setIsAuthorized}
                    token={token}/>
            :
            <Login auth={auth}
                   setToken={setToken}
                   setIsAuthorized={setIsAuthorized}
                   />
          }
        </div>
      </div>

      <div className={styles.navButtonsContainer}>
        <div className={styles.button}>
          <Link to={publicRoutes.Home}><Button text={'Головна'}/></Link>
        </div>
        <div className={styles.button}>
          <Link to={publicRoutes.PhotoPage}><Button text={'Кіно'}/></Link>
        </div>
        <div className={styles.button}>
          <Link to={publicRoutes.PhotoPage}><Button text={'Фото'}/></Link>
        </div>
        <div className={styles.button}>
          <Link to={publicRoutes.PhotoPage}><Button text={'Послуги'}/></Link>
        </div>
        <div className={styles.button}>
          <Link to={publicRoutes.ReviewsPage}><Button text={'Відгуки'}/></Link>
        </div>
        {/*{userIsAuth[0] && <div className={styles.button}>*/}
        {/*  <Link to={privateRoutes.Settings}>Админка</Link>*/}
        {/*</div>}*/}
      </div>

    </div>
  )
}