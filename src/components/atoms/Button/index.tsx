import { ButtonProps, TamaguiElement } from 'tamagui';
import { CustomButton } from './styles';
import { Ref, forwardRef } from 'react';

export const Button = forwardRef(
  (props: ButtonProps, ref: Ref<TamaguiElement>) => {
    return <CustomButton {...props} ref={ref} />;
  },
);
