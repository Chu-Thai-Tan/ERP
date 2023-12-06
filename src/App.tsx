import './polyfill';

import { StatusBar, View, ViewStyle, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { HomeStack } from './routes/homeStack';
import { AuthStack } from './routes/authStack';
import { Provider } from 'react-redux';
import { store } from './store';
import notifee from '@notifee/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

notifee.registerForegroundService(notification => {
  console.log('notifi', notification);
  return new Promise(() => {
    //
  });
});

export function App(): JSX.Element {
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
      <SafeAreaProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <NavigationContainer>
          {isLogin ? <HomeStack /> : <AuthStack />}
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
