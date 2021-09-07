import React from 'react'
import styles from './LoginAndLogout.module.scss'

type Props = {
  auth: any
}

export const LogOut: React.VFC<Props> = ({ auth }) => {
  const exit = () => {
    auth.signOut()
  }

  return (
    <div className={styles.container} onClick={exit}>
      <span className={styles.btn}>LogOut</span>
    </div>
  )
}