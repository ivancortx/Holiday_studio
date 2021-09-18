import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { NavigationPage } from './ui/navigation/pages'
import { AppRoutes } from './ui/navigation/components/AppRoutes'
import { FooterPage } from './ui/footer/pages/FooterPage'

import './App.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <NavigationPage/>
        <div className="content">
          <AppRoutes/>
        </div>
        <FooterPage/>
      </div>
    </BrowserRouter>
  )
}

export default App;
