import { RootState } from '..';

export const authStatus = (state: RootState) => state.auth.isAuthenticated;
