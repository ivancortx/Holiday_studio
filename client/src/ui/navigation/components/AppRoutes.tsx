import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

import { privateRoutes, publicRoutes } from '../const/routes'
import { HomePage } from 'ui/home'
import firebaseApp from '../../../firebase/firebase'
import { PhotoPage } from '../../photo/pages/PhotoPage'
import { PhotoByCategory } from '../../photo/components/PhotoByCategory'
import { ReviewsPage } from '../../review/pages/ReviewsPage/ReviewsPage'


export const AppRoutes: React.VFC = () => {
  const auth =  firebaseApp.auth()
  const userIsAuth: any = useAuthState(auth)

  return userIsAuth[0] ?
    (<Switch>
      <Route path={publicRoutes.Home} exact component={HomePage}/>
      <Route path={publicRoutes.PhotoPage} exact component={PhotoPage}/>
      <Route path={publicRoutes.PhotoPageCategory} exact component={PhotoByCategory}/>
      <Route path={publicRoutes.ReviewsPage} exact component={ReviewsPage}/>

      <Redirect to={publicRoutes.Home}/>
    </Switch>)
    :
    (<Switch>
      <Route path={publicRoutes.Home} exact component={HomePage}/>
      <Route path={publicRoutes.PhotoPage} exact component={PhotoPage}/>
      <Route path={publicRoutes.PhotoPageCategory} exact component={PhotoByCategory}/>
      <Route path={publicRoutes.ReviewsPage} exact component={ReviewsPage}/>
      <Redirect to={publicRoutes.Home}/>
    </Switch>)
}