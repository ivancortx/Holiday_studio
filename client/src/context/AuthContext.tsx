import React from 'react'
import { createContext, useState } from 'react'
import firebaseApp from '../firebase/firebase'

export const AuthContext = createContext<any>('')
export const AuthUpdateContext = createContext<any>('')
export const IsAuthContext = createContext<any>('')

// @ts-ignore
export const AuthProvider = ({children}) => {
  const [token, setToken] = useState('')
  const [isAuth, setIsAuth] = useState(false)

  const fetchToken = async () => {
    await firebaseApp.auth().onAuthStateChanged((userCred) => {
      if (userCred) {
        userCred.getIdToken().then((tokenId) => {
           setToken(tokenId)
          setIsAuth(true)
        })
      } else {
        setToken('')
        setIsAuth(false)
      }
    })
  }

  return (
    <IsAuthContext.Provider value={isAuth}>
      <AuthContext.Provider value={token}>
        <AuthUpdateContext.Provider value={fetchToken}>
          {children}
        </AuthUpdateContext.Provider>
      </AuthContext.Provider>
    </IsAuthContext.Provider>
  )
}