import { Icon } from '../../atoms/Icon';
import { View } from 'tamagui';
import { Input } from '../../atoms/Input';
import { TIconInputProps } from './types';

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
      <Input containerProps={{ style: { width: '100%' } }} {...inputProps} />
    </View>
  );
};
