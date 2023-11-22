import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  ViewStyle,
  useColorScheme,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import notifee from '@notifee/react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Button } from './components/atoms/Button';
import { Camera } from './components/molecules/Camera';
import { registerGlobals } from 'react-native-webrtc';

registerGlobals();

notifee.registerForegroundService(notification => {
  console.log('notifi', notification);
  return new Promise(() => {
    //
  });
});

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isCheckingIn, setIsCheckingIn] = useState(false);

  const backgroundStyle: ViewStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  };

  const checkInHandler = () => {
    setIsCheckingIn(true);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={backgroundStyle}>
        {isCheckingIn ? (
          <Camera onTakePhoto={() => setIsCheckingIn(false)} />
        ) : (
          <>
            <Button title={'Check In'} onPress={checkInHandler} />
            <Button title={'Check Out'} />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default App;
