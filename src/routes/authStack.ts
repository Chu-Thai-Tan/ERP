import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register',
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
