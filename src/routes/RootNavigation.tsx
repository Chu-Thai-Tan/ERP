import { NavigationContainer } from '@react-navigation/native';

import { HomeStack } from './homeStack';
import { AuthStack } from './authStack';
import { useSelector } from 'react-redux';
import { authStatus } from '../store/auth/selectors';
import { isReadyRef, navigationRef } from '../utils/navigateService';

export function RootNavigation() {
  const isLogin = useSelector(authStatus);

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
