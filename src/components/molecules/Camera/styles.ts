import { StyleSheet } from 'react-native'
import { Stack, styled } from 'tamagui'

export const Wrapper = styled(Stack, {
  ai: 'center',
  jc: 'space-between',
  h: '100%',
  w: '100%',
})
export const CameraSlot = styled(Stack, {
  w: 350,
  h: 350,
  br: 999,
  ov: 'hidden',
  mt: '15%',
})

export const styles = StyleSheet.create({
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
})
