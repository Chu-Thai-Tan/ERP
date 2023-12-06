import { FC, useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Button } from '../atoms/Button';
import { RNCamera } from 'react-native-camera';
import { convertImageToBase64 } from '../../utils/camera';

type Props = {
  onTakePhoto: (data: string) => void;
};

export const Camera: FC<Props> = ({ onTakePhoto }) => {
  const cameraRef = useRef<RNCamera>(null);

  const takePictureHandler = async () => {
    if (cameraRef.current) {
      try {
        const data = await cameraRef.current.takePictureAsync({ quality: 0.5, base64: true });
        const base64 = await convertImageToBase64(data?.uri ?? '').catch(e =>
          console.log(e),
        );
        onTakePhoto(base64 ?? '');
      } catch (e) {
        console.log('Camera error', e);
      }
    }
  };

  return (
    <View style={styles.wrapper}>
      <RNCamera
        ref={cameraRef}
        style={styles.camera}
        type={RNCamera.Constants.Type.front}
      >
        <Button title="Take picture" onPress={takePictureHandler} />
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
});
