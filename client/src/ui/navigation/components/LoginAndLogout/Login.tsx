import React, { useContext } from 'react'
import firebase from 'firebase/compat'
import { AuthUpdateContext } from 'context/AuthContext'

import styles from './LoginAndLogout.module.scss'

type Props = {
  auth: any
}

export const Login: React.VFC<Props> = ({ auth }) => {
  const setIsAuth = useContext(AuthUpdateContext)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(provider)
      .then(()=>{setIsAuth(true)})
      .catch(()=>{})
  }

  return (
    <div className={styles.container} onClick={login}>
      <span className={styles.btn}>Ввійти</span>
    </div>
  )
}