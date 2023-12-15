import './polyfill';

import { StatusBar, ViewStyle, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Provider } from 'react-redux';
import { store } from './store';
import notifee from '@notifee/react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TamaguiProvider, Theme } from 'tamagui';
import tamaguiConfig from '../tamagui.config';
import { RootNavigation } from './routes/RootNavigation';
import { ToastProvider } from '@tamagui/toast';
import { ToastImperativeProvider } from '@tamagui/toast/src/ToastImperative';
import { ToastModule } from './helpers/ToastService';
import { SafeToastViewport } from './helpers/ToastService/SafeToastViewport';

notifee.registerForegroundService(notification => {
  console.log('notifi', notification);
  return new Promise(() => {
    //
  });
});

export const App = (): JSX.Element => {
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
      <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
        <Theme name={'light'}>
          <SafeAreaProvider>
            <ToastProvider>
              <ToastImperativeProvider options={{ native: 'mobile' }}>
                <ToastModule />
              </ToastImperativeProvider>
              {/*<SafeToastViewport />*/}
            </ToastProvider>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={backgroundStyle.backgroundColor}
            />
            <RootNavigation />
          </SafeAreaProvider>
        </Theme>
      </TamaguiProvider>
    </Provider>
  );
};
