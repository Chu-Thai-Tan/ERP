import { Input, InputProps, styled } from 'tamagui';

export const CustomInput: React.FC<InputProps> = ({ ...props }) => {
  const CustomInput = styled(Input, {
    size: '$3',
    w: '80%',
    mt: 10,
    p: '$2',
    pl: 15,
    br: '$6',
    ff: '$body',
    fow: '$500',
  });
  return <CustomInput {...props} />;
};
