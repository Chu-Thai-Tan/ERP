import { Stack } from './RootNavigation';
import { Screen } from './types';

type Props = {
  screens: Screen[];
};

export const StackScreen: React.FC<Props> = ({ screens }) => {
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
