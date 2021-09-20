import React from 'react'
import { createContext, useState } from 'react'
import firebaseApp from '../firebase/firebase'

export const AuthContext = createContext<any>('')
export const AuthUpdateContext = createContext<any>('')

// @ts-ignore
export const AuthProvider = ({children}) => {
  const [token, setToken] = useState('')

  const fetchToken = async () => {
    await firebaseApp.auth().onAuthStateChanged((userCred) => {
      if (userCred) {
        userCred.getIdToken().then((tokenId) => {
           setToken(tokenId)
        })
      }
    })
  }

  return (
    <AuthContext.Provider value={token}>
      <AuthUpdateContext.Provider value={fetchToken}>
        {children}
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  )
}

















// import { createContext, useReducer } from 'react'
// import firebaseApp from '../firebase/firebase'
// import { FETCH_PHOTOS_DATA } from '../ui/photo/store/types'
// import { PhotoType } from '../ui/photo/interfaces/photoPage/photoPageInterfaces'
// const ADD_TOKEN = 'AUTH_CONTEXT/ADD_TOKEN'
//
// export type Action = setTokenType
// export type State = typeof defaultState
//
// const defaultState = {token: ''}
//
// export const AuthContext = createContext<string>('')
//
// function authReducer(state: State, action: Action) {
//   switch (action) {
//     case ADD_TOKEN:
//       return
//         token: action.token
//       }
//
//     default:
//       return state
//   }
// }
//
// type setTokenType = {
//   type: typeof ADD_TOKEN
//   token: string
// }
//
// export const setToken = (token: string): any => ({
//   type: ADD_TOKEN,
//   token
// })
//
// export const fetchToken = async () => {
//     await firebaseApp.auth().onAuthStateChanged((userCred) => {
//       if (userCred) {
//         userCred.getIdToken().then((tokenId) => {
//           setToken(tokenId)
//         })
//       }
//     })
// }
//
// export const AuthProvider = ({children})  => {
//   const [state, dispatch] = useReducer(authReducer, defaultState)
//
//   return (
//     <AuthContext.Provider value = {{ state, dispatch }}>
//       {children}
//       </AuthContext.Provider>
//   )
// }
