import { Toast } from '@tamagui/toast';
import { styled } from 'tamagui';

export const CustomToast = styled(Toast, {
  fd: 'row',
  gap: '$2',
  ai: 'center',
  px: '$4',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
});

export const CustomToastDescription = styled(Toast.Description, {
  size: '$4',
  fow: '$400',
  col: '#0F0F0F',
});
