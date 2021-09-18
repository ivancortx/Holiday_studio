import { Dispatch } from 'react'

import { UPDATE_VIDEOS_DATA } from './types'
import { loadVideos, sendVideo } from 'api/api'
import { VideoType } from '../intarfaces/videoPage/videoPageInterfaces'

export type ActionsTypes = SetVideosType

type SetVideosType = {
  type: typeof UPDATE_VIDEOS_DATA
  data: Array<VideoType>
}

export const SetVideos = (data: Array<VideoType>): SetVideosType => ({
  type: UPDATE_VIDEOS_DATA,
  data
})

export const fetchVideos = (title: string) => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await loadVideos(title)
  const data: VideoType[] = await response.data[`${title}`]
  dispatch(SetVideos(data))
}

export const updateVideos = (title: string, data: object, token: string) => async (dispatch: Dispatch<ActionsTypes>) => {
  await sendVideo(title, data, token)
  fetchVideos(title)
}