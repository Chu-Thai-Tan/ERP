import { ViewProps } from 'react-native';
import { InputProps } from 'tamagui';

export type TInputProps = InputProps & {
  containerProps?: ViewProps;
};
