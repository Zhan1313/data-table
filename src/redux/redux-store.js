import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { goodsReducer } from './goods-reducer'

const rootReducer = combineReducers({
    goods: goodsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))