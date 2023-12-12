import { Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

export const InfoInDay = () => {
  const route: RouteProp<{ params: { date: string } }, 'params'> = useRoute();
  const { date } = route.params;
  return <Text>{date}</Text>;
};
