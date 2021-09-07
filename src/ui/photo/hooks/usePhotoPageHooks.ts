import { useSelector } from 'react-redux'
import { AppStateType } from '../../../store'

export const usePhotoPageHooks = () => {
  const photoCategories = useSelector((state: AppStateType) => state.photoCategoryData.photoCategory)
  const weddingData = useSelector((state: AppStateType) => state.photoCategoryData.weddingData)

  return ({ photoCategories, weddingData })
}