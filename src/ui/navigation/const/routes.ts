type PublicRoutesType = {
  Home: string
  PhotoPage: string
  PhotoPageCategory: string
  ReviewsPage: string
}

type PrivateRoutesType = {
  Settings: string
  PhotoPage: string
  PhotoPageCategory: string
  ReviewsPage: string
}

export const publicRoutes: PublicRoutesType = {
  Home: '/',
  PhotoPage: '/photo',
  PhotoPageCategory: '/photo/:title?',
  ReviewsPage: '/reviews'
}

export const privateRoutes: PrivateRoutesType = {
  Settings: '/settings',
  PhotoPage: '/photo',
  PhotoPageCategory: '/photo/:title?',
  ReviewsPage: '/reviews'
}