import { CheckIn } from '../screens/CheckIn';
import { Home } from '../screens/Home';
import { InfoInDay } from '../screens/InfoInDay';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { RegisterSecondStep } from '../screens/RegisterSecondStep';
import { routerNames } from './routerNames';
import { Screen } from './types';

export const authScreens: Screen[] = [
  {
    component: Login,
    name: routerNames.LOGIN,
    title: 'Login',
  },
  {
    component: Register,
    name: routerNames.REGISTER,
    title: 'Register',
  },
  {
    component: RegisterSecondStep,
    name: routerNames.REGISTER_SECOND_STEP,
    title: 'Register',
  },
];

export const homeScreens: Screen[] = [
  {
    component: Home,
    name: routerNames.HOME,
    title: 'Home',
  },
  {
    component: CheckIn,
    name: routerNames.CHECK_IN,
    title: 'Check In',
  },
  {
    component: InfoInDay,
    name: routerNames.INFO_IN_DAY,
    title: 'Status',
  },
];
