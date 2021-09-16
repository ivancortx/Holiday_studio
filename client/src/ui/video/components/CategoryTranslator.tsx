import React from 'react'
import { useSelector } from 'react-redux'

import { AppStateType } from '../../../store'

type Props = {
  title: string
}

// @ts-ignore
export const CategoryTranslator: React.VFC<Props> = ({ title }) => {
  const videoCategory = useSelector((state: AppStateType) => state.videoCategoryData.videoCategory)

  let name = ''
  for (let cat of videoCategory) {
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