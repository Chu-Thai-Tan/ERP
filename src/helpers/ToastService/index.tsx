import { View, Text } from 'react-native';
import { useToastController } from '@tamagui/toast';

type ToastProps = {};

export const ToastService = useToastController();
export const Toast: React.FC<ToastProps> = ({}) => {
  return (
    <View>
      <Text>Toast</Text>
    </View>
  );
};
