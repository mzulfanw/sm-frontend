import { combineReducers } from '@reduxjs/toolkit'

import bannerSlice from './bannerSlice'
import authSlice from './authSlice'
import userSlice from './userSlice'

const reducers = combineReducers({
  banner: bannerSlice,
  auth: authSlice,
  user: userSlice
})

export default reducers