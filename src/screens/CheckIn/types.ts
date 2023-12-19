export interface FaceCheckState {
  response?: any
  status: TStatus
}

export type TStatus = 'Loading' | 'Error' | 'Success' | 'NotCheckedIn'
