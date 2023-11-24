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

  const checkInHandler = async () => {
    setIsCheckingIn(true);
    let server = 'http://localhost';
    let port = 8000;
    let api_key = '2e15fb325-2ed9-4bb1-a03e-a0aa1753a538';

    let compreFace = new CompreFace(server, port); // set CompreFace url and port
    let recognitionService = compreFace.initFaceRecognitionService(api_key); // initialize service
    let faceCollection = recognitionService.getFaceCollection(); // use face collection to fill it with known faces
    //  let subjects = recognitionService.getSubjects(); // use subjects object to work with subjects directely

    //add face collection
    let path_to_image_add_collection = '../public/Tri/1.png';
    let name = encodeURIComponent('Tri');

    const response = await fetch(path_to_image_add_collection);
    const blob = await response.blob();

    faceCollection
      .add(blob, name)
      .then(response => {
        console.log('respond', response);
      })
      .catch(error => {
        console.log(`Oops! There is problem in uploading image1 ${error}`);
      });

    // recognition face
    let path_to_image = '../public/Tri/2.png';
    const response2 = await fetch(path_to_image);
    const blob2 = await response2.blob();

    recognitionService
      .recognize(blob2, {})
      .then(response => {
        console.log('result recognize', JSON.stringify(response));
      })
      .catch(error => {
        console.log(`Oops! There is problem with recognizing image ${error}`);
      });
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
