import { UPDATE_VIDEOS_DATA } from './types'
import { ActionsTypes } from './action'
import { VideoCategoryType, VideoType } from '../intarfaces/videoPage/videoPageInterfaces'

import wedding from 'assets/images/VideoPage/wedding.jpg'
import birthday from 'assets/images/VideoPage/birthday.jpg'
import christening from 'assets/images/VideoPage/christening.jpg'
import school from 'assets/images/VideoPage/school.jpg'
import graduatesCeremony from 'assets/images/VideoPage/graduatesCeremony.jpg'
import otherCeremony from 'assets/images/VideoPage/other.jpg'

type InitialStateType = {
  videoCategory: VideoCategoryType[]
  videoData: VideoType[]
}

const initialState: InitialStateType = {
  videoCategory: [
    {id: 1, name: 'Весілля', image: wedding, title: 'wedding'},
    {id: 2, name: 'Дні народження', image: birthday, title: 'birthday'},
    {id: 3, name: 'Хрестини', image: christening, title: 'christening'},
    {id: 4, name: 'Школа', image: school, title: 'school'},
    {id: 5, name: 'Випуски', image: graduatesCeremony, title: 'schoolCeremony'},
    {id: 5, name: 'Інші заходи', image: otherCeremony, title: 'otherCeremony'},
  ],
  videoData: [],
}

export const reducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case UPDATE_VIDEOS_DATA:
        return {
          ...state,
          videoData: action.data
        }
    default:
      return state
  }
}