import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { checkInReducer } from './checkInSlice';
import { useDispatch } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    face: checkInReducer,
  },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, any, Action<any>>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
