import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import Register from '../screens/Register';

const screens = [
  {
    component: Login as any,
    name: 'Login',
    title: 'Login',
  },
  {
    component: Register,
    name: 'Register',
    title: 'Register',
  },
];

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map(screen => (
          <Stack.Screen
            key={`${screen.name}`}
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
