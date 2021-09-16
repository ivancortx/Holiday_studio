import { Dispatch } from 'react'

import { UPDATE_PHOTOS_DATA } from './types'
import { PhotoType } from '../interfaces/photoPage/photoPageInterfaces'
import { loadPhotos, sendPhoto } from 'api/api'

export type ActionsTypes = SetPhotosType

type SetPhotosType = {
  type: typeof UPDATE_PHOTOS_DATA
  data: Array<PhotoType>
}

export const setPhotos = (data: Array<PhotoType>): SetPhotosType => ({
  type: UPDATE_PHOTOS_DATA,
  data
})

  export const fetchPhotos = (title: string, token: string) => async (dispatch: Dispatch<ActionsTypes>) => {
  const response = await loadPhotos(title, token)
  const data: PhotoType[] = await response.data[`${title}`]
  dispatch(setPhotos(data))
}

export const updatePhotos = (title: string, data: object, token: string) => async (dispatch: Dispatch<ActionsTypes>) => {
  await sendPhoto(title, data, token)
  fetchPhotos(title, token)
}


// export const addPost = (post: PostType, posts: PostType[]) => () => {
//   posts[posts.length] = post
//
//   const base = firebase.firestore();
//   base.collection("homeData").doc("homeData-postsData").set({ postsData: posts })
// }
//
// export const deletePost = (post: PostType, posts: PostType[]) => () => {
//   let newPosts: PostType[] = []
//   posts.map((p) => {
//     if (p.id !== post.id) {
//       newPosts.push(p)
//     }
//     return newPosts
//   })
//
//   const base = firebase.firestore();
//   base.collection("homeData").doc("homeData-postsData").set({ postsData: newPosts })
// }

