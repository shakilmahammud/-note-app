import { configureStore,combineReducers } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import themeSliceReducer from './themeSlice'

const rootReducer = combineReducers({
    counter:counterReducer,
    theme:themeSliceReducer,
})


export const store = configureStore({
    reducer:rootReducer,
  })
