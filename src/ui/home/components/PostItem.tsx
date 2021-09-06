import React from 'react'
import { PostType } from '../interfaces/postItem/postItemInterfaces'

import styles from './PostItem.module.scss'
import { useHomePage } from '../hooks/useHomePage'
import { useDispatch } from 'react-redux'
import { deletePost } from '../store/action'

type Props = {
  post: PostType
}

export const PostItem: React.VFC<Props> = ({ post }) => {
  const { homeData } = useHomePage()
  const dispatch = useDispatch()
  const removePost = () => {
    dispatch(deletePost(post, homeData.postsData))
  }

  return (
    <div className={styles.container}>
      <div>{post.title}</div>
      <div>цена: {post.price} грн.</div>
      <button onClick={removePost}>Удалить пост</button>
    </div>
  )
}