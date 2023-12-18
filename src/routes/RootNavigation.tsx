import { NavigationContainer } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import {
  isReadyRef,
  navigate,
  navigationRef,
} from '../helpers/NavigateService';
import { useEffect, useMemo } from 'react';
import { authStatus } from '../screens/Login/store/selectors';
import { routerNames } from './routerNames';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreen } from './StackScreen';
import { authScreens, homeScreens } from './routerRoutes';

export const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  const isLogin = useSelector(authStatus);
  useEffect(() => {
    if (!isLogin) {
      navigate(routerNames.LOGIN);
    } else {
      navigate(routerNames.HOME);
    }
  }, [isLogin]);

  const screens = useMemo(() => {
    return isLogin ? homeScreens : authScreens;
  }, [isLogin]);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <StackScreen screens={screens} />
    </NavigationContainer>
  );
};
