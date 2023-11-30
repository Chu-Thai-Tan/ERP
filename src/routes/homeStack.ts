import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import CheckIn from '../screens/CheckIn';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  CheckIn: {
    screen: CheckIn,
    navigationOptions: {
      title: 'Check In',
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
