import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import firebaseApp from 'firebase/firebase'
import { AppStateType } from 'store'
import { updateUserRole } from '../../store/action'

import styles from './LoginAndLogout.module.scss'
import { AuthContext, AuthUpdateContext } from '../../../../context/AuthContext'

type Props = {
  auth: any
}

export const LogOut: React.VFC<Props> = ({ auth }) => {
  const dispatch = useDispatch()
  const userData = useSelector((state: AppStateType) => state.userData.userData)
  const token = useContext(AuthContext)
  const login = () => {
       dispatch(updateUserRole(token))
  }

  const fetchToken = useContext(AuthUpdateContext)

  useEffect(() => {
    fetchToken()
  }, [])

  useEffect(() => {
    login()
  }, [token])

  const exit = () => {
    auth.signOut()
  }
  console.log(userData[0])
  return (
    <div className={styles.container}>
      {userData[0] !== undefined && userData[0].name !== undefined &&
      <span className={styles.nameUser}>{userData[0].name}, </span>
      }
      <span onClick={exit} className={styles.btn}>Вийти</span>
    </div>
  )
}