import { useSelector } from 'react-redux'
import { AppStateType } from 'store'

export const useVideoPageHooks = () => {
  const videoCategories = useSelector((state: AppStateType) => state.videoCategoryData.videoCategory)
  const videoData = useSelector((state: AppStateType) => state.videoCategoryData.videoData)
  const roles = useSelector((state: AppStateType) => state.userData.userData[0]?.roles)

  return ({ videoCategories, videoData, roles })
}