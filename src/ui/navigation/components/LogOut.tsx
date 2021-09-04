import React from 'react'

type Props = {
  auth: any
}

export const LogOut: React.VFC<Props> = ({ auth }) => {
  const exit = () => {
    auth.signOut()
  }

  return (
    <div onClick={exit}>
      Выйти
    </div>
  )
}