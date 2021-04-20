const reduserTodos = (state=[], action) => {
  switch(action.type) {
    case 'TODO_DATA_SUCCESS' :
      return action.payload

    default : return state
  }
}

export default reduserTodos;