import App from './components/App'
import UserList from './components/UserList'
import {Provider} from 'react-redux'
import store from './store'
import {actCreate} from './store/actions'

console.log('Start main script')
console.log('-----------------')

store.subscribe(() => console.log(store.getState()))
store.dispatch(actCreate.addUser({firstName: 'OLOLOL', lastName: 'ALALA'}))
store.dispatch(actCreate.removeUser(1))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

setTimeout(() => { store.dispatch(actCreate.addUser({firstName: 'OLOLOLSHKA', lastName: 'GGG'})) }, 2000)
setTimeout(() => { store.dispatch(actCreate.addUser({firstName: 'OLOLOLSHKA1', lastName: 'GGG1'})) }, 2500)
setTimeout(() => { store.dispatch(actCreate.removeUser(0)) }, 4000)
setTimeout(() => { store.dispatch(actCreate.removeUser(0)) }, 5000)
setTimeout(() => { store.dispatch(actCreate.removeUser(1)) }, 6000)
