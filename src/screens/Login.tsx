import { navigate } from '../helpers/navigateService';
import { useAppDispatch } from '../store';
import { login } from '../store/auth/slice';

import { TouchableOpacity } from 'react-native';
import { Stack, styled, Text } from 'tamagui';
import { LogoApp } from '../components/atoms/Logo';
import { CustomText } from '../components/atoms/CustomText';
import { CustomButton } from '../components/atoms/CustomButton';
import { IconInput } from '../components/molecules/IconInput';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled(Stack, {
  ai: 'center',
  jc: 'center',
  bg: 'white',
  h: '100%',
});

export const Login = () => {
  const dispatch = useAppDispatch();

  const handleOnPress = () => {
    navigate('Register');
  };

  const loginHandler = () => {
    dispatch(login());
  };

  return (
    <Wrapper>
      <LogoApp />
      <IconInput placeholder="Email" icon={'envelope'} />
      <IconInput secureTextEntry placeholder="Password" icon={'lock'} />
      <CustomButton mt={40} onPress={loginHandler}>
        <CustomText mt={0}>Login</CustomText>
      </CustomButton>
      <Stack mt={10} dsp="flex" fd="row">
        <Text ml={5}>You don't have an account? </Text>
        <TouchableOpacity onPress={handleOnPress}>
          <CustomText>Register</CustomText>
        </TouchableOpacity>
      </Stack>
    </Wrapper>
  );
};
