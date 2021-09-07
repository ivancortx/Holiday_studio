type PublicRoutesType = {
  Home: string
  PhotoPage: string
  PhotoPageCategory: string
}

type PrivateRoutesType = {
  Settings: string
  PhotoPage: string
  PhotoPageCategory: string
}

export const publicRoutes: PublicRoutesType = {
  Home: '/',
  PhotoPage: '/photo',
  PhotoPageCategory: '/photo/:title?'
}

export const privateRoutes: PrivateRoutesType = {
  Settings: '/settings',
  PhotoPage: '/photo',
  PhotoPageCategory: '/photo/:title?'
}