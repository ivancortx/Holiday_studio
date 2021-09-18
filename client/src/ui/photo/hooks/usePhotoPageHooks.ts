import { useSelector } from 'react-redux'
import { AppStateType } from 'store'

export const usePhotoPageHooks = () => {
  const photoCategories = useSelector((state: AppStateType) => state.photoCategoryData.photoCategory)
  const photoData = useSelector((state: AppStateType) => state.photoCategoryData.photoData)
  const roles = useSelector((state: AppStateType) => state.userData.userData[0]?.roles)

  return ({ photoCategories, photoData, roles })
}