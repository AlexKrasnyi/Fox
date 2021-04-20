import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postFetchData, postFetchMyData } from './postListActions/postActions';
import InputForm from './components/inputForm/InputForm';
import './PostList.scss';

const PostsList = () => {
  const posts = useSelector(state => state.reducerPosts) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postFetchData())
  }, [dispatch])

  const onSubmit =(data) => {
    let newPost = data
    dispatch(postFetchMyData( posts,  newPost))   
  }

  const post = posts.map((el) => {
    if(el.title){
      return (
        <li className='posts__item' key={el.id}>{el.title}</li>
      )
    }
    return false
    
  })
  return(
    <div className='posts'>
      <h2>Posts</h2>
      <InputForm onSubmit={onSubmit}/>
      <ul className='posts__list'>
        {post}
      </ul>
    </div>
  )
}

export default PostsList;