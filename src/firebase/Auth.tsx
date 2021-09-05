import React from 'react'
import firebaseApp from './firebase'
import { createContext, useEffect, useState } from 'react'
import firebase from 'firebase/compat'

export const AuthContext = createContext<any>(null)

type Props = {
  children: any
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null)
  const auth: any = firebase.auth()

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        auth
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}