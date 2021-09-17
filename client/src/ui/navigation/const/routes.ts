type RoutesType = {
  Home: string
  PhotoPage: string
  PhotoPageCategory: string
  ReviewsPage: string
  VideoPage: string
  VideoPageCategory: string
  ServicesPage: string
}

export const Routes: RoutesType = {
  Home: '/',
  PhotoPage: '/photo',
  PhotoPageCategory: '/photo/:title?',
  ReviewsPage: '/reviews',
  VideoPage: '/video',
  VideoPageCategory: '/video/:title?',
  ServicesPage: '/services'
}

