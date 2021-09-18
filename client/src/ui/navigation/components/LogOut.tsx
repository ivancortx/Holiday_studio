import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import firebaseApp from 'firebase/firebase'
import { AppStateType } from 'store'
import { updateUserRole } from '../store/action'

import styles from './LoginAndLogout.module.scss'

type Props = {
  auth: any
}

export const LogOut: React.VFC<Props> = ({ auth }) => {
  const dispatch = useDispatch()
  const userData = useSelector((state: AppStateType) => state.userData.userData)
  const login = async () => {
    await firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((token) => {
          dispatch(updateUserRole(token))
        })
      }
    })
  }

  useEffect(() => {
    login()
  }, [])

  const exit = () => {
    auth.signOut()
  }

  return (
    <div className={styles.container}>
      {userData[0] && <span className={styles.nameUser}>{userData[0].name}, </span>}
      <span onClick={exit} className={styles.btn}>Вийти</span>
    </div>
  )
}