import { NavigationContainer } from '@react-navigation/native';

import { HomeStack } from './homeStack';
import { AuthStack } from './authStack';
import { useSelector } from 'react-redux';
import { authStatus } from '../store/auth/selectors';
import { isReadyRef, navigate, navigationRef } from '../utils/navigateService';
import { useEffect } from 'react';

export function RootNavigation() {
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
}
