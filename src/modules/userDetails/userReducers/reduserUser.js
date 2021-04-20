export const reducerUser = (state=[], action) => {
    switch(action.type) {
      case 'USER_DATA_ID_SUCCESS' :
        return action.payload
  
      default : return state
    }
  }
  
  export const reducerUserAlbums = (state=[], action) => {
    switch(action.type) {
      case 'USER_ALBUMS_DATA_SUCCESS':
        return action.payload
  
        default : return state
    }
  }
  
  export const reducerUserPosts = (state =[], action) => {
    switch(action.type) {
      case 'USER_POSTS_DATA_SUCCESS' :
        return action.payload
  
      default : return state
    }
  }
  export const reducerUserTodos = (state =[], action) => {
    switch(action.type) {
      case 'USER_TODOS_DATA_SUCCESS' :
        return action.payload
      case 'USER_TODOS_DATA_COMPLETE' :
        const idx = state.findIndex(item => item.id === action.payload);
        const newData = {...state[idx], completed: !state[idx].completed};
        const newState = [...state.slice(0, idx), newData, ...state.slice(idx+1)];
        return newState
  
      default : return state
    }
  }
  