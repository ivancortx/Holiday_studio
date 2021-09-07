import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import firebase from 'firebase/compat'

import { fetchPosts } from '../../store/action'
import { PostItem } from '../../components/PostItem'
import { useHomePage } from '../../hooks/useHomePage'
import { AddPost } from '../../components/AddPost'

export const HomePage: React.VFC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const { homeData } = useHomePage()
  const base = firebase.firestore();

  useEffect(() => {
    base.collection("homeData").doc("homeData-postsData")
      .onSnapshot((doc) => {
        dispatch(fetchPosts())
      })
  }, [base, dispatch])

  if (!homeData.postsData[0]) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        {homeData.postsData.map((post) => (
          <PostItem key={post.id}
                    post={post}/>))
        }
        <div>
          <AddPost/>
        </div>
      </div>
    )
  }
}