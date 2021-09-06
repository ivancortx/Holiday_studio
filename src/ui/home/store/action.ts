import { Dispatch } from 'react'
import firebase from 'firebase/compat'

import { UPDATE_POSTS_DATA } from './types'
import { PostType } from '../interfaces/postItem/postItemInterfaces'

export type ActionsTypes = SetPostsType

type SetPostsType = {
  type: typeof UPDATE_POSTS_DATA
  data: Array<PostType>
}

export const setPosts = (data: Array<PostType>): SetPostsType => ({
  type: UPDATE_POSTS_DATA,
  data
})

export const fetchPosts = () => async (dispatch: Dispatch<ActionsTypes>) => {
  const base = firebase.firestore();
  const homeDataRef = base.collection("homeData").doc("homeData-postsData")
  const data = await homeDataRef.get()

  dispatch(setPosts(data.data()?.postsData??[]))
}

export const addPost = (post: PostType, posts: PostType[]) => () => {
  posts[posts.length] = post

  const base = firebase.firestore();
  base.collection("homeData").doc("homeData-postsData").set({ postsData: posts })
}

export const deletePost = (post: PostType, posts: PostType[]) => () => {
  let newPosts: PostType[] = []
  posts.map((p) => {
    if (p.id !== post.id) {
      newPosts.push(p)
    }
    return newPosts
  })

  const base = firebase.firestore();
  base.collection("homeData").doc("homeData-postsData").set({ postsData: newPosts })
}

