import { FC, useRef } from 'react';
import { Dimensions, Pressable, StyleSheet, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { convertImageToBase64 } from '../../utils/camera';
import { Stack, styled } from 'tamagui';
import { blackA } from '@tamagui/colors/src';
import { recognize } from '../../store/checkin/slice';
import { useAppDispatch } from '../../store';
import { Spinner } from '../atoms/Spinner';

type Props = {
  onTakePhoto: (data: string) => void;
  isLoading?: boolean;
};

const Wrapper = styled(Stack, {
  ai: 'center',
  jc: 'space-between',
  h: '100%',
  w: '100%',
});
const CameraSlot = styled(Stack, {
  w: 350,
  h: 350,
  br: 999,
  ov: 'hidden',
  mt: '15%',
});

export const Camera: FC<Props> = ({ onTakePhoto, isLoading }) => {
  const cameraRef = useRef<RNCamera>(null);
  const dispatch = useAppDispatch();

  const takePictureHandler = async () => {
    if (cameraRef.current) {
      try {
        dispatch(
          recognize({
            status: 'Loading',
          }),
        );
        const data = await cameraRef.current.takePictureAsync({
          quality: 0.5,
          base64: true,
        });
        const base64 = await convertImageToBase64(data?.uri ?? '');
        onTakePhoto(base64 ?? '');
      } catch (e) {
        console.log('Camera error', e);
        dispatch(
          recognize({
            response: e,
            status: 'Error',
          }),
        );
      }
    }
  };

  const renderPicTakerStyle = ({ pressed }: { pressed: boolean }) => [
    styles.button,
    (pressed || isLoading) && { opacity: 0.8 },
  ];

  return (
    <Wrapper>
      <CameraSlot>
        <RNCamera
          ref={cameraRef}
          style={{
            flex: 1,
          }}
          type={RNCamera.Constants.Type.front}
          captureAudio={false}
        >
          {isLoading && (
            <Stack
              bg={blackA.blackA9}
              w={'100%'}
              h={'100%'}
              ai={'center'}
              jc={'center'}
            >
              <Spinner />
            </Stack>
          )}
        </RNCamera>
      </CameraSlot>

      <Pressable
        style={renderPicTakerStyle}
        onPress={takePictureHandler}
        disabled={isLoading}
      >
        <View style={styles.buttonInside} />
      </Pressable>
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
  button: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: 'white',
    marginBottom: '12%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  buttonInside: {
    position: 'absolute',
    width: 73,
    height: 73,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
});
