import React from 'react'
import styles from './LoginAndLogout.module.scss'

type Props = {
  auth: any
  setIsAuthorized: (arg: boolean) => void
  token: string
}

export const LogOut: React.VFC<Props> = ({ auth, setIsAuthorized, token }) => {
  const exit = () => {
    auth.signOut()
    setIsAuthorized(false)
  }

  return (
    <div className={styles.container} onClick={exit}>
      <span className={styles.btn}>LogOut</span>
    </div>
  )
}