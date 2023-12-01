import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import CheckIn from '../screens/CheckIn';
import { NavigationContainer } from '@react-navigation/native';

const screens = [
  {
    component: Home as any,
    name: 'Home',
    title: 'Home',
  },
  {
    component: CheckIn,
    name: 'CheckIn',
    title: 'Check In',
  },
];

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map(screen => (
          <Stack.Screen
            name={`${screen.name}`}
            options={{ title: `${screen.title}` }}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
