import {
  configureStore,
  ThunkAction,
  Action,
  ThunkDispatch,
} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch } from 'react-redux'
// import { ThunkDispatch } from 'redux-thunk';
import { useSelector } from 'react-redux'
import { authReducer } from './screens/Login/store/slice'
import { checkInReducer } from './screens/CheckIn/store/slice'

export const store = configureStore({
  reducer: {
    face: checkInReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunkDispatch = ThunkDispatch<RootState, any, Action<any>>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
