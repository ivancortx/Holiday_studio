import { UPDATE_POSTS_DATA } from './types'
import { ActionsTypes } from './action'
import { PostType } from '../interfaces/postItem/postItemInterfaces'

type InitialStateType = {
  postsData: Array<PostType>
}

const initialState: InitialStateType = {
  postsData: [
    // {id: 1, title: 'Відеозйомка конференцій', price: '11'},
    // {id: 2, title: 'Весільна відеозйомка', price: '22222'},
    // {id: 3, title: 'Аерозйомка з квадрокоптера', price: '33'},
    // {id: 4, title: 'Зйомка промородиків', price: '22244'},
    // {id: 5, title: 'Хрестини', price: '22662'},
    // {id: 6, title: 'Свадебные фото', price: '5'},
  ]
}

export const reducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case UPDATE_POSTS_DATA:
      return {
        ...state,
        postsData: action.data
      }

    default:
      return state
  }
}