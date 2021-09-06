import { useSelector } from 'react-redux'
import { AppStateType } from '../../../store'

export const useHomePage = () => {
  const homeData = useSelector((state: AppStateType) => state.homeData)

  return ({homeData})
}