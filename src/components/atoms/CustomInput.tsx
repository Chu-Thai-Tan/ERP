import { Input as TamaInput, InputProps, View, styled } from 'tamagui';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

type IInputProps = InputProps & {
  icon?: IconDefinition;
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

export const CustomInput: React.FC<IInputProps> = ({ icon, ...inputProps }) => {
  return (
    <View w={'80%'}>
      {icon && (
        <View pos="absolute" t="$4" l="$2.5">
          <FontAwesomeIcon icon={icon} color="#800080" />
        </View>
      )}
      <Input {...inputProps} />
    </View>
  );
};
