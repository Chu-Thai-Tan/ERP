import { navigate } from '../helpers/NavigateService';
import { useAppDispatch } from '../store';
import { login } from '../store/auth/slice';

import { TouchableOpacity } from 'react-native';
import { Stack, Text } from 'tamagui';
import { LogoApp } from '../components/atoms/Logo';
import { CustomText } from '../components/atoms/CustomText';
import { Button } from '../components/atoms/Button';
import { IconInput } from '../components/molecules/IconInput';
import { CustomWrapper } from '../components/atoms/CustomWrapper';

export const Login = () => {
  const dispatch = useAppDispatch();

  const handleOnPress = () => {
    navigate('Register');
  };

  const loginHandler = () => {
    dispatch(login());
  };

  return (
    <CustomWrapper style={{ justifyContent: 'center' }}>
      <LogoApp />
      <IconInput placeholder="Email" icon={'envelope'} />
      <IconInput secureTextEntry placeholder="Password" icon={'lock'} />
      <Button mt={40} onPress={loginHandler}>
        <CustomText mt={0}>Login</CustomText>
      </Button>
      <Stack mt={10} dsp="flex" fd="row">
        <Text ml={5}>You don't have an account? </Text>
        <TouchableOpacity onPress={handleOnPress}>
          <CustomText>Register</CustomText>
        </TouchableOpacity>
      </Stack>
    </CustomWrapper>
  );
};
