import { RootState } from '..';

export const faceStatus = (state: RootState) => state.face.response;
export const isFaceMatch = (state: RootState) =>
  state.face.status !== 'Error' && !!state.face.response;
