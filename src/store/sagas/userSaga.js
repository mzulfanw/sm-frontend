
import { toast } from 'react-hot-toast'
import { call, put, takeEvery, delay } from 'redux-saga/effects'

import {
  getUserRequested,
  getUserSuccess,
  getUserFailed,
  postUpdateUserRequested,
  postUpdateUserSuccess,
  postUpdateUserFailed
} from '../slices/userSlice'

import {
  getProfileAction,
  postUpdateUserAction
} from './actions/userAction'

function* fetchProfile(action) {
  try {
    const res = yield call(getProfileAction, action?.payload)

    yield put({
      type: getUserSuccess.toString(),
      payload: res?.data
    })
    toast.success('Success get data', {
      duration: 4000
    })
  } catch (err) {
    yield put({
      type: getUserFailed.toString()
    })
    toast.error('Failed get data', {
      duration: 4000
    })
  }
}

function* postUpdateUser(action) {
  try {
    const res = yield call(postUpdateUserAction, action?.payload)
    yield put({
      type: postUpdateUserSuccess.toString()
    })
    toast.success(`${res?.data?.message}`, {
      duration: 4000
    })
    yield delay(5000, true)
    window.location.href = '/protected/user'
  } catch (err) {
    yield put({
      type: postUpdateUserFailed.toString()
    })
    toast.error(`${err.statusText}`, {
      duration: 4000
    })
  }
}

function* userSaga() {
  yield takeEvery(getUserRequested.toString(), fetchProfile)
  yield takeEvery(postUpdateUserRequested.toString(), postUpdateUser)
}

export default userSaga