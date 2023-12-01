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
import { CompreFace } from '@exadel/compreface-js-sdk';

registerGlobals();
const server = 'http://localhost';
const port = 8000;
const api_key = process.env.API_KEY ?? 'c92277cb-8381-40f7-a0c3-d60b1b74e450';

notifee.registerForegroundService(notification => {
  console.log('notifi', notification);
  return new Promise(() => {
    //
  });
});

const Home = ({ navigation }: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle: ViewStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  };

  const onTakePhoto = (data: string) => {
    let compreFace = new CompreFace(server, port); // set CompreFace url and port
    let recognitionService = compreFace.initFaceRecognitionService(api_key); // initialize service

    recognitionService
      .recognize(data, { limit: 1 })
      .then((res: any) => {
        console.log(res.result[0].subjects);
      })
      .catch(err => {
        console.log(err);
      });
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
