import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import CheckIn from '../screens/CheckIn';
import { NavigationContainer } from '@react-navigation/native';

interface Screen {
  component: React.FC<any>;
  name: string;
  title: string;
}

const screens: Screen[] = [
  {
    component: Home,
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
