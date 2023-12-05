import './polyfill';

import {
  SafeAreaView,
  StatusBar,
  View,
  ViewStyle,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import HomeStack from './routes/homeStack';
import AuthStack from './routes/authStack';
import { Provider } from 'react-redux';
import { store } from './store';
import { registerGlobals } from 'react-native-webrtc';
import notifee from '@notifee/react-native';

registerGlobals();

notifee.registerForegroundService(notification => {
  console.log('notifi', notification);
  return new Promise(() => {
    //
  });
});

function App(): JSX.Element {
  const isLogin = true;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle: ViewStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  };
  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View style={backgroundStyle}>
          {isLogin ? <HomeStack /> : <AuthStack />}
        </View>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
