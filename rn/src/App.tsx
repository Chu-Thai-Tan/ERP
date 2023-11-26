import './polyfill';

import axios from 'axios';
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

  const uriToBlob = (uri: string) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        // return the blob
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new Error('uriToBlob failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);

      xhr.send(null);
    });
  };

  const checkInHandler = async () => {
    let server = 'http://192.168.110.203';
    let port = 8000;
    let api_key = 'e7ace549-b638-4b40-bfbf-cfecd49e88d5';

    let compreFace = new CompreFace(server, port); // set CompreFace url and port
    let recognitionService = compreFace.initFaceRecognitionService(api_key); // initialize service
    let faceCollection = recognitionService.getFaceCollection(); // use face collection to fill it with known faces
    //  let subjects = recognitionService.getSubjects(); // use subjects object to work with subjects directely
    // fetch(`http://192.168.110.203:8000/api/v1/recognition/recognize?limit=0`)
    //   .then(() => console.log('fetch success'))
    //   .catch(err => {
    //     console.log('fetch error');
    //     console.log(err);
    //   });
    //add face collection
    let path_to_image_add_collection =
      'https://st4.depositphotos.com/6903990/27898/i/450/depositphotos_278981062-stock-photo-beautiful-young-woman-clean-fresh.jpg';
    let name = encodeURIComponent('Tri');

    // const response = await fetch(path_to_image_add_collection);
    // const blob = await response.blob().then();
    const blob = await uriToBlob(path_to_image_add_collection);
    console.log(blob);

    let formData = new FormData();

    formData.append('file', blob as any, 'face1');

    console.log(api_key);
    // fetch(
    //   'http://192.168.110.203:8000/api/v1/recognition/faces/?subject=' + 'Duy',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'x-api-key': api_key,
    //     },
    //     body: formData,
    //   },
    // )
    //   .then(r => r.json())
    //   .then(function (data) {
    //     console.log('New example was saved', data);
    //   })
    //   .catch(function (error) {
    //     // alert('Request failed: ' + JSON.stringify(error));
    //     console.log(error);
    //   });

    // axios
    //   .post(
    //     'http://192.168.110.203:8000/api/v1/recognition/faces/?subject=' +
    //       'Duy' +
    //       'det_prob_threshold=1',
    //     formData,
    //     {
    //       headers: {
    //         'x-api-key': api_key,
    //         'Content-Type': 'multipart/form-data',
    //       },
    //     },
    //   )
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));

    faceCollection
      .add(blob, name)
      .then(response => {
        console.log('respond', response);
      })
      .catch(error => {
        console.log(`Oops! There is problem in uploading image1 ${JSON.stringify(error)}`);
      });

    // recognition face

    // const response2 = await fetch(path_to_image);
    // const blob2 = await response2.blob();

    // var bodyFormData = new FormData();
    // bodyFormData.append('file', path_to_image, 'example.jpg');
    // axios
    //   .post(
    //     `http://192.168.110.203:8000/api/v1/recognition/recognize?limit=0`,
    //     bodyFormData,
    //     {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //         'x-api-key': 'c92277cb-8381-40f7-a0c3-d60b1b74e450',
    //       },
    //     },
    //   )
    //   .then(() => console.log('axios success'))
    //   .catch(err => {
    //     console.log('axios error');
    //     console.log(err);
    //   });

    // recognitionService
    //   .recognize(blob, {})
    //   .then(response => {
    //     console.log('result recognize', JSON.stringify(response));
    //   })
    //   .catch(error => {
    //     console.log(`Oops! There is problem with recognizing image ${error}`);
    //     console.error(JSON.stringify(error));
    //   });

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
