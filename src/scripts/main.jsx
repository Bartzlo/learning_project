import {createStore} from 'redux'

console.log('Start main script')
console.log('-----------------')

ReactDOM.render(<h1>Hello world!</h1>, document.getElementById('root'))

function reducer (state, action) {
  switch (action.type) {
  case 'INCREASE_COUNTER':
    return {...state, counter: state.counter + 1}
  case 'RESET_COUNTER':
    return {...state, counter: 0}
  default:
    return state
  }
}

const store = createStore(reducer, {counter: 0})

store.subscribe(() => console.log(store.getState()))

store.dispatch({type: 'INCREASE_COUNTER'})
store.dispatch({type: 'INCREASE_COUNTER'})
store.dispatch({type: 'INCREASE_COUNTER'})
store.dispatch({type: 'INCREASE_COUNTER'})
store.dispatch({type: 'RESET_COUNTER'})

