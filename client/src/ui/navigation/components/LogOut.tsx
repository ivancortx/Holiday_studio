import React, { useEffect } from 'react'
import styles from './LoginAndLogout.module.scss'
import axios from 'axios'
import firebaseApp from '../../../firebase/firebase'

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

  // @ts-ignore
  firebaseApp.auth().currentUser.getIdTokenResult()
    .then((idTokenResult) => {
      // Confirm the user is an Admin.
      if (!!idTokenResult.claims.admin) {
        // Show admin UI.
        console.log('admin');
      } else {
        // Show regular user UI.
        console.log('user');
      }
    })


  const fetchData = async (token: string) => {
    const res = await axios.get('http://localhost:5000/api/saveUser', {
        headers: {
          Authorization: 'newUserToken ' + token,
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