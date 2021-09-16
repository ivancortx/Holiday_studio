import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import {reducer as photoCategoryReducer} from 'ui/photo/store/reducer'
import {reducer as videoCategoryReducer} from 'ui/video/store/reducer'
import {reducer as userDataReducer} from 'ui/navigation'

let reducers = combineReducers({
  photoCategoryData: photoCategoryReducer,
  videoCategoryData: videoCategoryReducer,
  userData: userDataReducer
})

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
))

// @ts-ignore
window.store = store

export default store