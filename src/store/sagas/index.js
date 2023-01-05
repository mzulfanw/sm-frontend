import { all } from '@redux-saga/core/effects'

import BannerSaga from './bannerSaga'
import authSaga from './authSaga'
import userSaga from './userSaga'

export default function* rootSaga() {
  yield all([
    BannerSaga(),
    authSaga(),
    userSaga()
  ])
}