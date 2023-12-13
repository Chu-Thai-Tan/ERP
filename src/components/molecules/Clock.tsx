import { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { getTimeAmount } from '../../utils/date';
import { CustomText } from '../atoms/CustomText';

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
      <CustomText fos={'$14'} col={'#800080'} fow={'$400'}>
        {hour}:{minute}:{second}
      </CustomText>
    </View>
  );
};
