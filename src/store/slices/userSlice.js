import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  profile: {}
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserRequested: (state) => {
      state.isLoading = true
    },
    getUserSuccess: (state, action) => {
      state.isLoading = false
      state.profile = action?.payload
    },
    getUserFailed: (state) => {
      state.isLoading = false
      state.profile = {}
    },
    postUpdateUserRequested: (state) => {
      state.isLoading = true
    },
    postUpdateUserSuccess: (state) => {
      state.isLoading = false
    },
    postUpdateUserFailed: (state) => {
      state.isLoading = false
    }
  }
})

export const {
  getUserRequested,
  getUserSuccess,
  getUserFailed,
  postUpdateUserRequested,
  postUpdateUserSuccess,
  postUpdateUserFailed
} = userSlice.actions

export default userSlice.reducer