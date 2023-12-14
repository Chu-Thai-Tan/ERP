import { Button as TamaguiButton, ButtonProps, styled } from 'tamagui';

type CustomButtonProps = ButtonProps;

const Button = styled(TamaguiButton, {
  size: '$3',
  mt: 10,
  w: '80%',
  bg: '#DA70D6',
  br: '$6',
  textAlign: 'center',
});
export const CustomButton: React.FC<CustomButtonProps> = props => {
  return <Button {...props} />;
};
