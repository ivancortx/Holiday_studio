import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { NavigationPage } from './ui/navigation/pages'
import { AppRoutes } from './ui/navigation/components/AppRoutes'

import './App.scss'
import { AuthProvider } from './firebase/Auth'

const App: React.FC = ( ) => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="container">
          <NavigationPage />
          <div className="content">
            <AppRoutes />
          </div>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
