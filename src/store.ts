import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { reducer as homeReducer } from 'ui/home'

let reducers = combineReducers({
  homeData: homeReducer,
})

type RootReducerType = typeof reducers; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
))

// @ts-ignore
window.store = store

export default store