import { useSelector } from 'react-redux'
import { AppStateType } from 'store'

export const useReviewsHooks = () => {
  const reviewsData = useSelector((state: AppStateType) => state.reviewsData.reviewsData)
  const roles = useSelector((state: AppStateType) => state.userData.userData[0]?.roles)
  const userData = useSelector((state: AppStateType) => state.userData.userData)

  return ({ reviewsData, roles, userData })
}