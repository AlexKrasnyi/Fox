import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducerTodos from '../modules/todoList/todoListRedusers/reducerTodos';
import { reducerUsers } from '../modules/usersList/userListReducers/reduserUsers';
import { 
  reducerUser,
  reducerUserAlbums, 
  reducerUserPosts, 
  reducerUserTodos } from '../modules/userDetails/userReducers/reduserUser';
import reducerPosts from '../modules/postsList/postListRedusers/reducerPosts';

export const rootReducer = combineReducers({
    reducerTodos,
    reducerUsers,
    reducerUser,
    reducerUserAlbums,
    reducerUserPosts,
    reducerUserTodos,
    reducerPosts,
    form: formReducer
  });