import { Button, styled } from 'tamagui';

export const CustomButton = (props: any) => {
  const CustomButton = styled(Button, {
    size: '$3',
    mt: 10,
    w: '80%',
    bg: '#DA70D6',
    br: '$6',
  });

  return <CustomButton {...props} />;
};
