export const actName = {
  ADD_USER: 'ADD_USER',
  REMOVE_USER: 'REMOVE_USER'
}

export const actCreate = {
  addUser: function (user) {
    return {type: actName.ADD_USER, user}
  },

  removeUser: function (index) {
    return {type: actName.REMOVE_USER, index}
  }
}
