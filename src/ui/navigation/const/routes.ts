type PublicRoutesType = {
  Home: string,
  AboutMe: string
}

type PrivateRoutesType = {
  Settings: string
}

export const publicRoutes: PublicRoutesType = {
  Home: '/',
  AboutMe: '/about-me'
}

export const privateRoutes: PrivateRoutesType = {
  Settings: '/settings'
}