import { TouchableOpacity } from 'react-native';
import { Stack, styled, Text } from 'tamagui';
import { LogoApp } from '../components/atoms/Logo';
import { CustomButton } from '../components/atoms/CustomButton';
import { CustomText } from '../components/atoms/CustomText';
import { navigate } from '../utils/navigateService';
import { IconInput } from '../components/molecules/IconInput';

const Wrapper = styled(Stack, {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  height: '100%',
});

export const Register = () => {
  const handleLogin = () => {
    navigate('Login');
  };
  const handleNextStep = () => {
    navigate('RegisterSecondStep');
  };

  return (
    <Wrapper>
      <LogoApp />
      <IconInput placeholder="Name" icon={'user'} />
      <IconInput placeholder="Email" icon={'envelope'} />
      <IconInput secureTextEntry placeholder="Password" icon={'key'} />
      <IconInput secureTextEntry placeholder="Confirm Password" icon={'key'} />
      <CustomButton mt={40} onPress={handleNextStep}>
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
