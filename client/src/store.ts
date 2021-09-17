import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import {reducer as photoCategoryReducer} from 'ui/photo'
import {reducer as videoCategoryReducer} from 'ui/video'
import {reducer as userDataReducer} from 'ui/navigation'
import {reducer as reviewsDataReducer} from 'ui/review'

let reducers = combineReducers({
  photoCategoryData: photoCategoryReducer,
  videoCategoryData: videoCategoryReducer,
  userData: userDataReducer,
  reviewsData: reviewsDataReducer
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