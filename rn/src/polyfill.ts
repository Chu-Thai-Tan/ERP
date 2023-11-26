import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { Buffer } from 'buffer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RN from 'react-native';
import RN2 from 'react-native';

Object.defineProperty(RN, 'ViewPropTypes', {
  get() {
    return ViewPropTypes;
  },
});

Object.defineProperty(RN2, 'ViewPropTypes', {
  get() {
    return ViewPropTypes;
  },
});

Object.defineProperty(RN, 'AsyncStorage', {
  get() {
    return AsyncStorage;
  },
});

Object.defineProperty(RN2, 'AsyncStorage', {
  get() {
    return AsyncStorage;
  },
});

global.Buffer = Buffer;
