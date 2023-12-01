import {
  SafeAreaView,
  StatusBar,
  View,
  ViewStyle,
  useColorScheme,
} from 'react-native';
import { Button } from '../components/atoms/Button';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import notifee from '@notifee/react-native';
import { registerGlobals } from 'react-native-webrtc';
import { recognizeFace } from '../store/checkInSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../store';

registerGlobals();

notifee.registerForegroundService(notification => {
  console.log('notifi', notification);
  return new Promise(() => {
    //
  });
});

const Home = ({ navigation }: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const dispatch = useAppDispatch()
  const backgroundStyle: ViewStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  };

  const onTakePhoto = (data: string) => {
    dispatch(recognizeFace(data));
  };

  const handleCheckIn = () => {
    navigation.navigate('CheckIn', { onTakePhoto });
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={backgroundStyle}>
        <Button title={'Check In'} onPress={handleCheckIn} />
        <Button title={'Check Out'} onPress={handleCheckIn} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
