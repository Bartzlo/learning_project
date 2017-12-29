import {actName} from './actions'

function usersApp (state, action) {
  switch (action.type) {
  case actName.ADD_USER:
    return {...state, users: [...state.users, {firstName: action.user.firstName, lastName: action.user.lastName}]}
  case actName.REMOVE_USER:
    let users = []
    state.users.forEach((user, index) => {
      if (action.index !== index) users.push(user)
    })
    return {...state, users}
  default:
    return state
  }
}

export default usersApp
