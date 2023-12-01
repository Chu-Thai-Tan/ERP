import { FC } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { Camera } from '../components/molecules/Camera';
import { RouteProp } from '@react-navigation/native';

type Props = {
  onTakePhoto: (data: string) => void;
  route: RouteProp<{}>;
  //  navigation: any;
};
const CheckIn: FC<Props> = ({ route }) => {
  const { onTakePhoto } = route.params;

  return (
    <View style={styles.wrapper}>
      <Camera onTakePhoto={onTakePhoto} />
      {/*<Text>abc</Text>*/}
    </View>
  );
};

export default CheckIn;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: Dimensions.get('screen').width,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
