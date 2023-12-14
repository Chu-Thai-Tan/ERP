import { CreateNativeToastOptions } from '@tamagui/toast/src/types';

export enum EToastType {
  Error = 0,
  Success = 1,
}

export type TToastState = {
  open: boolean;
  id: string;
  options: TToastOptions;
};

export type TToastOptions = CreateNativeToastOptions & {
  type?: EToastType;
  message: string;
};
