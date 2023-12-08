import { TouchableOpacity } from 'react-native';
import { Stack, styled, Text } from 'tamagui';
import { LogoApp } from '../components/atoms/Logo';
import { CustomInput } from '../components/atoms/CustomInput';
import { CustomButton } from '../components/atoms/CustomButton';
import { CustomText } from '../components/atoms/CustomText';
import { navigate } from '../utils/navigateService';

export const Register = () => {
  const handleLogin = () => {
    navigate('Login');
  };
  const handleNextStep = () => {
    navigate('RegisterSecondStep');
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
      <CustomInput placeholder="Name" />
      <CustomInput placeholder="Email" />
      <CustomInput secureTextEntry placeholder="Password" />
      <CustomInput secureTextEntry placeholder="Confirm Password" />
      <CustomButton onPress={handleNextStep}>
        <CustomText mt={0}>Next</CustomText>
      </CustomButton>
      <Stack mt={10} dsp="flex" fd="row">
        <Text ml={5}>You have an account? </Text>
        <TouchableOpacity onPress={handleLogin}>
          <CustomText>Login</CustomText>
        </TouchableOpacity>
      </Stack>
    </Wrapper>
  );
};
