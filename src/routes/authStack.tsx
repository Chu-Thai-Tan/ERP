import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { RegisterSecondStep } from '../screens/RegisterSecondStep';

interface Screen {
  component: React.FC<any>;
  name: string;
  title: string;
}

const screens: Screen[] = [
  {
    component: Login,
    name: 'Login',
    title: 'Login',
  },
  {
    component: Register,
    name: 'Register',
    title: 'Register',
  },
  {
    component: RegisterSecondStep,
    name: 'RegisterSecondStep',
    title: 'Register',
  },
];

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
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
