import { styled, Text, TextProps } from 'tamagui';

export const CustomText: React.FC<TextProps> = props => {
  const CustomText = styled(Text, {
    col: '#800080',
    fow: 'bold',
    ff: '$body',
  });
  return <CustomText {...props} />;
};
