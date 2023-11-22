import React, {FC, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Button} from '../atoms/Button';
import RNFS from 'react-native-fs';

type Props = {
  onTakePhoto: () => void;
};

export const Camera: FC<Props> = ({onTakePhoto}) => {
  const camera = useRef<RNCamera>(null);

  const captureHandler = async () => {
    const options = {quality: 0.5, base64: true};
    const data = await camera.current?.takePictureAsync(options);
    if (data) {
      const base64 = await getBase64(data.uri);
      console.log(base64);
    }
    onTakePhoto();
    camera.current?.recordAsync();
  };
  const getBase64 = async (imageUri: string) => {
    const filepath = imageUri.split('//')[1];
    const imageUriBase64 = await RNFS.readFile(filepath, 'base64');
    return `data:image/jpeg;base64,${imageUriBase64}`;
  };
  return (
    <RNCamera
      ref={camera}
      captureAudio={false}
      style={styles.cameraWrapper}
      type={RNCamera.Constants.Type.front}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}>
      <Button title="Take picture" onPress={captureHandler} />
    </RNCamera>
  );
};

const styles = StyleSheet.create({
  cameraWrapper: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
});
