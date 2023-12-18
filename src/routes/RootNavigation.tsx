import { NavigationContainer } from '@react-navigation/native';

import { HomeStack } from './homeStack';
import { AuthStack } from './authStack';
import { useSelector } from 'react-redux';
import {
  isReadyRef,
  navigate,
  navigationRef,
} from '../helpers/NavigateService';
import { useEffect } from 'react';
import { authStatus } from '../screens/Login/store/selectors';

export const RootNavigation = () => {
  const isLogin = useSelector(authStatus);
  useEffect(() => {
    if (!isLogin) {
      navigate('Login');
    } else {
      navigate('Home');
    }
  }, [isLogin]);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      {isLogin ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
