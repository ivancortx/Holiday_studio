import React from 'react'
import firebase from 'firebase/compat'

type Props = {
  auth: any
}

export const Login: React.VFC<Props> = ({ auth }) => {
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const { user } = await auth.signInWithPopup(provider)
  }

  return (
    <div onClick={login}>
      Логин
    </div>
  )
}