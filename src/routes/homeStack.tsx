import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { CheckIn } from '../screens/CheckIn';
import { InfoInDay } from '../screens/InfoInDay';

interface Screen {
  component: React.FC;
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
  {
    component: InfoInDay,
    name: 'InfoInDay',
    title: 'Status',
  },
];

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
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
  );
};
