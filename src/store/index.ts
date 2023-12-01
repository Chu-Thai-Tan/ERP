import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { checkInReducer } from './checkInSlice';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { useSelector } from 'react-redux';

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
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
