import { Dispatch } from 'react'
import firebase from 'firebase/compat'

import { UPDATE_PHOTOS_DATA } from './types'
import { PhotoType } from '../interfaces/photoPage/photoPageInterfaces'

export type ActionsTypes = setPhotosType

type setPhotosType = {
  type: typeof UPDATE_PHOTOS_DATA
  data: Array<PhotoType>
}

export const setPhotos = (data: Array<PhotoType>): setPhotosType => ({
  type: UPDATE_PHOTOS_DATA,
  data
})

export const fetchPhotos = (title: string) => async (dispatch: Dispatch<ActionsTypes>) => {
  const base = firebase.firestore();
  const homeDataRef = base.collection("photosData").doc(title)
  const data = await homeDataRef.get()

  dispatch(setPhotos(data.data()?.[`${title}`]))
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

