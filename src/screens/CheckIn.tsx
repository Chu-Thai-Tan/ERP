import { FC } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { Camera } from '../components/molecules/Camera';
import { RouteProp } from '@react-navigation/native';
import { useRecognitionData } from '../hooks/useFaceApi';
import { useSelector } from 'react-redux';
import { faceStatus } from '../store/checkin/selectors';

type Props = {
  onTakePhoto: (data: string) => void;
  route: RouteProp<{}>;
};
export const CheckIn: FC<Props> = () => {
  const [setDataImage] = useRecognitionData();
  const response = useSelector(faceStatus);
  // const theme = useTheme();

  const onTakePhoto = (data: string) => {
    setDataImage(data);
  };

  return (
    <View style={styles.wrapper}>
      <Camera onTakePhoto={onTakePhoto} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: Dimensions.get('screen').width,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
