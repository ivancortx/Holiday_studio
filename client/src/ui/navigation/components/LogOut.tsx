import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { sendUserData } from 'api/api'
import { updateUserRole } from '../../photo/store/action'

import styles from './LoginAndLogout.module.scss'



type Props = {
  auth: any
  setIsAuthorized: (arg: boolean) => void
  token: string
}

export const LogOut: React.VFC<Props> = ({ auth, setIsAuthorized, token }) => {
  const dispatch = useDispatch()

  const exit = () => {
    auth.signOut()
    setIsAuthorized(false)
  }

  useEffect(() => {
    if (token) {
      dispatch(updateUserRole(token))
    }
  }, [token])

  return (
    <div className={styles.container} onClick={exit}>
      <span className={styles.btn}>LogOut</span>
    </div>
  )
}