import { navigate } from '../utils/navigateService';
import { useAppDispatch } from '../store';
import { login } from '../store/auth/slice';

import { TouchableOpacity } from 'react-native';
import { Stack, styled, Text } from 'tamagui';
import { LogoApp } from '../components/atoms/Logo';
import { CustomInput } from '../components/atoms/CustomInput';
import { CustomText } from '../components/atoms/CustomText';
import { CustomButton } from '../components/atoms/CustomButton';

export const Login = () => {
  const dispatch = useAppDispatch();

  const handleOnPress = () => {
    navigate('Register');
  };

  const loginHandler = () => {
    dispatch(login());
  };

  const Wrapper = styled(Stack, {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCCCFF',
    height: '100%',
  });

  return (
    <Wrapper>
      <LogoApp />
      <CustomInput placeholder="Email" />
      <CustomInput secureTextEntry placeholder="Password" />
      <CustomButton onPress={loginHandler}>
        <CustomText marginTop={0}>Login</CustomText>
      </CustomButton>
      <Stack marginTop={10} display="flex" flexDirection="row">
        <Text marginLeft={5}>You don't have an account? </Text>
        <TouchableOpacity onPress={handleOnPress}>
          <CustomText>Register</CustomText>
        </TouchableOpacity>
      </Stack>
    </Wrapper>
  );
};
