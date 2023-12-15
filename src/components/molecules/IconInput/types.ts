import { InputProps } from 'tamagui';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Props as FAProps } from '@fortawesome/react-native-fontawesome';

export type TIconInputProps = InputProps & {
  icon: IconProp;
  iconProps?: FAProps;
};
