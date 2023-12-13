import { View, Text } from 'react-native';
import {
  useToastController,
  useToastState,
  Toast,
} from '@tamagui/toast';
import { useEffect } from 'react';

type ToastProps = {};

// export const Toast: React.FC<ToastProps> = ({}) => {
//   return (
//     <View>
//       <Text>Toast</Text>
//     </View>
//   );
// };

export const CurrentToast = () => {
  const toast = useToastState();
  const tControl = useToastController();

  useEffect(() => {
    tControl.show('Chu Tan')
  },[])

  // don't show any toast if no toast is present or it's handled natively
  if (!toast || toast.isHandledNatively) {
    return null;
  }

  return (
    <Toast
      key={toast.id}
      duration={toast.duration}
      open
      // viewport={toast.viewport}
    >
      <Toast.Title>{toast.title}</Toast.Title>
      <Toast.Description>{toast.message}</Toast.Description>
    </Toast>
  );
};
