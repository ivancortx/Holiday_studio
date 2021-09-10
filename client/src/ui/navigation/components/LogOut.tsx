import React, { useEffect } from 'react'
import styles from './LoginAndLogout.module.scss'
import axios from 'axios'

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


  useEffect(() => {
    if (token) {
      fetchData(token)
    }
  }, [token])


  const fetchData = async (token: string) => {
    const res = await axios.get('http://localhost:5000/api/todos', {
        headers: {
          Authorization: 'Bererrrr ' + token,
        },
      }
    )
    console.log(res)
  }


  return (
    <div className={styles.container} onClick={exit}>
      <span className={styles.btn}>LogOut</span>
    </div>
  )
}