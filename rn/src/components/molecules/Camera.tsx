import { FC, useEffect, useState } from 'react';
import { MediaStream, RTCView, mediaDevices } from 'react-native-webrtc';
import notifee, { AndroidImportance } from '@notifee/react-native';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Button } from '../atoms/Button';

type Props = {
  onTakePhoto: () => void;
};

export const Camera: FC<Props> = ({ onTakePhoto }) => {
  const [localStream, setLocalStream] = useState<MediaStream>();
  const startLocalStream = async () => {
    try {
      const mediaStream = await mediaDevices.getUserMedia({
        video: true,
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
    <View style={styles.wrapper}>
      {localStream && (
        <RTCView
          style={styles.camera}
          objectFit={'cover'}
          streamURL={localStream?.toURL() || ''}
        ></RTCView>
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
