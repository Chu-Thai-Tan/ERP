import { styled, Text as TamaText, TextProps } from 'tamagui';

const Text = styled(TamaText, {
  col: '#800080',
  fow: 'bold',
  ff: '$body',
});

export const CustomText: React.FC<TextProps> = props => {
  return <Text {...props} />;
};
