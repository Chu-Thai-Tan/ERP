import { navigate } from '../helpers/NavigateService';
import { useAppDispatch } from '../store';
import { login } from '../store/auth/slice';

import { TouchableOpacity } from 'react-native';
import { Stack } from 'tamagui';
import { Logo } from '../components/atoms/Logo';
import { Text } from '../components/atoms/Text';
import { Button } from '../components/atoms/Button';
import { IconInput } from '../components/molecules/IconInput';
import { Wrapper } from '../components/atoms/Wrapper';
import AppLogo from '../assets/images/Logo.png';

export const Login = () => {
  const dispatch = useAppDispatch();

  const handleOnPress = () => {
    navigate('Register');
  };

  const loginHandler = () => {
    dispatch(login());
  };

  return (
    <Wrapper style={{ justifyContent: 'center' }}>
      <Logo source={AppLogo} />
      <IconInput placeholder="Email" icon={'envelope'} />
      <IconInput secureTextEntry placeholder="Password" icon={'lock'} />
      <Button mt={40} onPress={loginHandler}>
        <Text mt={0}>Login</Text>
      </Button>
      <Stack mt={10} dsp="flex" fd="row">
        <Text ml={5} fow={'$normal'}>
          You don't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={handleOnPress}>
          <Text>Register</Text>
        </TouchableOpacity>
      </Stack>
    </Wrapper>
  );
};
