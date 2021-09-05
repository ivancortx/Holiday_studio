import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

import { privateRoutes, publicRoutes } from '../const/routes'
import { AboutMePage } from 'ui/aboutMe'
import { HomePage } from 'ui/home'
import { SettingsPage } from '../../settings/pages/HomePage'
import { AuthContext } from '../../../firebase/Auth'


export const AppRoutes: React.VFC = () => {
  const {auth} = useContext(AuthContext)
  const userIsAuth: any = useAuthState(auth)

  return userIsAuth[0] ?
    (<Switch>
      <Route path={publicRoutes.Home} exact component={HomePage}/>
      <Route path={publicRoutes.AboutMe} exact component={AboutMePage}/>
      <Route path={privateRoutes.Settings} exact component={SettingsPage}/>
      <Redirect to={publicRoutes.Home}/>
    </Switch>)
    :
    (<Switch>
      <Route path={publicRoutes.Home} exact component={HomePage}/>
      <Route path={publicRoutes.AboutMe} exact component={AboutMePage}/>
      <Redirect to={publicRoutes.Home}/>
    </Switch>)
}