import usersApp from './reducers'
import {createStore} from 'redux'

const defaultStore = {
  users: [
    {firstName: 'Vasya', lastName: 'Vasykov'},
    {firstName: 'Petya', lastName: 'Petkin'},
    {firstName: 'Alyosha', lastName: 'Alyoshin'}
  ]
}

export default createStore(usersApp, defaultStore)
