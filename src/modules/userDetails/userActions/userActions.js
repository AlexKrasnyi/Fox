function userDataIdSuccess(user) {
  return {
    type : 'USER_DATA_ID_SUCCESS', 
    payload : user
  }
}
function userAlbumsDataSuccess(albums) {
	return {
    type : 'USER_ALBUMS_DATA_SUCCESS',
    payload : albums
  }
}
function userPostsDataSuccess(posts) {
  return {
    type : 'USER_POSTS_DATA_SUCCESS',
    payload : posts
  }
}
function userTodosDataSuccess (todos) {
  return {
    type: 'USER_TODOS_DATA_SUCCESS',
    payload : todos
  }
}
export function userTodoCompleted (id) {
  return {
    type: 'USER_TODOS_DATA_COMPLETE',
    payload : id
  }
}
export  function userData (url) {
  return (dispatch) => {
    fetch(url).then(responce => {
       return responce
    }).then(responce => responce.json())
      .then(user => {
        dispatch(userDataIdSuccess(user))})
  }
}
export function userAlbumsData(id) {
  return dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
    .then(res => res)
    .then(response => response.json())
    .then(albums => dispatch(userAlbumsDataSuccess(albums)))
  }
}
export function userPostsData (id) {
  return dispatch => fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
  .then(res => res)
  .then(responce => responce.json())
  .then(posts => dispatch(userPostsDataSuccess(posts)))
}
export function userTodosData (id) {
  return dispatch => fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
  .then(res => res)
  .then(responce => responce.json())
  .then(posts => dispatch(userTodosDataSuccess(posts)))
}