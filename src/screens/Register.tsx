import { TouchableOpacity } from 'react-native';
import { Stack } from 'tamagui';
import { Logo } from '../components/atoms/Logo';
import { Button } from '../components/atoms/Button';
import { Text } from '../components/atoms/Text';
import { navigate } from '../helpers/NavigateService';
import { IconInput } from '../components/molecules/IconInput';
import { Wrapper } from '../components/atoms/Wrapper';
import AppLogo from '../assets/images/Logo.png';

export const Register = () => {
  const handleLogin = () => {
    navigate('Login');
  };
  const handleNextStep = () => {
    navigate('RegisterSecondStep');
  };

  return (
    <Wrapper style={{ justifyContent: 'center' }}>
      <Logo source={AppLogo} />
      <IconInput placeholder="Name" icon={'user'} />
      <IconInput placeholder="Email" icon={'envelope'} />
      <IconInput secureTextEntry placeholder="Password" icon={'key'} />
      <IconInput secureTextEntry placeholder="Confirm Password" icon={'key'} />
      <Button mt={40} onPress={handleNextStep}>
        <Text mt={0}>Next</Text>
      </Button>
      <Stack mt={10} dsp="flex" fd="row">
        <Text ml={5} fow={'$normal'}>
          You have an account?{' '}
        </Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </Stack>
    </Wrapper>
  );
};
