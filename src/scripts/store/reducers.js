import {setVisibilityFilter, VisibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, addTodo, toggleTodo} from './actions'
import {createStore, combineReducers} from 'redux'

function todos (state = [], action) {
  switch (action.type) {
  case TOGGLE_TODO:
    return state.map((todo, index) => {
      if (index === action.index) {
        return {...todo, complited: !todo.complited}
      }
      return todo
    })
  case ADD_TODO:
    return [...state, {text: action.text, complited: false}]
  default:
    return state
  }
}

function vsibilityFilter (state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter
  default:
    return state
  }
}

const todoApp = combineReducers({
  vsibilityFilter,
  todos
})

export function init () {
  let store = createStore(todoApp)

  store.subscribe(() => console.log(store.getState()))
  store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))
  store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
  store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))
  store.dispatch(addTodo('Do this first'))
  store.dispatch(addTodo('Do this second'))
  store.dispatch(addTodo('Do another'))
  store.dispatch(toggleTodo(1))
  store.dispatch(toggleTodo(2))
  store.dispatch(toggleTodo(1))
}
