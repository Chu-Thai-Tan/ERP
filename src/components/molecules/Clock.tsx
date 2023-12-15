import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { getTimeAmount } from '../../utils/date';
import { Text } from '../atoms/Text';

interface ITimeRef {
  hour: string;
  minute: string;
  second: string;
}

export const Clock = () => {
  const dateObj = new Date();
  const [time, setTime] = useState<ITimeRef>({
    hour: '00',
    minute: '00',
    second: '00',
  });
  const { hour, minute, second } = time;
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeAmount(dateObj));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <View>
      <Text fos={'$14'} col={'#800080'} fow={'$400'}>
        {hour}:{minute}:{second}
      </Text>
    </View>
  );
};
