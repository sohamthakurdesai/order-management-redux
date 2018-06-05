import { applyMiddleware, compose, createStore } from 'redux'
import inputReducer from './reducers/inputReducer'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
  applyMiddleware(thunk, createLogger())//...functions
)(createStore)


export default function configureStore(initialState = { text: "", option: "", address:"" }) {
  return finalCreateStore(inputReducer, initialState)
}