import { createSlice } from '@reduxjs/toolkit'
import { AuthState } from '../types'

const initialState: AuthState = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.isAuthenticated = true
    },
    logout: state => {
      state.isAuthenticated = false
    },
  },
})

export const { login, logout } = authSlice.actions

export const authReducer = authSlice.reducer
