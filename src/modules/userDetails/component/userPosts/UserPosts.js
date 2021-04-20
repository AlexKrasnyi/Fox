import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { userPostsData } from '../../userActions/userActions'
import './UserPosts.scss';


const UserPosts = () => {
const dispatch = useDispatch();
const {id} = useParams();
const posts = useSelector(state => state.reducerUserPosts);
useEffect(() => {
dispatch(userPostsData(id))
}, [dispatch, id])

const postList = posts.map(post => {
  return(
    <li className="userPost" key={post.id}>
      <h3 className="userPost__title">"{post.title}"</h3>
      <p className="userPost__body">{post.body}</p>     
    </li>
  )
})

  return (
    <ul>
      {postList}
    </ul>
  )
}

export default UserPosts;