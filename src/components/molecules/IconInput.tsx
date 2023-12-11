import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Icon } from '../atoms/Icon';
import { InputProps, View } from 'tamagui';
import { CustomInput } from '../atoms/Input';
import { Props as FAProps } from '@fortawesome/react-native-fontawesome';

type TIconInputProps = InputProps & {
  icon: IconProp;
  iconProps?: FAProps;
};

export const IconInput: React.FC<TIconInputProps> = ({
  icon,
  iconProps,
  ...inputProps
}) => {
  return (
    <View w={'80%'}>
      <View pos="absolute" t="$4" l="$2.5">
        <Icon icon={icon} color="#800080" {...iconProps} />
      </View>
      <CustomInput
        containerProps={{ style: { width: '100%' } }}
        {...inputProps}
      />
    </View>
  );
};
