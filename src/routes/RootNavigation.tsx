import { NavigationContainer } from '@react-navigation/native';

import { HomeStack } from './homeStack';
import { AuthStack } from './authStack';
import { useSelector } from 'react-redux';
import { authStatus } from '../store/auth/selectors';

export function RootNavigation() {
  const isLogin = useSelector(authStatus);

  return (
    <NavigationContainer>
      {isLogin ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
