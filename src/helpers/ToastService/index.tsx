import { View, Text } from 'react-native';
import {
  useToastController,
  useToastState,
  Toast,
} from '@tamagui/toast';

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

  // don't show any toast if no toast is present or it's handled natively
  if (!toast || toast.isHandledNatively) {
    return null;
  }

  return (
    <Toast
      key={toast.id}
      duration={toast.duration}
      // viewport={toast.viewport}
    >
      <Toast.Title>{toast.title}</Toast.Title>
      <Toast.Description>{toast.message}</Toast.Description>
    </Toast>
  );
};
