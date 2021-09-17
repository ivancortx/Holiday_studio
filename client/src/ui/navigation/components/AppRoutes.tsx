import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { HomePage } from 'ui/home'
import { PhotoPage } from '../../photo/pages/PhotoPage'
import { PhotoByCategory } from '../../photo/components/PhotoByCategory'
import { ReviewsPage } from '../../review/pages/ReviewsPage/ReviewsPage'
import { VideoPage } from '../../video/pages/VideoPage'
import { VideoByCategory } from '../../video/components/VideoByCategory'
import { Routes } from '../const/routes'
import { ServicesPage } from '../../services/pages'


export const AppRoutes: React.VFC = () => {
  return<Switch>
    <Route path={Routes.Home} exact component={HomePage}/>
    <Route path={Routes.PhotoPage} exact component={PhotoPage}/>
    <Route path={Routes.PhotoPageCategory} exact component={PhotoByCategory}/>
    <Route path={Routes.VideoPage} exact component={VideoPage}/>
    <Route path={Routes.VideoPageCategory} exact component={VideoByCategory}/>
    <Route path={Routes.ReviewsPage} exact component={ReviewsPage}/>
    <Route path={Routes.ServicesPage} exact component={ServicesPage}/>
    <Redirect to={Routes.Home}/>
  </Switch>
}