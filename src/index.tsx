import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase/compat'

import App from './App'

import './index.css'

firebase.initializeApp({
    apiKey: "AIzaSyAH78pb7WP_HnIIFkt8YEQ7Kx-AAldNvXQ",
    authDomain: "holiday-studio.firebaseapp.com",
    projectId: "holiday-studio",
    storageBucket: "holiday-studio.appspot.com",
    messagingSenderId: "950586530550",
    appId: "1:950586530550:web:9a234a7be9686c3c706ad7",
    measurementId: "G-LCYXGTMBRC"
  }
)

export const Context = createContext<any>(null)

const auth: any = firebase.auth()
const firestore: any = firebase.firestore()

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{ auth, firestore }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

