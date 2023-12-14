import React from 'react';
import { Stack, StackProps, styled } from 'tamagui';

const Wrapper = styled(Stack, {
  backgroundColor: '#E6E6FA',
  width: '100%',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
});
export const CustomWrapper: React.FC<StackProps> = props => {
  return <Wrapper {...props} />;
};
