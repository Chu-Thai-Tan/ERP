import { NavigationContainer } from '@react-navigation/native';

import { HomeStack } from './homeStack';
import { AuthStack } from './authStack';
export function RootNavigation() {
  const isLogin = false;

  return (
    <NavigationContainer>
      {isLogin ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
