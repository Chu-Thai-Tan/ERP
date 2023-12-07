import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FaceCheckState } from './types';

const initialState: FaceCheckState = {};

const checkInSlice = createSlice({
  name: 'checkIn',
  initialState,
  reducers: {
    recognize: (state, action: PayloadAction<any>) => {
      state.response = action.payload;
    },
  },
});

export const { recognize } = checkInSlice.actions;

export const checkInReducer = checkInSlice.reducer;
