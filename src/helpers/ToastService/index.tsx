import { View, Text } from 'react-native';
import { useToastController, useToastState, Toast } from '@tamagui/toast';
import { useEffect, useRef } from 'react';
import { TamaguiElement } from 'tamagui';

type ToastProps = {};

// export const Toast: React.FC<ToastProps> = ({}) => {
//   return (
//     <View>
//       <Text>Toast</Text>
//     </View>
//   );
// };

export const ToastService = (() => {
  return useToastController();
})();

export const CurrentToast = () => {
  const toast = useToastState();
  const tControl = useToastController();
  const tRef = useRef<TamaguiElement>(null);

  useEffect(() => {
    tControl.show('Chu Tan', { message: '123', duration: 1000 });
  }, []);

  // don't show any toast if no toast is present or it's handled natively
  if (!toast || toast.isHandledNatively) {
    return null;
  }

  // Toast.Action;

  return (
    <Toast
      key={toast.id}
      duration={toast.duration}
      open
      ref={tRef}
      viewportName={toast.viewportName}
      // viewport={toast.viewport}
    >
      <Toast.Title>{toast.title}</Toast.Title>
      <Toast.Description>{toast.message}</Toast.Description>
    </Toast>
  );
};
