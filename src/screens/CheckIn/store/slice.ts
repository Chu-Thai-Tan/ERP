import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FaceCheckState, TStatus } from '../types';

const initialState: FaceCheckState = {
  status: 'NotCheckedIn'
};

const checkInSlice = createSlice({
  name: 'checkIn',
  initialState,
  reducers: {
    recognize: (state, action: PayloadAction<FaceCheckState>) => {
      state.response = action.payload.response;
      state.status = action.payload.status;
    },
  },
});

export const { recognize } = checkInSlice.actions;

export const checkInReducer = checkInSlice.reducer;
