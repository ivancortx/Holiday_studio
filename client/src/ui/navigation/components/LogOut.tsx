import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './LoginAndLogout.module.scss'

import firebaseApp from '../../../firebase/firebase'
import { AppStateType } from '../../../store'
import { updateUserRole } from '../store/action'
import firebase from 'firebase/compat'


type Props = {
  auth: any
  setIsAuthorized: (arg: boolean) => void
}

export const LogOut: React.VFC<Props> = ({ auth, setIsAuthorized }) => {
  const dispatch = useDispatch()
  const userData = useSelector((state: AppStateType) => state.userData.userData)
  const login = async () => {
    await firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((token) => {
          // const csrfToken = getCookie('csrfToken')
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
    setIsAuthorized(false)
    localStorage.clear()
  }

  return (
    <div className={styles.container} onClick={exit}>
      {userData[0] && <span>Вітаю, {userData[0].name} </span>}
      <span className={styles.btn}>LogOut</span>
    </div>
  )
}