import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: 145,
    width: '100%',
    backgroundColor: 'transparent',
  },
  knobContainer: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  knob: {
    width: 40,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#DA70D6',
  },
  calendar: {
    backgroundColor: 'transparent',
  },
  // markedContainer: {
  //   borderRadius: 0,
  //   backgroundColor: 'yellow',
  // },
  markedText: {
    color: '#800080',
    fontWeight: 'bold',
  },
  markedTextDay: {
    borderRadius: 0,
  },
})
