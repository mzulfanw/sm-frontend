import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  banner: []
}

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {
    getBannerRequested: (state) => {
      state.isLoading = true
    },
    getBannerSuccess: (state, action) => {
      state.isLoading = false
      state.banner = action?.payload
    },
    getBannerFailed: (state) => {
      state.isLoading = false
    }
  }
})

export const {
  getBannerRequested,
  getBannerSuccess,
  getBannerFailed
} = bannerSlice.actions

export default bannerSlice.reducer