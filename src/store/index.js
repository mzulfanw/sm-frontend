import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'

import reducers from './slices'
import rootSaga from './sagas'

const sagasMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagasMiddleware]

const store = configureStore({
  reducer: reducers,
  middleware,
  devTools: true
})

sagasMiddleware.run(rootSaga)

export default store