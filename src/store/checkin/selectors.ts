import { RootState } from '..';

export const faceResponse = (state: RootState) => state.face.response;
// export const isFaceMatch = (state: RootState) =>
//   state.face.status !== 'Error' && !!state.face.response;
export const faceApiStatus = (state: RootState) => state.face.status;
