import firebaseApp from 'firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export const useNavigationPage = () => {
  const auth = firebaseApp.auth()
  const userIsAuth: any = useAuthState(auth)
  return ({ userIsAuth, auth })
}