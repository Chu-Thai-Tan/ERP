export enum EToastType {
  Error = 0,
  Success = 1,
}

export type TToastState = {
  open: boolean;
  title: string;
  id: string;
  options: {
    message: string;
    duration?: number;
  };
};

// export 
