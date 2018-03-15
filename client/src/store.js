import {createStore, compose, applyMiddleware} from "redux"
import {thunk} from 'redux-thunk'
import rootReducer from "./reducers/index"

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolExtension ? window.devToolExtension() : f => f
)

const store = createStore(rootReducer, {}, enhancers)

if(module){
  module.hot.accept("./reducers/", () => {
    const nextRootReducer = require("./reducers/index").default
    store.replaceReducer(nextRootReducer)
  })
}

export default store