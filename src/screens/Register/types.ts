import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface RegisterType {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface InputType {
  type: string;
  placeholder: string;
  icon: IconProp;
  value: string;
  errorMessage: string;
  errorCondition: boolean;
  isSecure: boolean;
  //  ref: React.Ref<any>;
}
