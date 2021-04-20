import { reset } from "redux-form";

function postDataSuccess(posts) {
  return {
    type : 'POST_DATA_SUCCESS',
    payload : posts
  }
}

export function postFetchData() {
  return (dispatch) => {
      fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
          return response
      }).then(r => r.json())
          .then(items => dispatch(postDataSuccess(items)))
  }
}

export function postFetchMyData(posts, newPost) {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        title: newPost.post,
      })
    }).then(response => {
      return response
    }).then(resp => resp.json())
      .then(post => {
       const {title} = post
       const newPosts = [...posts, {
         id : posts[posts.length-1].id + 1,
         title
       }]
        return dispatch(postDataSuccess(newPosts))})
        .then(dispatch(reset('add')))
  }
}