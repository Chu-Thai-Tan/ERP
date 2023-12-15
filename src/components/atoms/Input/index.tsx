import { View } from 'tamagui';
import { CustomInput } from './styles';
import { TInputProps } from './types';

export const Input: React.FC<TInputProps> = ({
  containerProps,
  ...inputProps
}) => {
  return (
    <View w={'80%'} {...containerProps}>
      <CustomInput {...inputProps} />
    </View>
  );
};
