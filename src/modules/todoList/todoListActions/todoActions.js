function todoDataSuccess(todos) {
  return {
    type: 'TODO_DATA_SUCCESS',
    payload: todos
  }
}

export function todoData(url) {
  return (dispatch) => {
    fetch(url).then(response => {
      return response
    }).then(r => r.json())
      .then(todos => dispatch(todoDataSuccess(todos)))
  }
}