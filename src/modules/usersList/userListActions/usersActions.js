function userDataSuccess(users) {
  return {
    type : 'USER_DATA_SUCCESS', 
    payload : users
  }
}

export  function usersData (url) {
  return (dispatch) => {
    fetch(url).then(responce => {
      return responce
    }).then(responce => responce.json())
      .then(users => {
        dispatch(userDataSuccess(users))})
  }
}

