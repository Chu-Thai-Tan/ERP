import { Input, InputProps, styled } from 'tamagui';

export const CustomInput: React.FC<InputProps> = ({ ...props }) => {
  const CustomInput = styled(Input, {
    size: '$3',
    width: '80%',
    marginTop: 10,
    padding: '$2',
    paddingLeft: 15,
    borderRadius: '$6',
  });
  return <CustomInput {...props} />;
};
