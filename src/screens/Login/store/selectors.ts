import { RootState } from '../../../store'

export const authStatus = (state: RootState) => state.auth.isAuthenticated
