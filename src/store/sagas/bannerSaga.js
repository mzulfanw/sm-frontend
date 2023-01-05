import { call, put, takeEvery } from 'redux-saga/effects'

import {
  getBannerRequested,
  getBannerSuccess,
  getBannerFailed
} from '@/store/slices/bannerSlice'


import { getBannerAction } from './actions/bannerAction'

function* fetchBanner(action) {
  try {
    const res = yield call(getBannerAction, action?.payload)
    yield put({
      type: getBannerSuccess.toString(),
      payload: res?.data
    })
  } catch (err) {
    yield put({
      type: getBannerFailed.toString()
    })
  }
}

function* BannerSaga() {
  yield takeEvery(getBannerRequested.toString(), fetchBanner)
}

export default BannerSaga