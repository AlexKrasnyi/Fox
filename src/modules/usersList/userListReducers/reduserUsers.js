
 export const reducerUsers = (state=[], action) => {
  switch(action.type) {
    case 'USER_DATA_SUCCESS' :
      return action.payload

    default : return state
  }
}

