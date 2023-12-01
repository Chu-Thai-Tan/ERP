import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { checkInReducer } from './checkInSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    face: checkInReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
