import firebaseApp from 'firebase/firebase'

export const useNavigationPage = () => {
  const auth = firebaseApp.auth()
  return ({ auth })
}