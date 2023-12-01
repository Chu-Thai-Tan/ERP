import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '.';
import { recognitionService } from '../config';

interface FaceCheckState {
  status: EFaceApiStatus;
  response?: any;
}

enum EFaceApiStatus {
  SUCCESSFUL = 'SUCCESSFUL',
  PENDING = 'PENDING',
  FAILED = 'FAILED',
  INITIAL = 'INITIAL',
}

export type Profile = {
  name: string;
  email: string;
};

const initialState: FaceCheckState = {
  status: EFaceApiStatus.INITIAL,
};

export const checkInSlice = createSlice({
  name: 'checkIn',
  initialState,
  reducers: {
    recognize: (state, action: PayloadAction<any>) => {
      state.response = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(recognizeFace.pending, state => {
      state.status = EFaceApiStatus.PENDING;
    });
    builder.addCase(recognizeFace.fulfilled, (state, action) => {
      state.status = EFaceApiStatus.SUCCESSFUL;
      state.response = action.payload;
    });
    builder.addCase(recognizeFace.rejected, state => {
      state.status = EFaceApiStatus.FAILED;
    });
  },
});

export const recognizeFace = createAsyncThunk<
  object,
  string,
  { state: { checkIn: FaceCheckState } }
>('checkIn/login', async (data: string, {}) => {
  const response = await recognitionService.recognize(data, { limit: 1 });
  return response;
});

export const { recognize } = checkInSlice.actions;

export const faceStatus = (state: RootState) => state.auth.status;

export const checkInReducer = checkInSlice.reducer;
