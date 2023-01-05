import { clearStorages, setStorages } from '@/libs/storage'
import { toast } from 'react-hot-toast'
import { call, delay, put, takeEvery } from 'redux-saga/effects'

import {
  postLoginRequested,
  postLoginSuccess,
  postLoginFailed,
  postLogoutRequested,
  postLogoutSuccess,
  postLogoutFailed,
  postRegisterRequested,
  postRegisterSuccess,
  postRegisterFailed,
  postTokenVerifRequested,
  postTokenVerifSuccess,
  postTokenVerifFailed,
  postResetPasswordRequested,
  postResetPasswordSuccess,
  postResetPasswordFailed
} from '../slices/authSlice'

import {
  postLoginAction,
  postLogoutAction,
  postRegisterAction,
  tokenVerif,
  postResetPasswordAction
} from './actions/authAction'

function* postLogin(action) {
  try {
    const res = yield call(postLoginAction, action?.payload)

    yield put({
      type: postLoginSuccess.toString()
    })
    setStorages([
      {
        name: 'token',
        value: res.data.access_token
      }
    ])
    toast.success(`Success Login`, {
      duration: 4000
    })
    yield delay(5000, true)
    window.location.href = '/protected/user'
  } catch (err) {
    yield put({
      type: postLoginFailed.toString()
    })
    toast.error(`${err.data.message}`, {
      duration: 4000
    })
  }
}


function* postLogout() {
  try {
    yield call(postLogoutAction)

    yield put({
      type: postLogoutSuccess.toString()
    })
    clearStorages(['token'])
    toast.success(`Success Logout`, {
      duration: 4000
    })
  } catch (err) {
    yield put({
      type: postLogoutFailed.toString()
    })
    toast.error(`${err.statusText}`, {
      duration: 4000
    })
  }
}

function* postRegister(action) {
  try {
    yield call(postRegisterAction, action?.payload)

    yield put({
      type: postRegisterSuccess.toString()
    })

    toast.success(`Success  Register`, {
      duration: 4000
    })
    yield delay(5000, true)
    window.location.href = '/auth/login'
  } catch (err) {
    yield put({
      type: postRegisterFailed.toString()
    })
    toast.error(`${err.data.message}`, {
      duration: 4000
    })
  }
}

function* postVerifToken(action) {
  try {
    const res = yield call(tokenVerif, action?.payload)
    if (res) {
      yield put({
        type: postTokenVerifSuccess.toString()
      })
      toast.success(`Success verif`, {
        duration: 4000
      })
      yield delay(5000, true)
      window.location.href = '/protected/user'
    }
  } catch (err) {
    yield put({
      type: postTokenVerifFailed.toString()
    })
    toast.error(`${err.statusText}`, {
      duration: 4000
    })
  }
}

function* postResetPassword(action) {
  try {
    const res = yield call(postResetPasswordAction, action?.payload)

    yield put({
      type: postResetPasswordSuccess.toString()
    })

    toast.success(`${res.data.status}`, {
      duration: 4000
    })
  } catch (err) {
    console.log(err)
    yield put({
      type: postResetPasswordFailed.toString()
    })
    toast.error(`${err.data.status}`, {
      duration: 4000
    })
  }
}

function* authSaga() {
  yield takeEvery(postLoginRequested.toString(), postLogin)
  yield takeEvery(postLogoutRequested.toString(), postLogout)
  yield takeEvery(postRegisterRequested.toString(), postRegister)
  yield takeEvery(postTokenVerifRequested.toString(), postVerifToken)
  yield takeEvery(postResetPasswordRequested.toString(), postResetPassword)
}

export default authSaga