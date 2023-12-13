import React from 'react';
import { Stack, StackProps, styled } from 'tamagui';

export const CustomWrapper: React.FC<StackProps> = props => {
  const Wrapper = styled(Stack, {
    backgroundColor: '#E6E6FA',
    width: '100%',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  });
  return <Wrapper {...props} />;
};
