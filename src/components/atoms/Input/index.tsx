import { View } from 'tamagui';
import { CustomInput } from './styles';
import { TInputProps } from './types';
import { forwardRef } from 'react';
import { TextInput } from 'react-native';

export const Input = forwardRef(({
  containerProps,
  ...inputProps
}: TInputProps, ref: any) => {
  return (
    <View w={'80%'} {...containerProps}>
      <CustomInput {...inputProps} ref={ref} />
    </View>
  );
});
