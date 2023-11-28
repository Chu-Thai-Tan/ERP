import { FC, useRef } from 'react';
// import { MediaStream, RTCView, mediaDevices } from 'react-native-webrtc';
// import notifee, { AndroidImportance } from '@notifee/react-native';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Button } from '../atoms/Button';
import { RNCamera } from 'react-native-camera';
import RNFS from 'react-native-fs';

type Props = {
  onTakePhoto: (data: string) => void;
};

export const Camera: FC<Props> = ({ onTakePhoto }) => {
  const camera = useRef<RNCamera>(null);
  // const [localStream, setLocalStream] = useState<MediaStream>();

  const takePictureHandler = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.current
        ?.takePictureAsync(options)
        .catch(e => console.log(JSON.stringify(e)));
      console.log(data);
      const base64 = await getBase64(data?.uri ?? '').catch(e =>
        console.log(e),
      );
      console.log(base64);
      onTakePhoto(base64 ?? '');
    }
  };
  const getBase64 = async (imageUri: string) => {
    const filepath = imageUri.split('//')[1];
    const imageUriBase64 = await RNFS.readFile(filepath, 'base64');
    return `${imageUriBase64}`;
  };

  return (
    <View style={styles.wrapper}>
      <RNCamera
        ref={camera}
        style={styles.camera}
        type={RNCamera.Constants.Type.front}
      >
        <Button
          title="Take picture"
          onPress={takePictureHandler}
          // style={styles.button}
        />
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    width: Dimensions.get('screen').width,
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    width: Dimensions.get('screen').width,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // button: {
  //   position: 'absolute',
  //   top: 10,
  // },
});
