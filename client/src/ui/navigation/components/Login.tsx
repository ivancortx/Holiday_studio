import React from 'react'
import firebase from 'firebase/compat'

import styles from './LoginAndLogout.module.scss'
import firebaseApp from '../../../firebase/firebase'

type Props = {
  auth: any
  setToken: (token: string) => void
  setIsAuthorized: (arg: boolean) => void
}

export const Login: React.VFC<Props> = ({ auth, setToken, setIsAuthorized }) => {

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(provider)
    await firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((token) => {
          setToken(token)
          setIsAuthorized(true)
        })
      }
    })
  }

  return (
    <div className={styles.container} onClick={login}>
      <span className={styles.btn}>Ввійти</span>
    </div>
  )
}