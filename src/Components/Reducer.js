import * as types from './actions/actions';
import { combineReducers } from 'redux';
const { SHOW_ALL } = types.VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function products(state = [], action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [...state, action.productId]
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

const cartApp = combineReducers({
  visibilityFilter,
  products,
  todos
})

export default cartApp

