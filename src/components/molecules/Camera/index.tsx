import { FC, useRef } from 'react'
import { Pressable, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { Stack } from 'tamagui'
import { blackA } from '@tamagui/colors/src'
import { Spinner } from '../../atoms/Spinner'
import { useAppDispatch } from '../../../store'
import { CameraSlot, Wrapper, styles } from './styles'
import { convertImageToBase64 } from './utils/convertImageToBase64'
import { TCameraProps } from './types'
import { recognize } from '../../../screens/CheckIn/store/slice'

export const Camera: FC<TCameraProps> = ({ onTakePhoto, isLoading }) => {
  const cameraRef = useRef<RNCamera>(null)
  const dispatch = useAppDispatch()

  const takePictureHandler = async () => {
    if (cameraRef.current) {
      try {
        dispatch(
          recognize({
            status: 'Loading',
          }),
        )
        const data = await cameraRef.current.takePictureAsync({
          quality: 0.5,
          base64: true,
        })
        const base64 = await convertImageToBase64(data?.uri ?? '')
        onTakePhoto(base64 ?? '')
      } catch (e) {
        console.log('Camera error', e)
        dispatch(
          recognize({
            response: e,
            status: 'Error',
          }),
        )
      }
    }
  }

  const renderPicTakerStyle = ({ pressed }: { pressed: boolean }) => [
    styles.button,
    (pressed || isLoading) && { opacity: 0.8 },
  ]

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
  )
}
