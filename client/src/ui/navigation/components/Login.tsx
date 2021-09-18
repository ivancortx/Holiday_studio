import React from 'react'
import firebase from 'firebase/compat'

import styles from './LoginAndLogout.module.scss'

type Props = {
  auth: any
}

export const Login: React.VFC<Props> = ({ auth }) => {
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(provider)
  }

  return (
    <div className={styles.container} onClick={login}>
      <span className={styles.btn}>Ввійти</span>
    </div>
  )
}