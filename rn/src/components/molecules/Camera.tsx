import { FC, useEffect, useState } from 'react';
import { MediaStream, RTCView, mediaDevices } from 'react-native-webrtc';
import notifee, { AndroidImportance } from '@notifee/react-native';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Button } from '../atoms/Button';

type Props = {
  onTakePhoto: () => void;
};

export const Camera: FC<Props> = ({ onTakePhoto }) => {
  // const camera = useRef<RTCView>(null);
  const [localStream, setLocalStream] = useState<MediaStream>();
  const startLocalStream = async () => {
    try {
      const mediaStream = await mediaDevices.getUserMedia({
        video: true,
        // {
        //   facingMode: 'user',
        //   optional: videoSourceId ? [{sourceId: videoSourceId}] : [],
        // },
      });
      setLocalStream(mediaStream);
      console.log(mediaStream.toURL());
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    startLocalStream();
  }, []);

  const stopCaptureHandler = () => {
    if (localStream) {
      localStream.release();
      setLocalStream(undefined);
      onTakePhoto();
    }
  };
  return (
    <View
    // style={styles.wrapper}
    >
      {localStream && (
        <RTCView
          // ref={camera}
          // captureAudio={false}
          style={styles.camera}
          // style={{flex: 1}}
          objectFit={'cover'}
          streamURL={localStream?.toURL() || ''}
          // type={RNCamera.Constants.Type.front}
          // androidCameraPermissionOptions={{
          //   title: 'Permission to use camera',
          //   message: 'We need your permission to use your camera',
          //   buttonPositive: 'Ok',
          //   buttonNegative: 'Cancel',
          // }}>
        >
          {/* {!isScanning ? (
        <Button title="Scan face" onPress={captureHandler} />
      ) : (
        <Button title="Stop scan" onPress={stopCaptureHandler} />
      )} */}
        </RTCView>
      )}
      <Button
        title="Stop scan"
        onPress={stopCaptureHandler}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    width: Dimensions.get('screen').width,
    // flexDirection: 'column-reverse',
  },
  wrapper: {
    flex: 1,
    width: Dimensions.get('screen').width,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    top: 10,
  },
});
