const reduserPosts = (state=[], action) => {
  switch(action.type) {
    case 'POST_DATA_SUCCESS' :
      return action.payload

    default : return state
  }
}


export default reduserPosts;