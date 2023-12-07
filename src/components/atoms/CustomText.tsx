import { styled, Text, TextProps } from 'tamagui';

export const CustomText: React.FC<TextProps> = props => {
  const CustomText = styled(Text, {
    marginTop: 10,
    color: '#800020',
    fontWeight: 'bold',
  });
  return <CustomText {...props} />;
};
