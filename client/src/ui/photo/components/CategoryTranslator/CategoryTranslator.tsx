import React from 'react'
import { useSelector } from 'react-redux'

import { AppStateType } from '../../../../store'

type Props = {
  title: string
}

// @ts-ignore
export const CategoryTranslator: React.VFC<Props> = ({ title }) => {
  const photoCategory = useSelector((state: AppStateType) => state.photoCategoryData.photoCategory)

  let name = ''
  for (let cat of photoCategory) {
    if (title === cat.title) {
      return name = cat.name
    }
  }

  return (
    <div>
      {name}
    </div>
  )
}