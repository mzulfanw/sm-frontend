import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    postLoginRequested: (state) => {
      state.isLoading = true
    },
    postLoginSuccess: (state) => {
      state.isLoading = false
    },
    postLoginFailed: (state) => {
      state.isLoading = false
    },
    postLogoutRequested: (state) => {
      state.isLoading = true
    },
    postLogoutSuccess: (state) => {
      state.isLoading = false
    },
    postLogoutFailed: (state) => {
      state.isLoading = false
    },
    postRegisterRequested: (state) => {
      state.isLoading = true
    },
    postRegisterSuccess: (state) => {
      state.isLoading = false
    },
    postRegisterFailed: (state) => {
      state.isLoading = false
    },
    postTokenVerifRequested: (state) => {
      state.isLoading = true
    },
    postTokenVerifSuccess: (state) => {
      state.isLoading = false
    },
    postTokenVerifFailed: (state) => {
      state.isLoading = false
    },
    postResetPasswordRequested: (state) => {
      state.isLoading = true
    },
    postResetPasswordSuccess: (state) => {
      state.isLoading = false
    },
    postResetPasswordFailed: (state) => {
      state.isLoading = false
    }
  }
})

export const {
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
} = authSlice.actions

export default authSlice.reducer