import './polyfill';

import axios, { AxiosRequestConfig } from 'axios';
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
import { CompreFace } from '@exadel/compreface-js-sdk';
import { Input } from './components/atoms/Input';

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
  const onTakePhoto = (data: string) => {
    let compreFace = new CompreFace(server, port); // set CompreFace url and port
    let recognitionService = compreFace.initFaceRecognitionService(api_key); // initialize service

    recognitionService
      .recognize(data, { limit: 1 })
      .then((res: any) => {
        console.log(res.result[0].subjects);
        setIsCheckingIn(false);
      })
      .catch(err => {
        console.log(err);
        setIsCheckingIn(false);
      });
  };

  const checkInHandler = async () => {
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
          <Camera onTakePhoto={onTakePhoto} />
        ) : (
          <>
            <Button title={'Check In'} onPress={checkInHandler} />
            <Button title={'Check Out'} />
            <Input placeholder="Fill in name" label="Your name" />
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
