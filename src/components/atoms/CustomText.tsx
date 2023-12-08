import { styled, Text, TextProps } from 'tamagui';

export const CustomText: React.FC<TextProps> = props => {
  const CustomText = styled(Text, {
    color: '#800080',
    fontWeight: 'bold',
    ff: '$body',
  });
  return <CustomText {...props} />;
};
