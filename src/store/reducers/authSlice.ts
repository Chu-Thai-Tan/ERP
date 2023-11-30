import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, store } from '..';

interface AuthState {
  status: ELoginStatus;
  profile?: Profile;
}

enum ELoginStatus {
  LOGGEDIN = 'LOGGEDIN',
  LOGGEDOUT = 'LOGGEDOUT',
  PENDING = 'PENDING',
  FAILED = 'FAILED',
}

export type Profile = {
  name: string;
  email: string;
};

const initialState: AuthState = {
  status: ELoginStatus.LOGGEDOUT,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initProfile: (state, action: PayloadAction<AuthState>) => {
      state = action.payload;
    },
  },
});

export const login = createAsyncThunk('auth/login', () => {
  return ;
});

export const { initProfile } = authSlice.actions;

export const loginStatus = (state: RootState) => state.auth.status;
export const profile = (state: RootState) => state.auth.profile;

export const authReducer = authSlice.reducer;
