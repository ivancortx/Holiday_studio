import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { NavigationPage } from './ui/navigation/pages'
import { AppRoutes } from './ui/navigation/components/AppRoutes'

import './App.scss'

const App: React.FC = ( ) => {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <NavigationPage />
          <div className="content">
            <AppRoutes />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
