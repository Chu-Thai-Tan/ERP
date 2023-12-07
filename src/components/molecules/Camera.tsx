import { FC, useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { convertImageToBase64 } from '../../utils/camera';
import { Button, Stack, styled } from 'tamagui';

type Props = {
  onTakePhoto: (data: string) => void;
};

export const Camera: FC<Props> = ({ onTakePhoto }) => {
  const cameraRef = useRef<RNCamera>(null);

  const takePictureHandler = async () => {
    if (cameraRef.current) {
      try {
        const data = await cameraRef.current.takePictureAsync({
          quality: 0.5,
          base64: true,
        });
        const base64 = await convertImageToBase64(data?.uri ?? '').catch(e =>
          console.log(e),
        );
        onTakePhoto(base64 ?? '');
      } catch (e) {
        console.log('Camera error', e);
      }
    }
  };

  const Wrapper = styled(Stack, {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#CCCCFF',
    height: '100%',
    width: '100%',
  });
  const CameraSlot = styled(Stack, {
    width: 350,
    height: 350,
    borderRadius: 999,
    overflow: 'hidden',
    marginTop: 60,
  });

  const TakePhotoBtn = styled(Button, {
    width: 75,
    height: 75,
    borderRadius: 100,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  });

  const TakePhotoBtnInside = styled(Button, {
    position: 'absolute',
    width: 68,
    height: 68,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
  });

  return (
    <Wrapper>
      <CameraSlot>
        <RNCamera
          ref={cameraRef}
          style={styles.camera}
          type={RNCamera.Constants.Type.front}
        />
      </CameraSlot>
      <TakePhotoBtn onPress={takePictureHandler}>
        <TakePhotoBtnInside />
      </TakePhotoBtn>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    width: Dimensions.get('screen').width,
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
});
