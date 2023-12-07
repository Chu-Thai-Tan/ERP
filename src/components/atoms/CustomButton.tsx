import { Button, styled } from 'tamagui';

export const CustomButton = (props: any) => {
  const CustomButton = styled(Button, {
    marginTop: 10,
    size: '$3',
    width: '80%',
    backgroundColor: '#DA70D6',
    borderRadius: '$6',
  });

  return <CustomButton {...props} />;
};
