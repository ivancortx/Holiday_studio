import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { NavigationPage } from './ui/navigation/pages'
import { AppRoutes } from './ui/navigation/components/AppRoutes/AppRoutes'
import { FooterPage } from './ui/footer/pages/FooterPage'
import { AuthProvider } from 'context/AuthContext'

import './App.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
     <AuthProvider>
       <div className="container">
         <NavigationPage/>
         <div className="content">
           <AppRoutes/>
         </div>
         <FooterPage/>
       </div>
     </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
