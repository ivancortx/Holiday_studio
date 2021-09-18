import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { Routes } from '../const/routes'
import { HomePage } from 'ui/home'
import { PhotoPage } from 'ui/photo/pages/PhotoPage'
import { PhotoByCategory } from 'ui/photo/components/PhotoByCategory'
import { ReviewsPage } from 'ui/review/pages/ReviewsPage'
import { VideoPage } from 'ui/video/pages/VideoPage'
import { VideoByCategory } from 'ui/video/components/VideoByCategory'
import { ServicesPage } from 'ui/services/pages'

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