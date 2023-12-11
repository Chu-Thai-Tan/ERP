import { TouchableOpacity } from 'react-native';
import { Stack, styled, Text } from 'tamagui';
import { LogoApp } from '../components/atoms/Logo';
import { CustomInput } from '../components/atoms/CustomInput';
import { CustomButton } from '../components/atoms/CustomButton';
import { CustomText } from '../components/atoms/CustomText';
import { navigate } from '../utils/navigateService';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';

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
    backgroundColor: '#ffffff',
    height: '100%',
  });

  return (
    <Wrapper>
      <LogoApp />
      <CustomInput placeholder="Name" icon={'user'} />
      <CustomInput placeholder="Email" icon={'envelope'} />
      <CustomInput secureTextEntry placeholder="Password" icon={'key'} />
      <CustomInput
        secureTextEntry
        placeholder="Confirm Password"
        icon={faKey}
      />
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
