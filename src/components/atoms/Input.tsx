import { Input as TamaInput, InputProps, View, styled } from 'tamagui';
import { ViewProps } from 'react-native';

type TInputProps = InputProps & {
  containerProps?: ViewProps;
};

const Input = styled(TamaInput, {
  size: '$3',
  w: '100%',
  mt: 10,
  p: '$2',
  pl: '$6',
  br: '$0',
  ff: '$body',
  fow: '$500',
  bg: '$colorTransparent',
  boc: '$colorTransparent',
  bbc: '#DA70D6',
});

export const CustomInput: React.FC<TInputProps> = ({
  containerProps,
  ...inputProps
}) => {
  return (
    <View w={'80%'} {...containerProps}>
      <Input {...inputProps} />
    </View>
  );
};
